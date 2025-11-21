import {Input} from 'antd';
import React, {useCallback, useState} from 'react';

const functionMap = new WeakMap();
let counter = 1;
const useCallbackHook = () => {
  const [search, setSearch] = useState('');
  // 使用 useCallback 缓存函数
  const handleChange = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  if (!functionMap.has(handleChange)) {
    functionMap.set(handleChange, counter++);
  }
  console.log('函数Id', functionMap.get(handleChange));
  return <>
    <Input value={search} onChange={handleChange}/>
  </>;
};

export default useCallbackHook;
