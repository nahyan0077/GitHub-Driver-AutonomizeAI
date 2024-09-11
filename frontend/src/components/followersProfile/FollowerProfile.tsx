import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../ui/Button/Button';
import axios from 'axios';
import { endpoints } from '../../config/apiEndpoints';
import LoadingPopUp from '../ui/LoadingPopUp/LoadingPopUp';

export const FollowerProfile: React.FC = () => {
    const navigate = useNavigate()
    const [followerData, setFollowerData] = useState <any> ({})
    const params = useParams()
    const [loading, setLoading] = useState(false)
    useEffect(()=>{
      setLoading(true)
      const followerData = async () => {
        const res = await axios.get(`${endpoints.gitHubData}${params.userName}`)
        setFollowerData(res.data)
        setLoading(false)
        }
        followerData()
    },[])

    if (loading) {
      return <LoadingPopUp isLoading={loading}  />
    }
    
  
    return (
      <div className="profile-box">
        <div className="profile-section">
          <img
            src={followerData.avatar_url || 'https://via.placeholder.com/150'}
            alt={followerData.name || 'User'}
            className="profile-image"
          />
          <h2>{followerData.name || 'John Doe'}</h2>
          <p>{followerData.bio || 'Full Stack Developer with a passion for open-source.'}</p>
          <div className='follow-section' >
            <Button text='followers' onClick={()=>navigate(`/followers/${followerData.login}`)} style={{backgroundColor:"gray"}} />
            <Button text='following'  style={{backgroundColor:"gray"}} />
          </div>
        </div>
      </div>
    );
}

export default FollowerProfile
