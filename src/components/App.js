// App.js
import React, { useState } from 'react';
import '../styles/App.css';
import PortalButton from './PortalButton';
import PortalTextArea from './PortalTextArea';

const App = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    // Logic to handle text transfer from input to textarea
    const textArea = document.getElementById('portal-textarea');
    textArea.value = inputValue;
  };

  return (
    <div id="root">
      <input id="input" value={inputValue} onChange={handleInputChange} />
      <PortalButton buttonClick={handleButtonClick} />
      <PortalTextArea />
    </div>
  );
};

export default App;
