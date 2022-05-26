import React, { useState } from 'react';
import Button from '../../shared/Button';
import style from './ItemsList.module.scss';

const ItemsList = () => {
  const [chartItemsAmount, setchartItemsAmount] = useState(0);

  const [name, setName] = useState('');

  const handleAddItemToChart = () => {
    if (chartItemsAmount < 5) {
      setchartItemsAmount(chartItemsAmount + 1);
    }
  };

  const handleNameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  return (
    <div className={style.items_list__wrapper}>
      <div>
        <p>{chartItemsAmount ? `Количество товаров: ${chartItemsAmount}` : 'Корзина пуста'} </p>

        {chartItemsAmount === 5 && <p>Корзина заполнена!</p>}

        <Button btnText="Добавить" handleClick={handleAddItemToChart} />
      </div>
      <div>
        <p>{name || 'Укажите имя'}</p>
        <input type="text" onChange={handleNameInput} />
      </div>
    </div>
  );
};

export default ItemsList;
