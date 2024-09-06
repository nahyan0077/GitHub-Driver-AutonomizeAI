
import React, { useState } from 'react';
import { InputField } from '../../ui/InputField/InputField';
import { Button } from '../../ui/Button/Button';
import axios from 'axios';
import { endpoints } from '../../../config/apiEndpoints';
import { setUserDetails } from '../../../redux/slices';
import { useDispatch } from 'react-redux';

export const InputButtonSection: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch()
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async () => {
    console.log(inputValue); 
    const response = await axios.get(`${endpoints.gitHubData}${inputValue}`)
    console.log(response.data);
    dispatch(setUserDetails(response.data))
    
  };

  const handleClear = () => {
    setInputValue('');
  };

  return (
    <div className="input-button-section">
      <div className="input-section">
        <InputField  onChange={handleInputChange} value={inputValue} />
      <div className="button-section">
        <Button text="Search" onClick={handleSubmit} style={{ backgroundColor: 'blue' }} />
        <Button text="Clear" onClick={handleClear}  style={{ backgroundColor: 'red' }}  />
      </div>
      </div>
    </div>
  );
};
