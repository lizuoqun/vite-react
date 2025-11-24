import Header from './header';
import Menu from './menu';
import Content from './content';
import React from 'react';
import {Layout as AntdLayout} from 'antd';

const {Sider} = AntdLayout;
const Layout: React.FC = () => {
  return <>
    <AntdLayout>
      <Sider width="200px">
        <Menu/>
      </Sider>
      <AntdLayout>
        <Header/>
        <Content/>
      </AntdLayout>
    </AntdLayout>
  </>;
};

export default Layout;
