import React from 'react';

interface Props {
  title: string;
  age?: number;
  children?: React.ReactNode;
}

// 使用默认值
const defaultProps: Partial<Props> = {
  age: 18
};

// 方案一：定义接口（指定泛型）
const Child = (props: Props) => {
  return <>
    <div>Child---{props.title}</div>
  </>;
};

// 方案二：指定React.FC
const Child1: React.FC<Props> = (props) => {
  const {age} = {...defaultProps, ...props};
  return <>
    <div>Child1---{props.title}---{age}</div>
    {props.children}
  </>;
};

const communicate = () => {
  return <>
    <Child title="标题一"/>
    <Child1 title="标题二" age={20}>
      <p>传单个为对象，多个为数组</p>
      <div>插槽？</div>
    </Child1>
  </>;
};


export default communicate;
