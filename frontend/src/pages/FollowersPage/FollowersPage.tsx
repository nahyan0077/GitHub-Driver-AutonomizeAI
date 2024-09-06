import React from 'react'
import { Headers } from '../../components/ui/Headers/Headers'
import { FollowersList } from '../../components/followers/FollowersList'


export const FollowersPage:  React.FC = () => {


  return (
    <>   
        <Headers />
        <FollowersList />
    </>
  )
}

