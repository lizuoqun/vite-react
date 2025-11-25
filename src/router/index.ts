import React, {ComponentType, lazy} from 'react';

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
import Error from '../Error.tsx';

const SuspenseComponent = lazy<ComponentType>(() => import('../pages/components/suspense.tsx'));
const hoComponents = lazy<ComponentType>(() => import('../pages/components/hoComponents.tsx'));
const Portal = lazy<ComponentType>(() => import('../pages/components/portal.tsx'));

const Layout = lazy<ComponentType>(() => import('../pages/layout/index.tsx'));
const Param = lazy<ComponentType>(() => import('../pages/layout/param.tsx'));

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
const data = [
  {name: '张三', age: 18, address: '广州'}
];

interface RouterItem {
  path: string;
  lazy?: () => Promise<{ Component: React.FC }>;
  loader?: () => Promise<any>;
  action?: (args: any) => Promise<any>;
  Component?: React.FC;
  ErrorBoundary?: React.FC;
  children?: RouterItem[];
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
  },
  {
    path: '/suspense',
    Component: SuspenseComponent
  },
  {
    path: '/hoComponents',
    Component: hoComponents
  },
  {
    path: '/portal',
    Component: Portal
  }
];

export const layoutRouters: RouterItem[] = [
  {
    path: '/layout',
    Component: Layout,
    children: [
      {
        path: 'home',
        Component: Home,
        loader: async () => {
          throw {
            code: 404,
            message: 'Loader Error By ErrorBoundary'
          };
        },
        ErrorBoundary: Error
      },
      {
        path: 'about/:id',
        lazy: async () => {
          await sleep(2000);
          const About = await import('../pages/layout/About.tsx');
          return {
            Component: About.default
          };
        },
        loader: async () => {
          return {
            data,
            message: 'success'
          };
        },
        action: async ({request}) => {
          await sleep(2000);
          const formData = await request.formData();
          data.push({
            address: formData.get('name'),
            name: formData.get('name'),
            age: formData.get('age')
          });
          return {
            data,
            success: true
          };
        }
      }
    ]
  },
  {
    path: '/param',
    Component: Param
  }
];

const notFound = [
  {
    path: '*',
    lazy: async () => {
      const notFound = await import('../notFound.tsx');
      return {
        Component: notFound.default
      };
    }
  }
];

export const routerArray: any[] = [...hookRouters, ...componentRouters, ...layoutRouters, ...notFound];

const router = createBrowserRouter(routerArray);

export default router;
