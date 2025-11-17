import {NavLink} from 'react-router';

const Home = () => {
  return <div>
    <h1>Home</h1>
    <ul>
      <li><NavLink to="/useStateHook">useStateHook</NavLink></li>
    </ul>
  </div>;
};

export default Home;
