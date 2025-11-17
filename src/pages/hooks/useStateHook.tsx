import {useState} from 'react';
import {Button} from 'antd';

const UseStateHooke = () => {
  const [count, setCount] = useState<number>(0);
  const [arr, setArr] = useState<string[]>(['hello']);
  return <div>
    <h1>{count}</h1>
    <Button type="primary" onClick={() => setCount(count + 1)}>累加</Button>
    <h1>{arr}</h1>
    <Button type="primary" onClick={() => setArr([...arr, 'world'])}>Push</Button>
    <Button type="primary" onClick={() => setArr(arr.filter((item) => item !== 'world'))}>Filter</Button>
  </div>;
};
export default UseStateHooke;
