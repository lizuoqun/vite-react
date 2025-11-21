import {useId} from 'react';
import {Button, Input} from 'antd';

const useIdHook = () => {

  const id = useId();
  console.log('useIdHook---', id);
  return <>
    <p>{id}</p>
    <label htmlFor={id}>useIdHook</label>
    <Input id={id} type="text" aria-describedby={id}/>
    <p id={id}>
      请输入有效的电子邮件地址，例如：xxxx@example.com
    </p>

    <Button type="primary" onClick={() => window.onShowMessage()}>全局消息</Button>
  </>;
};

export default useIdHook;
