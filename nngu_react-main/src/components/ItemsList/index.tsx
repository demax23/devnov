import React from 'react';
import { isEnumDeclaration } from 'typescript';
import Item from '../Item';
import style from './ItemsList.module.scss';

const ItemsMock = [
  {
    id: 1,
    itemName: 'Ботинки',
    itemDescreption: 'Смотри какие потрясающие ботинки',
    price: 10000,
  },
  {
    id: 2,
    itemName: 'Шапка',
    itemDescreption: 'Смотри какие потрясающие шапки',
    price: 50000,
  },
  {
    id: 3,
    itemName: 'Платье',
    itemDescreption: 'Смотри какие потрясающие платья',
    price: 90000,
  },
  {
    id: 4,
    itemName: 'Ботинки',
    itemDescreption: 'Смотри какие потрясающие ботинки',
    price: 70000,
  },
];
const ItemList = () => {
  return (
    <div className={style.items_list_wrapper}>
      <p>Список товаров</p>
      <div className={style.items_list}>
        {ItemsMock.map((item) => {
          const { id, itemName, itemDescreption } = item;
          return <Item key={`ID: ${id}`} name={itemName} descreption={itemDescreption} />;
        })}

        {/* <Item name={ItemsMock.itemName} descreption={ItemsMock.itemDescreption} />
        <Item name="Шапка" descreption="Очень красивая шапка" />
        <Item name={ItemsMock.itemName} descreption={ItemsMock.itemDescreption} />
        <Item name={ItemsMock.itemName} descreption={ItemsMock.itemDescreption} /> */}
      </div>
    </div>
  );
};

export default ItemList;
