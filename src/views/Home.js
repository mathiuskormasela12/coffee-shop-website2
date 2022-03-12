// ========== Home
// import all modules
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// import all components
import { Button } from '../components';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Home',
    };

    this.click = this.click.bind(this);
  }

  componentDidMount() {
    const { title } = this.state;
    document.title = title;
  }

  click() {
    const { clickMe, name } = this.props;
    clickMe(name);
  }

  render() {
    const { name } = this.props;
    const { click } = this;
    return (
      <div>
        {
					name && <h1>Home</h1>
				}
        <Button type="button" onClick={click}>
          Click Me
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.data.name,
});

const mapDispatchToProps = {
  clickMe(name) {
    return {
      type: 'SET_NAME',
      payload: {
        data: {
          name: !name,
        },
      },
    };
  },
};

Home.propTypes = {
  clickMe: PropTypes.func,
  name: PropTypes.bool,
};

Home.defaultProps = {
  name: null,
  clickMe: () => {},
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
