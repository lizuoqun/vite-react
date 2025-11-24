import {createRoot} from 'react-dom/client';
import {unstableSetRender} from 'antd';

import {RouterProvider} from 'react-router/dom';
import router from './router';
import '@ant-design/v5-patch-for-react-19';
import './index.css';
import './pages/components/message.tsx';

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}/>
);

unstableSetRender((node, container) => {
  const root = createRoot(container);
  root.render(node);
  return async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
    root.unmount();
  };
});


