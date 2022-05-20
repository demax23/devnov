import React, { FC } from 'react';
import style from './Item.module.scss';

interface IItem {
  name: string;
  descreption: string;
}
const Item: FC<IItem> = (props) => {
  const { name, descreption } = props;

  return (
    <div className={style.item_container}>
      <p>{name}</p>
      <p>Описание</p>
      <p>{descreption}</p>
    </div>
  );
};

export default Item;
