// ========== Home
// import all modules
import React, { Component } from 'react';

// import all components
import { Navbar, Container } from '../components';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Home | Coffee Shop',
    };
  }

  componentDidMount() {
    const { title } = this.state;
    document.title = title;
  }

  render() {
    return (
      <Container width="100%">
        <Navbar />
        <h1>Home</h1>
      </Container>
    );
  }
}

export default Home;
