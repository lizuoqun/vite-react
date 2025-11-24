import React from 'react';

enum Role {
  ADMIN = 'admin',
  USER = 'user',
}

const withAuthorization = (role: Role) => (Component: React.FC) => {
  // 判断是否具有权限的函数
  const isAuthorized = (role: Role) => {
    return role === Role.ADMIN;
  };
  return (props: any) => {
    // 判断是否具有权限
    if (isAuthorized(role)) {
      //把props透传给组件
      return <Component {...props} />;
    } else {
      // 没有权限则返回一个提示
      return <div>抱歉，您没有权限访问该页面</div>;
    }
  };
};

const AdminPage = withAuthorization(Role.ADMIN)(() => {
  return <div>管理员页面</div>; //有权限输出
});

const UserPage = withAuthorization(Role.USER)(() => {
  return <div>用户页面</div>; //没有权限不输出
});

const hoComponents = () => {
  return <>
    <AdminPage/>
    <UserPage/>
    <hr/>
  </>;
};

export default hoComponents;
