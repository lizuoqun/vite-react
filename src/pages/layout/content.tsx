import React from 'react';
import {Outlet} from 'react-router';

const content: React.FC = () => {
  return <>
    <Outlet />
  </>;
};
export default content;
