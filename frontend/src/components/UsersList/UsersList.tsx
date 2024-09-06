import React, { useEffect, useState } from 'react';
import { CLIENT_API } from '../../utils/axios';
import './UsersList.css'
import { Button } from '../ui/Button/Button';

interface User {
  _id: string;
  avatar_url: string;
  name: string;
  type: string;
  followers: number;
  following: number;
}

export const UsersList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function fetchAllUsers() {
      try {
        const res = await CLIENT_API.get('/user/get-users');
        setUsers(res.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    }
    fetchAllUsers();
  }, []);

  return (
    <div className='table-section'>
      <table>
        <thead>
          <tr>
            <th>Si.No</th>
            <th>Image</th>
            <th>Name</th>
            <th>Type</th>
            <th>Followers</th>
            <th>Following</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>


          {
          
          users.length > 0 ? (
            users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td><img src={user.avatar_url} alt={user.name} width="50" height="50" /></td>
                <td>{user.name || "N/A"}</td>
                <td>{user.type || "N/A"}</td>
                <td>{user.followers}</td>
                <td>{user.following}</td>
                <td> <Button text='Delete' style={{backgroundColor:"red"}} /> </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6}>No users found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
