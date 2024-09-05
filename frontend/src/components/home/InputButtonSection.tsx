
import React, { useState } from 'react';
import { InputField } from '../ui/InputField';
import { Button } from '../ui/Button';

export const InputButtonSection: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    console.log(inputValue); 
  };

  const handleClear = () => {
    setInputValue('');
  };

  return (
    <div className="input-button-section">
      <div className="input-section">
        <InputField  onChange={handleInputChange} value={inputValue} />
      </div>
      <div className="button-section">
        <Button text="Search" onClick={handleSubmit} style={{ backgroundColor: 'blue' }} />
        <Button text="Clear" onClick={handleClear}  style={{ backgroundColor: 'red' }}
        />
      </div>
    </div>
  );
};
