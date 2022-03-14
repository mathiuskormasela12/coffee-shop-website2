/* eslint-disable react/prop-types */
// ========== Card Favorite Coffee
// import all modules
import React from 'react';
import PropTypes from 'prop-types';

// import all components
import { Container, Button } from '..';

// import assets
import checklist from '../../assets/img/checklist-icon.png';

// import style
import styled from './style/style.module.scss';

export function CardFavoriteCoffee({
  title, lists, footerTitle, img,
}) {
  return (
    <div className={styled.card}>
      <Container width="60%" height="100%">
        <header className={styled['card-header']}>
          <h6 className={styled['card-title']}>
            { title }
          </h6>
          <img src={img} className={styled.img} alt={title} />
        </header>
        <main className={styled['card-main']}>
          <ul className={styled['card-list']}>
            {lists.map((item) => (
              <li key={item} className={styled['card-items']}>
                <img src={checklist} className={styled.checklist} alt="Check List" />
                <span>{ item }</span>
              </li>
            ))}
          </ul>
        </main>
        <footer className={styled['card-footer']}>
          <p className={styled['footer-title']}>
            { footerTitle }
          </p>
          <Button type="button" rounded size="sm" variant="transparent-primary">
            Order Now
          </Button>
        </footer>
      </Container>
    </div>
  );
}

CardFavoriteCoffee.propTypes = {
  title: PropTypes.string,
  footerTitle: PropTypes.string,
  lists: PropTypes.arrayOf,
  // img: PropTypes.node.isRequired,
};

CardFavoriteCoffee.defaultProps = {
  title: null,
  footerTitle: null,
  lists: [],
};
