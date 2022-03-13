// ========== Navbar
// import all modules
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { navItems } from '../../constant';

// import all components
import { Container, Button } from '..';

// import assets
import Logo from '../../assets/img/logo.png';

// import styles
import styled from './style/style.module.scss';

export function Navbar({ active }) {
  const navigate = useNavigate();

  const moveToPage = (page) => {
    navigate(page);
  };

  return (
    <nav className={styled.navbar}>
      <Container>
        <div className={styled['flex-nav']}>
          <div className={styled['nav-brand']} onClick={() => moveToPage('/')} aria-hidden="true">
            <figure className={styled.brand}>
              <img src={Logo} alt="Coffee Shop" />
              <figcaption>
                Coffee Shop
              </figcaption>
            </figure>
          </div>
          <ul className={styled['nav-list']}>
            { navItems.map((item) => (
              <li className={styled.items} key={String(item.id)}>
                <Link className={`${styled.link} ${active === item.text ? `${styled.active}` : ''}`} to={item.path}>
                  { item.text }
                </Link>
              </li>
            ))}
          </ul>
          <div className={styled['nav-btn']}>
            <Link to="/login" className={styled['btn-login']}>Login</Link>
            <Button type="button" variant="primary" size="md" rounded onClick={() => moveToPage('/register')}>Sign Up</Button>
          </div>
        </div>
      </Container>
    </nav>
  );
}

Navbar.propTypes = {
  active: PropTypes.string,
};

Navbar.defaultProps = {
  active: 'Home',
};
