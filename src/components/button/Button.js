// ========== Button
// import all modules
import React from 'react';
import PropTypes from 'prop-types';

// import styles
import styled from './style/style.module.scss';

export function Button(props) {
  const {
    type, onClick, children, variant, size, rounded,
  } = props;

  return (
    <button type={type} onClick={onClick} className={`${styled.btn} ${styled[`btn-${variant}`]} ${styled[`btn-${size}`]} ${rounded ? styled['btn-rounded'] : ''}`}>
      { children }
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
  rounded: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.string.isRequired,
};

Button.defaultProps = {
  type: 'submit',
  variant: 'primary',
  rounded: false,
  size: 'md',

  onClick: () => {},
};
