import {useEffect, useState} from 'react';
import {Button} from 'antd';

function Child() {
  const [userId, setUserId] = useState('1');
  const [userInfo, setUserInfo] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then(res => res.json()).then(res => {
      setUserInfo(res);
      setLoading(false);
    });
  }, [userId]);
  return <>
    <input type="text" id="userId" placeholder="请输入用户ID" value={userId} onChange={e => setUserId(e.target.value)}/>
    {loading ? <div>loading...</div> : <div>
      <p>id：{userInfo?.id}</p>
      <p>name：{userInfo?.name}</p>
      <p>username：{userInfo?.username}</p>
      <p>email：{userInfo?.email}</p>
      <p>phone：{userInfo?.phone}</p>
      <p>website：{userInfo?.website}</p>
      <p>address：{userInfo?.address?.city}, {userInfo?.address?.street}</p>
    </div>}
  </>;
}

function useEffectHook() {
  const app = document.getElementById('app');
  console.log(app);

  const [count, setCount] = useState(0);

  // 在副作用函数当中可以获取组件元素，表示其在组件渲染完成后执行（组件渲染完成后立即执行）
  // 并且组件更新后也会执行一次
  // 参数二：数组，依赖项，表示当依赖项发生变化时，会执行一次
  // 子组件卸载会执行一次
  useEffect(() => {
    const app = document.getElementById('app');
    console.log(app, 'useEffect');
  }, [count]);

  return <>
    <h1 id="app">useEffectHook</h1>
    <p>{count}</p>
    <Button onClick={() => setCount(count + 1)}>+1</Button>
    <hr/>
    <Child/>
  </>;
}

export default useEffectHook;
