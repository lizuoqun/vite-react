import {Input, List} from 'antd';
import React, {useDeferredValue, useState, useTransition} from 'react';

interface Item {
  id: number;
  name: string;
  address: string;
}

const useTransitionHook = () => {
  const [val, setVal] = useState('');
  const deferredQuery = useDeferredValue(val);
  const [list, setList] = useState<Item[]>([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    setVal(value);
    fetch(`/api/list?keyWord=${value}`).then(res => res.json()).then(res => {
      // setList(res.list);
      startTransition(() => {
        setList(res.list);
      });
    });

    const res = findItem();
    console.log('findItem---', res);
  };

  const findItem = () => {
    //过滤列表，仅在 deferredQuery 更新时触发
    return list.filter(item => item.name.toString().includes(deferredQuery));
  };

  return <>
    <Input value={val} onChange={handleChange}></Input>
    {isPending && <div>Loading...</div>}
    <List
      bordered
      dataSource={list}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta title={item.name} description={item.address}/>
        </List.Item>
      )}
    />
  </>;
};
export default useTransitionHook;
