import {Breadcrumb} from 'antd';
import React from 'react';

const Header: React.FC = () => {
  return <>
    <Breadcrumb
      items={[
        {
          title: 'Home'
        },
        {
          title: <a href="">Application Center</a>
        },
        {
          title: <a href="">Application List</a>
        },
        {
          title: 'An Application'
        }
      ]}
    />
  </>;
};
export default Header;
