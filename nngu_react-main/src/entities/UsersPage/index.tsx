import React, { useEffect, useState } from 'react';
import { usersUrl } from '../../api/constats';
import { IUsers } from '../../interfaces/IUsers';
import UsersPageComponente from './components/UsersPageComponente';

const UserPage = () => {
  const [usersData, setUsersData] = useState<IUsers | null>(null);
  useEffect(() => {
    fetch(usersUrl)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return <UsersPageComponente usersDataAtrr={usersData} />;
};

export default UserPage;
