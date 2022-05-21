import React, { useEffect, useState } from 'react';
import { usersUrl } from '../../api/constats';
import { IUsers } from '../../layouts/PageLayout/interface';

const UserPage = () => {
  const [userData, setUsersData] = useState<IUsers | null>(null);
  useEffect(() => {
    fetch(usersUrl)
      .then((response) => response.json())
      .then((usersData) => console.log(usersData));
  }, []);

  console.log(userData);
  return <div>UserPage</div>;
};

export default UserPage;
