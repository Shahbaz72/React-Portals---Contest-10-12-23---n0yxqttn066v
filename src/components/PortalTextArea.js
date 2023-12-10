// PortalTextArea.js
import React from 'react';
import ReactDOM from 'react-dom';

const PortalTextArea = () => {
  return ReactDOM.createPortal(
    <div id="portal-textarea">
      <textarea id="textarea"></textarea>
    </div>,
    document.getElementById('root')
  );
};

export default PortalTextArea;
