import React from 'react'
import { Headers } from '../../components/ui/Headers/Headers'
import { UsersList } from '../../components/UsersList/UsersList'

export const AllUsers: React.FC = () => {
  return (
    <>
        <Headers />
        <UsersList /> 
    </>
  )
}


