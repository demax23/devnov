import React, { FC } from 'react';
import { IUsers } from '../../../interfaces/IUsers';

interface IProps {
  usersDataAtrr: IUsers | null;
}
const UsersPageComponente: FC<IProps> = ({ usersDataAtrr }) => {
  console.log(usersDataAtrr);
  return (
    <div>
      <p>Список пользователей</p>
      <div>{
          usersDataAtrr? () : () 
          }</div>
    </div>
  );
};

export default UsersPageComponente;
