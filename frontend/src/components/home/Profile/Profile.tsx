// components/Profile.tsx
import React from 'react';
import './profile.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { Button } from '../../ui/Button/Button';
import { useNavigate } from 'react-router-dom';

export const Profile: React.FC = () => {
  const navigate = useNavigate()
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
          <Button text={`followers  ${githubData.userDetails.followers}`} onClick={()=>navigate(`/followers/${githubData.userDetails.username}`)} style={{backgroundColor:"teal"}} />
          <Button text={`following  ${githubData.userDetails.following}`}  style={{backgroundColor:"green"}} />

        </div>
      </div>
    </div>
  );
};
