// ========== Home
// import all modules
import React, { Component } from 'react';

// import all components
import { Navbar, Container, Button } from '../../components';

// import styles
import styled from './style/style.module.scss';

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
      <div className={styled.home}>
        <Container width="100%">
          <Navbar />
          <div className={styled.hero}>
            <Container width="80%">
              <section className={styled['section-text']}>
                <h1 className={styled.title}>
                  Start Your Day with Coffee and Good Meals
                </h1>
                <h6 className={styled.subtitle}>
                  We provide high quality beans, good taste, and
                  healthy meals made by love just for you.
                  Start your day with us for a bigger smile!
                </h6>
              </section>
              <Button type="button" variant="primary" size="lg">
                Get Started
              </Button>
            </Container>
          </div>
        </Container>
      </div>
    );
  }
}

export default Home;
