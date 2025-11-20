import React, {useImperativeHandle, useRef, useState} from 'react';
import {Button, Flex, Input} from 'antd';

interface ChildRef {
  name: string;
  count: number;
  add: () => void;
  subtract: () => void;
  validate: () => boolean;
  reset: () => void;
}

function Child({ref}: React.Ref<ChildRef>) {
  const [count, setCount] = useState(0);
  const [from, setFrom] = useState({
    name: '',
    password: '',
    email: ''
  });
  // 参数三：不传表示子组件值变换后都会执行一次，传空数组表示只在初始化执行一次
  useImperativeHandle(ref, () => {
    console.log('useImperativeHandleHook');
    return {
      name: 'Child子组件',
      count,
      add: () => {
        setCount(count + 1);
      },
      subtract: () => {
        setCount(count - 1);
      },
      validate,
      reset
    };
  }, [count, from]);

  const validate = () => {
    if (!from.name) {
      console.log('name不能为空');
      return false;
    }
    if (!from.password) {
      console.log('password不能为空');
      return false;
    }
    if (!from.email) {
      console.log('email不能为空');
      return false;
    }
    return true;
  };
  const reset = () => {
    setFrom({
      name: '',
      password: '',
      email: ''
    });
  };
  return <>
    <div>Child子组件</div>
    <p>count：{count}</p>
    <Flex gap="small" wrap>
      <Button type="primary" onClick={() => setCount(count + 1)}> + 1</Button>
      <Button type="primary" onClick={() => setCount(count - 1)}> - 1</Button>
    </Flex>
    <hr/>
    <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
      <Input type="text" value={from.name} onChange={e => setFrom({...from, name: e.target.value})}/>
      <Input type="text" value={from.password} onChange={e => setFrom({...from, password: e.target.value})}/>
      <Input type="text" value={from.email} onChange={e => setFrom({...from, email: e.target.value})}/>
    </div>
  </>;
}

const useImperativeHandleHook = () => {
  const childRef = useRef<ChildRef | null>(null);
  const handleChild = () => {
    console.log(childRef.current);
  };
  return <>
    <div>useImperativeHandleHook 父组件</div>
    <Flex gap="small" wrap>
      <Button type="primary" onClick={handleChild}>getChild</Button>
      <Button type="primary" onClick={() => childRef.current?.add()}>控制子组件+1</Button>
      <Button type="primary" onClick={() => childRef.current?.subtract()}>控制子组件-1</Button>
    </Flex>
    <hr/>
    <Child ref={childRef}/>
    <hr/>
    <Flex gap="small" wrap>
      <Button type="primary" onClick={() => childRef.current?.validate()}>验证</Button>
      <Button type="primary" onClick={() => childRef.current?.reset()}>重置</Button>
    </Flex>
  </>;
};

export default useImperativeHandleHook;
