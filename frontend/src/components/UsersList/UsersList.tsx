import React, { useEffect, useState } from 'react';
import { CLIENT_API } from '../../utils/axios';
import './UsersList.css';
import { Button } from '../ui/Button/Button';
import { toast } from 'sonner';
import { InputField } from '../ui/InputField/InputField';

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
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const limit = 5

  useEffect(() => {
    fetchAllUsers();
  }, [page, search]);

  async function fetchAllUsers() {
    try {
      const res = await CLIENT_API.get('/user/get-users', {
        params: { page, limit, search},
      });
      setUsers(res.data.users);
      setTotal(res.data.total);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }

  const handleDelete = async (id: string) => {
    try {
      if (confirm('Are you sure you want to delete this user?')) {
        const res = await CLIENT_API.delete(`/user/delete-user/${id}`);
        toast.success(res.data.message);
        fetchAllUsers();
      }
    } catch (error: any) {
      console.error('Error deleting user:', error);
      toast.error(error.message);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };



  return (
    <div className='table-section'>
      <InputField
        type='text'
        placeholder='Search users...'
        value={search}
        onChange={handleSearchChange}
      />
      <table>
        <thead>
          <tr className='table-headers' >
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
          {users.length > 0 ? (
            users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1 + (page - 1) * limit}</td>
                <td>
                  <img src={user.avatar_url} alt={user.name} width='50' height='50' />
                </td>
                <td>{user.name || 'N/A'}</td>
                <td>{user.type || 'N/A'}</td>
                <td>{user.followers}</td>
                <td>{user.following}</td>
                <td>
                  <Button onClick={() => handleDelete(user._id)} text='Delete' style={{ backgroundColor: 'red' }} />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>No users found</td>
            </tr>
          )}
        </tbody>
      </table>
      <div className='pagination'>
        {Array.from({ length: Math.ceil(total / limit) }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};
