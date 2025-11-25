import React from 'react';
import {Outlet, useNavigation} from 'react-router';
import {Alert, Spin} from 'antd';

const content: React.FC = () => {
  const navigation = useNavigation();
  console.log(navigation.state);
  const isLoading = navigation.state === 'loading';
  return <>
    {isLoading ? <Spin size="large" tip="loading...">
      <Alert description="loading..." message="加载中" type="info"/>
    </Spin> : <Outlet/>
    }
  </>;
};
export default content;
