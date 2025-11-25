import type {MenuProps} from 'antd';
import {Menu as AntdMenu} from 'antd';
import {AppstoreOutlined} from '@ant-design/icons';
import {useNavigate} from 'react-router';

const Menu = () => {
  const navigate = useNavigate();
  const handleClick: MenuProps['onClick'] = (info) => {
    navigate(info.key); // 点击菜单项时，导航到对应的页面
  };

  const menuItems = [
    {
      key: 'home',
      label: 'Home',
      icon: <AppstoreOutlined/>
    },
    {
      key: 'about/123',
      label: 'About',
      icon: <AppstoreOutlined/>
    }
  ];

  return <>
    <AntdMenu style={{height: '100%'}} onClick={handleClick} items={menuItems} defaultSelectedKeys={['home']}/>;
  </>;
};

export default Menu;
