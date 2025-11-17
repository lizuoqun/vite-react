import {useImmer, useImmerReducer} from 'use-immer';
import {Button, Flex} from 'antd';

interface User {
  name: string;
  age: number;
  profile: {
    avatar: string;
    bio: string;
    preferences: {
      theme: string;
      notifications: boolean;
    };
  };
}

type State = {
  count: number;
  name: string;
};
type Action = {
  type: 'add' | 'sub'
};
const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'add':
      state.count++;
      break;
    case 'sub':
      state.count--;
      break;
    default:
      break;
  }
};

const useImmerHook = () => {
  const [user, setUser] = useImmer<User>({
    name: 'modify',
    age: 18,
    profile: {
      avatar: '/avatar.jpg',
      bio: '前端开发',
      preferences: {
        theme: 'light',
        notifications: true
      }
    }
  });
  const [state, dispatch] = useImmerReducer(reducer, {count: 0, name: 'modify'});
  return <>
    <div>
      <h1>useImmerHook</h1>
      <div>姓名：{user.name}</div>
      <div>年龄：{user.age}</div>
      <div>头像：{user.profile.avatar}</div>
      <div>简介：{user.profile.bio}</div>
      <div>主题：{user.profile.preferences.theme}</div>
      <div>通知：{user.profile.preferences.notifications ? '开启' : '关闭'}</div>
      <Button type="primary"
              onClick={() => setUser(draft => {
                const random = Number((Math.random() * 100).toFixed(0));
                draft.name = 'modify' + random;
                draft.age = random;
                draft.profile.preferences.notifications = !draft.profile.preferences.notifications;
              })}
      >Update</Button>
      <hr/>
      <div>name：{state.name}</div>
      <div>count：{state.count}</div>
      <Flex gap="small" wrap>
        <Button type="primary" onClick={() => dispatch({type: 'add'})}>累加</Button>
        <Button type="primary" onClick={() => dispatch({type: 'sub'})}>累减</Button>
      </Flex>
    </div>
  </>;
};
export default useImmerHook;
