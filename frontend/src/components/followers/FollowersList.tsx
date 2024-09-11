import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { endpoints } from '../../config/apiEndpoints'
import { useNavigate, useParams } from 'react-router-dom'
import './FollowersList.css'
import LoadingPopUp from '../ui/LoadingPopUp/LoadingPopUp'

export const FollowersList:  React.FC = () => {
    const params = useParams()
    const [followers, setFollower] = useState([])
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
        async function fetchFollowers() {
            const response = await axios.get(`${endpoints.gitHubData}${params.userName}/followers`)            
            setFollower(response.data) 
            setLoading(false)
        }
        fetchFollowers()
    },[])

    if (loading) {
        return <LoadingPopUp isLoading={loading}  />
      }
    

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

