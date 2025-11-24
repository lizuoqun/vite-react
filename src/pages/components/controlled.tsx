import {Input, InputRef} from 'antd';
import React, {useRef, useState} from 'react';

const Child1 = () => {
  const [value, setValue] = useState('');
  return <>
    <p>非受控组件----{value}</p>
    <Input placeholder="请输入" value={value}/>
  </>;
};

const Child2 = () => {
  const [value, setValue] = useState('');
  return <>
    <p>受控组件 by onChange----{value}</p>
    <Input value={value} onChange={(e) => setValue(e.target.value)} placeholder="请输入"/>
  </>;
};

const Child3 = () => {
  const [value, setValue] = useState('');
  const inputRef = useRef<InputRef>({});
  return <>
    <p>受控组件 by defaultValue----{inputRef.current.value}</p>
    <Input defaultValue={value} ref={inputRef} placeholder="请输入"/>
  </>;
};

const controlled = () => {
  return <>
    <Child1/>
    <hr/>
    <Child2/>
    <hr/>
    <Child3/>
  </>;
};

export default controlled;
