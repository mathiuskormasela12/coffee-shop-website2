// ========== Button
// import all modules
import React from 'react';
import PropTypes from 'prop-types';

// import styles
import styled from './style/style.module.scss';

export function Button(props) {
  const { type, onClick, children } = props;

  return (
    <button type={type} onClick={onClick} className={styled.btn}>
      { children }
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

Button.defaultValue = {
  type: 'submit',
};
