import React from 'react';
import {Button} from 'antd';
import {useLocation, useSearchParams} from 'react-router';

const param: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const {search,state } = useLocation();
  console.log('useLocation', decodeURIComponent(search));
  console.log('state', state);
  const name = searchParams.get('name');
  const age = searchParams.get('age');
  const address = searchParams.get('address');

  const handleClick = () => {
    setSearchParams(prev => {
      prev.set('name', '王老五');
      prev.set('age', '26');
      prev.set('address', '广州');
      return prev;
    });
  };
  return <>
    <p>Name: {name}</p>
    <p>Age: {age}</p>
    <p>Address: {address}</p>

    <Button type="primary" onClick={handleClick}>Update</Button>
  </>;
};
export default param;
