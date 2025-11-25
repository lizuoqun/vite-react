import useCountStore from '../../store/countStore';
import useUserStore from '../../store/userStore';
import useInfoStore from '../../store/infoStore';
import {Button, Flex} from 'antd';
import React from 'react';

const countOne: React.FC = () => {
  console.log('countOne Render');
  const {count, other, increment, decrement, getCount} = useCountStore();
  const {gourd, updateGourd} = useUserStore();
  const {name, age, address, updateAge} = useInfoStore();
  return <>
    <h1>CountA: {count}</h1>
    <h1>Other: {other}</h1>
    <Flex gap="small" wrap="wrap">
      <Button type="primary" onClick={() => increment()}>+</Button>
      <Button type="primary" onClick={() => decrement()}>-</Button>
      <Button type="primary" onClick={() => alert(getCount())}>Get Count</Button>
    </Flex>
    <br/>
    <p>Gourd: {gourd.oneChild}</p>
    <p>Gourd: {gourd.twoChild}</p>
    <p>Gourd: {gourd.threeChild}</p>
    <p>Gourd: {gourd.fourChild}</p>
    <p>Gourd: {gourd.fiveChild}</p>
    <p>Gourd: {gourd.sixChild}</p>
    <p>Gourd: {gourd.sevenChild}</p>
    <Button type="primary" onClick={updateGourd}>Update Gourd</Button>
    <br/>
    <p>Name: {name}</p>
    <p>Age: {age}</p>
    <p>Address: {address.county} {address.province} {address.city}</p>
    <Button type="primary" onClick={updateAge}>Update Age</Button>
  </>;
};

export default countOne;
