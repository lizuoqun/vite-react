import {useReducer} from 'react';
import {Button, Flex} from 'antd';

const initState = {
  count: 0
};
type State = typeof initState;
const initFn = (state: State) => {
  console.log('initFn--- 只执行一次 ---', state);
  return state;
};
const reducer = (state: State, action: { type: 'add' | 'sub' }) => {
  switch (action.type) {
    case 'add':
      return {...state, count: state.count + 1};
    case 'sub':
      return {...state, count: state.count - 1};
    default:
      return state;
  }
};

const UseReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, initState, initFn);
  return <>
    <div>
      <p>count: {state.count}</p>
      <Flex gap="small" wrap>
        <Button type="primary" onClick={() => dispatch({type: 'add'})}>Add</Button>
        <Button type="primary" onClick={() => dispatch({type: 'sub'})}>Sub</Button>
      </Flex>
    </div>
  </>;
};

export default UseReducerHook;
