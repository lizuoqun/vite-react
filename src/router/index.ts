import {createBrowserRouter} from 'react-router';
import UseStateHooke from '../pages/hooks/useStateHook.tsx';
import UseReducerHook from '../pages/hooks/useReducerHook.tsx';
import UseImmerHook from '../pages/hooks/useImmerHook.tsx';
import Home from '../pages/Home.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Home
  },
  {
    path: '/useStateHook',
    Component: UseStateHooke
  },
  {
    path: '/useReducerHook',
    Component: UseReducerHook
  },
  {
    path: '/useImmerHook',
    Component: UseImmerHook
  }
]);

export default router;
