import {useRouteError} from 'react-router';

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return <>
    <h1>ERROR PAGE</h1>
    <p>{error.message}</p>
    <p>{error.code}</p>
  </>;
};

export default Error;
