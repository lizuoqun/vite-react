import type {InputRef} from 'antd';
import {Input} from 'antd';
import {useRef, useState} from 'react';

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

const Child4 = () => {
  const [file, setFile] = useState<File>();
  const inputRef = useRef<InputRef>({});
  return <>
    <p>文件选择器，非受控组件</p>
    <Input type="file" value={file} onChange={(e) => setFile(e.target.files?.[0])}/>
    <p>文件选择器，非受控组件，通过 ref 访问文件----{inputRef.current.value}</p>
    <Input defaultValue={file} type="file" ref={inputRef}/>
  </>;
};

const controlled = () => {
  return <>
    <Child1/>
    <hr/>
    <Child2/>
    <hr/>
    <Child3/>
    <hr/>
    <Child4/>
  </>;
};

export default controlled;
