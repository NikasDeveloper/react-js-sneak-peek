import React from 'react';

const withClassWrapper = (WrappedComponent, className) => props => (
  <div className={className}>
    <WrappedComponent {...props} />
  </div>
);

export default withClassWrapper;