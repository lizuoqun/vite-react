import {NavLink} from 'react-router';
import {hookRouters} from '../router/index.ts';

const Home = () => {
  return <div>
    <div style={{border: '2px solid black', width: '30%'}}>
      <h1>Hooks</h1>
      <ul>
        {
          hookRouters.map(item => {
            return <li key={item.path!}><NavLink to={item.path!}>{item.path}</NavLink></li>;
          })
        }
      </ul>
    </div>
  </div>;
};

export default Home;
