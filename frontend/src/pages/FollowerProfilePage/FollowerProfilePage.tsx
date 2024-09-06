import React from 'react'
import { Headers } from '../../components/ui/Headers/Headers'
import FollowerProfile from '../../components/followersProfile/FollowerProfile'
import { Repositories } from '../../components/home/repositories/Repositories'

export const FollowerProfilePage: React.FC = () => {
  return (
    <>
        <Headers />
        <FollowerProfile />
        <Repositories />
    </>
  )
}

