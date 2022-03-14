// ========== Home
// import all modules
import React, { Component } from 'react';
import { brandingListItems, favoriteCoffee } from '../../constant';

// import all components
import {
  Navbar, Container, Button, CardFavoriteCoffee,
} from '../../components';

// import styles
import styled from './style/style.module.scss';

// import assets
import teamWork from '../../assets/img/team-work.png';
import checkCircle from '../../assets/img/check-circle.png';
import staff from '../../assets/img/staff.png';
import store from '../../assets/img/store.png';
import customer from '../../assets/img/customer.png';

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
            <div className={styled['hero-head']}>
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
            <div className={styled['hero-branding']}>
              <Container width="80%">
                <div className={styled.box}>
                  <div className={styled['box-col']}>
                    <img src={staff} className={styled['box-img']} alt="Staff" />
                    <div className={styled['box-container']}>
                      <p className={styled['box-title']}>90+</p>
                      <p className={styled['box-subtitle']}>Staff</p>
                    </div>
                  </div>
                  <div className={styled['box-col']}>
                    <img src={store} className={styled['box-img']} alt="Store" />
                    <div className={styled['box-container']}>
                      <p className={styled['box-title']}>30+</p>
                      <p className={styled['box-subtitle']}>Stores</p>
                    </div>
                  </div>
                  <div className={styled['box-col']}>
                    <img src={customer} className={styled['box-img']} alt="Customer" />
                    <div className={styled['box-container']}>
                      <p className={styled['box-title']}>800+</p>
                      <p className={styled['box-subtitle']}>Customers</p>
                    </div>
                  </div>
                </div>
                <div className={styled.row}>
                  <div className={styled.col}>
                    <img src={teamWork} className={styled['team-work-img']} alt="Team Work" />
                  </div>
                  <div className={styled.col}>
                    <h6 className={styled['branding-title']}>
                      We Provide Good Coffee and Healthy Meals
                    </h6>
                    <p className={styled['branding-subtitle']}>
                      You can explore the menu that we provide
                      with fun and have their own taste and make
                      your day better.
                    </p>
                    <ul className={styled['branding-list']}>
                      {brandingListItems.map((item) => (
                        <li key={String(item.id)} className={styled['branding-list-items']}>
                          <img src={checkCircle} className={styled['check-circle']} alt="Check Circle" />
                          <span>
                            { item.text }
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Container>
            </div>
            <div className={styled['hero-product']}>
              <Container width="80%">
                <header className={styled['header-hero-product']}>
                  <h5 className={styled['header-title']}>
                    Here is People’s Favorite
                  </h5>
                  <p className={styled['header-subtitle']}>
                    Let’s choose and have
                    a bit taste of poeple’s favorite.
                    It might be yours too!
                  </p>
                </header>
                <main className={styled['main-product']}>
                  {favoriteCoffee.map((item) => (
                    <div className={styled['main-col']}>
                      <CardFavoriteCoffee
                        key={item.id}
                        title={item.title}
                        footerTitle={item.price}
                        lists={item.lists}
                        img={item.img}
                      />
                    </div>
                  ))}
                </main>
              </Container>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Home;
