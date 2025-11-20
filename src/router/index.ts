import {createBrowserRouter} from 'react-router';
import UseStateHooke from '../pages/hooks/useStateHook.tsx';
import UseReducerHook from '../pages/hooks/useReducerHook.tsx';
import UseImmerHook from '../pages/hooks/useImmerHook.tsx';
import useEffectHook from '../pages/hooks/useEffectHook.tsx';
import useLayoutEffectHook from '../pages/hooks/useLayoutEffectHook.tsx';
import useSyncExternalStoreHook from '../pages/hooks/useSyncExternalStoreHook.tsx';
import useTransitionHook from '../pages/hooks/useTransitionHook.tsx';
import useRefHook from '../pages/hooks/useRefHook.tsx';
import Home from '../pages/Home.tsx';

const routerArray: any[] = [
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
  },
  {
    path: '/useSyncExternalStoreHook',
    Component: useSyncExternalStoreHook
  },
  {
    path: '/useTransitionHook',
    Component: useTransitionHook
  },
  {
    path: '/useEffectHook',
    Component: useEffectHook
  },
  {
    path: '/useLayoutEffectHook',
    Component: useLayoutEffectHook
  },
  {
    path: '/useRefHook',
    Component: useRefHook
  }
];

const router = createBrowserRouter(routerArray);

export default router;
