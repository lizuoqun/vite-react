import React, {useMemo, useState} from 'react';
import {Button, Input} from 'antd';

interface User {
  name: string;
  age: number;
  phone: string;
}

const Card = React.memo((props: { user: User }) => {
  console.log('CardRender');
  const {user} = props;
  return <>
    <p>{user.name}</p>
    <p>{user.age}</p>
    <p>{user.phone}</p>
  </>;
});

function Shop() {
  const [search, setSearch] = useState('');
  const [goods, setGoods] = useState([
    {id: 1, name: '苹果', price: 10, count: 1},
    {id: 2, name: '香蕉', price: 20, count: 1},
    {id: 3, name: '橘子', price: 30, count: 1}
  ]);
  const handleAdd = (id: number) => {
    setGoods(goods.map(item => item.id === id ? {...item, count: item.count + 1} : item));
  };
  const handleSub = (id: number) => {
    setGoods(goods.map(item => item.id === id ? {...item, count: item.count - 1} : item));
  };
  const total1 = () => {
    console.log('total1...');
    return goods.reduce((total, item) => total + item.price * item.count, 0);
  };

  // 通过useMemo抱起来的返回是值
  const total = useMemo(() => {
    console.log('total...');
    return goods.reduce((total, item) => total + item.price * item.count, 0);
  }, [goods]);

  return (
    <div>
      <h1>父组件</h1>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}/>
      <table border={1} cellPadding={5} cellSpacing={0}>
        <thead>
        <tr>
          <th>商品名称</th>
          <th>商品价格</th>
          <th>商品数量</th>
        </tr>
        </thead>
        <tbody>
        {goods.map(item => <tr key={item.id}>
          <td>{item.name}</td>
          <td>{item.price * item.count}</td>
          <td>
            <button onClick={() => handleAdd(item.id)}>+</button>
            <span>{item.count}</span>
            <button onClick={() => handleSub(item.id)}>-</button>
          </td>
        </tr>)}
        </tbody>
      </table>
      <h2>总价：{total}</h2>
      <h2>总价：{total1()}</h2>
    </div>
  );
}

const useMemoHook = () => {
  // 改变value值会导致子组件重新渲染，所以子组件用React.memo包裹
  const [value, setValue] = useState('');
  const [user, setUser] = useState({
    name: '张三',
    age: 18,
    phone: '13800000000'
  });
  return <>
    <h1>useMemoHook</h1>
    <Input value={value} onChange={(e) => setValue(e.target.value)} placeholder="请输入姓名"/>
    <Card user={user}/>
    <Button type="primary" onClick={() => setUser({...user, name: value})}>修改</Button>
    <hr/>
    <Shop/>
  </>;
};

export default useMemoHook;
