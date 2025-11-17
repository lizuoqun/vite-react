import {createBrowserRouter} from 'react-router';
import UseStateHooke from '../pages/hooks/useStateHook.tsx';
import Home from '../pages/Home.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Home
  },
  {
    path: '/useStateHook',
    Component: UseStateHooke
  }
]);

export default router;
