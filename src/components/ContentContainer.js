// ContentContainer.js
import React from 'react';

const ContentContainer = ({ children }) => {
  return (
    <div style={{ backgroundColor: 'white'}}>
      {children}
    </div>
  );
};

export default ContentContainer;
