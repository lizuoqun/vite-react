import {createBrowserRouter} from 'react-router';
import UseStateHooke from '../pages/hooks/useStateHook.tsx';
import UseReducerHook from '../pages/hooks/useReducerHook.tsx';
import UseImmerHook from '../pages/hooks/useImmerHook.tsx';
import useEffectHook from '../pages/hooks/useEffectHook.tsx';
import useLayoutEffectHook from '../pages/hooks/useLayoutEffectHook.tsx';
import useSyncExternalStoreHook from '../pages/hooks/useSyncExternalStoreHook.tsx';
import useTransitionHook from '../pages/hooks/useTransitionHook.tsx';
import useRefHook from '../pages/hooks/useRefHook.tsx';
import useImperativeHandleHook from '../pages/hooks/useImperativeHandleHook.tsx';
import useContextHook from '../pages/hooks/useContextHook.tsx';
import useMemoHook from '../pages/hooks/useMemoHook.tsx';
import useCallbackHook from '../pages/hooks/useCallbackHook.tsx';
import useDebugValueHook from '../pages/hooks/useDebugValueHook.tsx';
import useIdHook from '../pages/hooks/useIdHook.tsx';

import communicate from '../pages/components/communicate.tsx';
import controlled from '../pages/components/controlled.tsx';
import Home from '../pages/Home.tsx';
import React from 'react';

interface RouterItem {
  path: string;
  Component: React.FC;
}

export const hookRouters: RouterItem[] = [
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
  },
  {
    path: '/useImperativeHandleHook',
    Component: useImperativeHandleHook
  },
  {
    path: '/useContextHook',
    Component: useContextHook
  },
  {
    path: '/useMemoHook',
    Component: useMemoHook
  },
  {
    path: '/useCallbackHook',
    Component: useCallbackHook
  },
  {
    path: '/useDebugValueHook',
    Component: useDebugValueHook
  },
  {
    path: '/useIdHook',
    Component: useIdHook
  }
];

export const componentRouters: RouterItem[] = [
  {
    path: '/communicate',
    Component: communicate
  },
  {
    path: '/controlled',
    Component: controlled
  }
];

const routerArray: any[] = [...hookRouters, ...componentRouters];

const router = createBrowserRouter(routerArray);

export default router;
