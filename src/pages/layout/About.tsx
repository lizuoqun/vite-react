import React from 'react';
import {NavLink, useLoaderData, useNavigation, useParams, useSubmit} from 'react-router';
import {Button, Form, Input} from 'antd';

const About: React.FC = () => {
  const {id} = useParams();
  const {data, message} = useLoaderData();
  console.log(data, message);
  const submit = useSubmit();
  const navigation = useNavigation();
  const handleSubmit = (values: any) => {
    submit(values, {method: 'post'});
  };
  return <>
    <h1>About {id}</h1>
    <Button type="primary">
      <NavLink to="/param?name=modify&age=18&address=北京" state={['1', '2', '3']}>Go to Param</NavLink>
    </Button>
    <hr/>
    <Form onFinish={handleSubmit}>
      <Form.Item name="name" label="姓名">
        <Input/>
      </Form.Item>
      <Form.Item name="age" label="年龄">
        <Input/>
      </Form.Item>
      <Button type="primary" htmlType="submit" disabled={navigation.state === 'submitting'}>提交</Button>
    </Form>
    {
      data.map((item: any) => <p>姓名：{item.name}---年龄：{item.age}</p>)
    }
  </>;
};

export default About;
