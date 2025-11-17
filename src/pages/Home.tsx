import {NavLink} from 'react-router';
import router from '../router/index.ts';

const Home = () => {
  return <div>
    <h1>Home</h1>
    <ul>
      {
        router.routes.map(item => {
          return <li key={item.path}><NavLink to={item.path}>{item.path}</NavLink></li>;
        })
      }
    </ul>
  </div>;
};

export default Home;
