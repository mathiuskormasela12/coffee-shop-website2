// ========== Container
// import all modules
import React from 'react';
import PropTypes from 'prop-types';

// import styles
import styled from './style/style.module.scss';

export function Container({
  children, width, relative, height,
}) {
  return (
    <div className={`${styled.container} ${relative ? styled.relative : ''}`} style={{ width, height }}>
      { children }
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  relative: PropTypes.bool,
};

Container.defaultProps = {
  width: '80%',
  height: 'auto',
  relative: false,
};
