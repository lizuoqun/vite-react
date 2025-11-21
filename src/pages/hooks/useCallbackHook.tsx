import {Input} from 'antd';
import React, {useCallback, useState} from 'react';

const functionMap = new WeakMap();
let counter = 1;

const Child = React.memo(({user, callback}: { user: { name: string; age: number }, callback: () => void }) => {
  console.log('Render Child');
  const styles = {
    color: 'red',
    fontSize: '20px'
  };
  return <div style={styles}>
    <div>{user.name}</div>
    <div>{user.age}</div>
    <button onClick={callback}>callback</button>
  </div>;
});
const useCallbackHook = () => {
  const [search, setSearch] = useState('');
  const [user, setUser] = useState<{ name: string; age: number }>({name: 'modify', age: 18});
  // 使用 useCallback 缓存函数
  const handleChange = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  if (!functionMap.has(handleChange)) {
    functionMap.set(handleChange, counter++);
  }

  // 触发handleChange会导致该方法重新创建，会导致子组件重新渲染
  const callback = useCallback(() => {
    console.log('callback');
  }, []);
  console.log('函数Id', functionMap.get(handleChange));
  return <>
    <Input value={search} onChange={handleChange}/>
    <hr/>
    <Child user={user} callback={callback}/>
  </>;
};

export default useCallbackHook;
