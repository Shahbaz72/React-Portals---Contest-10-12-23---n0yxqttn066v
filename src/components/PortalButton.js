// PortalButton.js
import React from 'react';
import ReactDOM from 'react-dom';

const PortalButton = ({ buttonClick }) => {
  return ReactDOM.createPortal(
    <div id="portal-button">
      <button id="button" onClick={buttonClick}>
        Click
      </button>
    </div>,
    document.getElementById('root')
  );
};

export default PortalButton;
