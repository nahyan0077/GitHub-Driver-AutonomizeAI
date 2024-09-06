import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { endpoints } from '../../config/apiEndpoints'
import { useNavigate, useParams } from 'react-router-dom'
import './FollowersList.css'

export const FollowersList:  React.FC = () => {
    const params = useParams()
    const [followers, setFollower] = useState([])
    const navigate = useNavigate()
    
    useEffect(()=>{
        async function fetchFollowers() {
            const response = await axios.get(`${endpoints.gitHubData}${params.userName}/followers`)
            console.log("rdddddd",response);
            
            setFollower(response.data) 
        }
        fetchFollowers()
    },[])

    console.log(followers,"sdfsd");
    

  return (
    <>
    <div className='followers-header' >

        <h2> Followers </h2>
    </div>
        <div className='followers' >
            {
            followers.map((data: any, index) =>{
                return (

                <div className='followers-list' onClick={()=>navigate(`/follower/${data.login}`)} key={index} >
                    <img src={data.avatar_url} alt="" />
                    <h6> {data.login} </h6>
                </div>
                )
            })
            }
        </div> 
    </>
  )
}

