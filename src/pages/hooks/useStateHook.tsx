import {useState} from 'react';
import {Button, Flex} from 'antd';

const UseStateHooke = () => {
  const [count, setCount] = useState<number>(0);
  const [arr, setArr] = useState<string[]>(['hello']);
  let [obj, setObject] = useState(() => {
    const date = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();
    return {
      date,
      name: 'modify',
      age: 18
    };
  });
  const handleCount = () => {
    // 异步设计，节省性能（并且执行了多个setCount异步函数，会加到队列中，并且进行了防抖控制）
    // setCount(count + 1);
    setCount(pre => pre + 1);
    console.log('count---', count);
  };
  return <div>
    <h1>{count}</h1>
    <Button type="primary" onClick={() => handleCount()}>累加</Button>
    <hr/>
    <h1>{arr.join(' ')}</h1>
    <Flex gap="small" wrap>
      <Button type="primary" onClick={() => setArr(['hello'])}>Reset</Button>
      <Button type="primary" onClick={() => setArr([...arr, 'world'])}>Push</Button>
      <Button type="primary" onClick={() => setArr(arr.filter((item) => item !== 'world'))}>Filter</Button>
      <Button type="primary"
              onClick={() => setArr(arr.map((item) => item === 'world' ? 'hello' : item))}>replace</Button>
    </Flex>
    <hr/>
    <h1>日期：{obj.date}</h1>
    <h1>姓名：{obj.name}</h1>
    <h1>年龄：{obj.age}</h1>
    <Button type="primary"
            onClick={() => setObject({...obj, age: Number((Math.random() * 100).toFixed(0))})}>修改Age</Button>
  </div>;
};
export default UseStateHooke;
