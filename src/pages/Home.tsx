import {NavLink} from 'react-router';
import {componentRouters, hookRouters, layoutRouters, zusTandRouters} from '../router';

const Home = () => {
  const routerObject = {
    'Hooks': hookRouters,
    'Components': componentRouters,
    'Layout': layoutRouters,
    'Zustand': zusTandRouters
  };
  return <>
    <div className="grid grid-cols-4 gap-[16px] m-4">
      {
        Array.from(Object.entries(routerObject)).map(([key, item]) => {
          return <div
            className="border-[2px] border-solid border-[#666] rounded-[8px] shadow-[0_2px_4px_rgba(0,_0,_0,_1)] p-[16px]">
            <div className="text-[24px] font-bold">{key}</div>
            <ul>
              {
                item.map(item => {
                  return <li key={item.path}><NavLink to={item.path}>{item.path}</NavLink></li>;
                })
              }
            </ul>
          </div>;
        })
      }
    </div>
  </>;
};

export default Home;
