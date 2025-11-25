import useCountStore from '../../store/countStore';
import useUserImmerStore from '../../store/userImmerStore';
import useInfoStore, {InfoInterface} from '../../store/infoStore';
import {Button, Flex} from 'antd';

import React, {useEffect, useState} from 'react';
import {useShallow} from 'zustand/react/shallow';

const countTwo: React.FC = () => {
  console.log('countTwo Render');
  const {count, other, increment, decrement, getCount} = useCountStore();
  const {gourd, updateGourd} = useUserImmerStore();
  // const {name, address} = useInfoStore();
  const {name, address} = useInfoStore(useShallow((state: InfoInterface) => ({
    name: state.name,
    address: state.address
  })));
  // const name = useInfoStore((state) => state.name);
  // const address = useInfoStore((state) => state.address);
  const clearLocalStorage = () => {
    useInfoStore.persist.clearStorage();
  };
  const [status, setStatus] = useState('未成年');
  useEffect(() => {
    useInfoStore.subscribe(state => state.age, age => {
      if (age >= 18) {
        setStatus('成年');
      } else {
        setStatus('未成年');
      }
    }, {
      equalityFn: (a, b) => a === b, // 默认为浅比较
      fireImmediately: true // 立即执行
    });
  }, []);
  return <>
    <h1>countB: {count}</h1>
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
    <p>Address: {address.county} {address.province} {address.city}</p>
    <p>Status: {status}</p>
    <Button type="primary" onClick={clearLocalStorage}>Clear LocalStorage</Button>
  </>;
};

export default countTwo;
