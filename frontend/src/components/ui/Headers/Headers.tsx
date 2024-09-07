import React from 'react'
import './Headers.css'
import { Button } from '../Button/Button'
import { useNavigate } from 'react-router-dom'

export const Headers: React.FC = () => {

  const navigate = useNavigate()

  return (
    <div className='header'  >
        <h1 onClick={()=> navigate('/')} > GitHub Driver </h1>
        <Button text='Users List' onClick={()=>navigate('/all-users')} style={{backgroundColor:"beige",color: "black"}} />
    </div>
  )
}

