import {NavLink} from 'react-router';
import {hookRouters} from '../router';

const Home = () => {
  const homeStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '16px'
  };
  const itemStyle = {
    border: '2px solid black',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 1)',
    padding: '16px'
  };
  const titleStyle = {
    fontSize: '24px',
    fontWeight: 'bold'
  };
  return <div style={homeStyle}>
    {
      Array.from({length: 1}).map(() => {
        return <div style={itemStyle}>
          <div style={titleStyle}>Hooks</div>
          <ul>
            {
              hookRouters.map(item => {
                return <li key={item.path}><NavLink to={item.path}>{item.path}</NavLink></li>;
              })
            }
          </ul>
        </div>;
      })
    }
  </div>;
};

export default Home;
