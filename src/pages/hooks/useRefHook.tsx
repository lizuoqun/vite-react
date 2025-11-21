import {useRef, useState} from 'react';
import {Button, Flex} from 'antd';

function useRefHook() {
  const divRef = useRef<HTMLDivElement>({} as HTMLDivElement);
  const [count, setCount] = useState<number>(0);
  const [timer, setTimer] = useState<number>(0);
  // 因为每次渲染，divRef都会重新创建，所以每次点击都会获取最新的divRef
  // let timerNumber = 0
  let timerNumber = useRef<NodeJS.Timeout | number | null>(null);
  let num = 0;
  let num2 = useRef(0);
  const handleClick = () => {
    console.log(divRef.current);
    (divRef.current as HTMLDivElement).style.color = 'red';
  };
  const handleAdd = () => {
    setCount(count => count + 1);
    num = count;
    num2.current = count;
  };
  const onStart = () => {
    timerNumber.current = Number(setInterval(() => {
      setTimer(timer => timer + 1);
    }, 100));
  };
  const onStop = () => {
    clearInterval(Number(timerNumber.current));
  };
  return <>
    <div ref={divRef}>useRefHook</div>
    <Button type="primary" onClick={handleClick}>get Dom</Button>
    <hr/>
    <p>count: {count}， ----- num: {num}， ----- num2: {num2.current}</p>
    <Button type="primary" onClick={handleAdd}> + 1</Button>

    <hr/>
    <p>定时器:{timer}</p>
    <Flex gap="small" wrap="wrap">
      <Button type="primary" onClick={onStart}>开始</Button>
      <Button type="primary" onClick={onStop}>停止</Button>
    </Flex>
  </>;
}

export default useRefHook;
