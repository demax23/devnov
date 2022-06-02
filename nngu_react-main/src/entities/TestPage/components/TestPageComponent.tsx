import React, { useEffect, useState } from 'react';

const TestPageComponent = () => {
  const [counter, setCount] = useState(0);
  const [someArray, setSomeArray] = useState([1, 2, 3]);

  const updetedArray someArray.map((num) => {
    console.log('hello');
    return num;
  });

  // componentDidMount

  useEffect(() => {
    console.log('компонент');
  }, []);

  // // componenntDidUpdete
  // useEffect(() => {
  //   console.log('компонент');
  // });

  // console.log('компонент обновлен');

  // // componentWillUnMount

  // useEffect(() => {
  //   return () => {
  //     console.log('sadd');
  //   };
  // }, []);

  return (
    <div>
      <p>{counter}</p>
      <button type="button" onClick={() => setCount((prev) => prev + 1)}>
        Увеличить counter
      </button>
      <hr />
      <button type="button" onClick={() => setSomeArray((prev) => [...prev, prev.length + 1])}>
        {' '}
        Добавить число в массив
      </button>
      {someArray.map((num, index) => {
        return <div key={`${num + index}`}>{num}</div>;
      })}
    </div>
  );
};

export default TestPageComponent;
