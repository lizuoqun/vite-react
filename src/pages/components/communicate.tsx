import React from 'react';
import {Button, Flex} from 'antd';

interface Props {
  title: string;
  age?: number;
  children?: React.ReactNode;
  callback?: (params: string) => void;
}

// 使用默认值
const defaultProps: Partial<Props> = {
  age: 18
};

// 方案一：定义接口（指定泛型）
const Child = (props: Props) => {
  /**----------------------------------------------*/
  const e = new Event('childClick');
  const clickTap = () => {
    e.params = {name: 'modify 子组件'};
    window.dispatchEvent(e);
  };
  /**----------------------------------------------*/
  return <>
    <div>Child---{props.title}</div>
    <Flex gap="small" wrap="wrap">
      <Button type="primary" onClick={() => props.callback('hello')}>子组件--父组件</Button>
      <Button type="primary" onClick={clickTap}>兄弟组件</Button>
    </Flex>

  </>;
};

// 方案二：指定React.FC
const Child1: React.FC<Props> = (props) => {
  /**----------------------------------------------*/
  window.addEventListener('childClick', (e) => {
    console.log('兄弟组件点击，接收', e.params);
  });
  /**----------------------------------------------*/
  const {age} = {...defaultProps, ...props};
  return <>
    <div>Child1---{props.title}---{age}</div>
    {props.children}
  </>;
};

const communicate = () => {
  const callback = (params: string) => {
    console.log('父组件接收 callback params', params);
  };
  return <>
    <Child title="标题一" callback={callback}/>
    <hr/>
    <Child1 title="标题二" age={20}>
      <p>传单个为对象，多个为数组</p>
      <div>插槽？</div>
    </Child1>
  </>;
};

/**
 * 用这个扩展
 * */
declare global {
  interface Event {
    params?: { name: string };
  }
}

export default communicate;
