// components/Profile.tsx
import React from 'react';
import './profile.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { Button } from '../../ui/Button/Button';

export const Profile: React.FC = () => {

  const {githubData} = useSelector((state: RootState) => state.gitHubData);
  

  return (
    <div className="profile-box">
      <div className="profile-section">
        <img
          src={githubData.userDetails.avatar_url || 'https://via.placeholder.com/150'}
          alt={githubData.userDetails.name || 'User'}
          className="profile-image"
        />
        <h2>{githubData.userDetails.name || 'John Doe'}</h2>
        <p>{githubData.userDetails.bio || 'Full Stack Developer with a passion for open-source.'}</p>
        <div className='follow-section' >
          <Button text='followers'  style={{backgroundColor:"gray"}} />
          <Button text='following'  style={{backgroundColor:"gray"}} />
        </div>
      </div>
    </div>
  );
};
