import useStorage from './useStorage';
import {Button, Flex} from 'antd';

const useSyncExternalStoreHook = () => {
  const [count, setCount] = useStorage('count', 0);
  return <>
    <div>
      <p>count: {count}</p>
      <Flex gap="small" wrap>
        <Button type="primary" onClick={() => setCount(count + 1)}>Add</Button>
        <Button type="primary" onClick={() => setCount(count - 1)}>Sub</Button>
      </Flex>
    </div>
  </>;
};
export default useSyncExternalStoreHook;
