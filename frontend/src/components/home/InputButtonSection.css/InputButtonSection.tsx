
import React, { useState } from 'react';
import { InputField } from '../../ui/InputField/InputField';
import { Button } from '../../ui/Button/Button';
import axios from 'axios';
import { endpoints } from '../../../config/apiEndpoints';
import { setRepositories, setUserDetails } from '../../../redux/slices';
import { useDispatch } from 'react-redux';
import { CLIENT_API } from '../../../utils/axios';
export const InputButtonSection: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  const dispatch = useDispatch()
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async () => {
    try {

      const res = await CLIENT_API.get(`/user/get-user/${inputValue}`);
      // console.log("client", res);
  

      // const response = await axios.get(`${endpoints.gitHubData}${inputValue}`);
      dispatch(setUserDetails(res.data));
  
      const repos = await axios.get(`${endpoints.gitHubData}${inputValue}/repos`);
      dispatch(setRepositories(repos.data));
      
    } catch (error) {
      if (axios.isAxiosError(error)) {

        console.error('Error fetching data:', error.response?.data || error.message);
        alert(`Error: ${error.response?.data?.message || error.message}`);

      } else {

        console.error('Unexpected error:', error);
        alert('An unexpected error occurred.');
      }
    }
  };

  const handleClear = () => {
    setInputValue('');
  };

  return (
    <div className="input-button-section">
      <div className="input-section">
        <InputField  onChange={handleInputChange} value={inputValue} />
      <div className="button-section">
        <Button text="Search" onClick={handleSubmit}  style={{ backgroundColor: 'blue' }} />
        <Button text="Clear" onClick={handleClear}  style={{ backgroundColor: 'red' }}  />
      </div>
      </div>
    </div>
  );
};
