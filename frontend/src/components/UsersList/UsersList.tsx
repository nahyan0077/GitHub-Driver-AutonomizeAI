import React, { useEffect, useState } from 'react';
import { CLIENT_API } from '../../utils/axios';
import './UsersList.css'
import { Button } from '../ui/Button/Button';
import { toast } from 'sonner';

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
    fetchAllUsers();
  }, []);
  
  async function fetchAllUsers() {
    try {
      const res = await CLIENT_API.get('/user/get-users');
      setUsers(res.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }

  const handleDelete = async (id: string) => {
    try {
      
      if(confirm("Are you sure want to delete this user ?")){
        const res = await CLIENT_API.delete(`/user/delete-user/${id}`)
        console.log("delete  ",res);
        toast.success(res.data.message)
        fetchAllUsers();
      }
    } catch (error: any) {
      console.error('Error fetching users:', error);
      toast.error(error)
    }
  }

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
                <td> <Button onClick={()=>handleDelete(user._id)} text='Delete' style={{backgroundColor:"red"}} /> </td>
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
