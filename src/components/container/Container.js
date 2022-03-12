// ========== Container
// import all modules
import React from 'react';
import PropTypes from 'prop-types';

// import styles
import styled from './style/style.module.scss';

export function Container({ children, width }) {
  return (
    <div className={styled.container} style={{ width }}>
      { children }
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
};

Container.defaultProps = {
  width: '80%',
};
