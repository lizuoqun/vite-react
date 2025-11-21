import {useDebugValue, useState} from 'react';
import {Button} from 'antd';

const useCookie = (name: string, initValue: any) => {
  const [cookie, setCookie] = useState(initValue);
  const getCookie = () => {
    return document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'))?.[2] || initValue;
  };

  const updateCookie = (value: any) => {
    document.cookie = `${name}=${value}`;
    setCookie(value);
  };

  const deleteCookie = () => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    setCookie('');
  };

  // 在react devtools中使用useDebugValue格式化cookie
  useDebugValue(cookie, () => {
    return `cookie格式化：${cookie}`;
  });

  return [cookie, updateCookie, deleteCookie] as const;
};

const useDebugValueHook = () => {
  const [cookie, updateCookie, deleteCookie] = useCookie('name', '');

  return <>
    <p>cookie:{cookie}</p>
    <Button type="primary" onClick={() => updateCookie('modify')}>修改</Button>
    <Button type="primary" onClick={() => deleteCookie()}>删除</Button>
  </>;
};

export default useDebugValueHook;
