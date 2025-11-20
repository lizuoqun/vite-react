import {useRef, useState} from 'react';
import {Button} from 'antd';

function useRefHook() {
  const divRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  let num = 0;
  let num2 = useRef(0);
  const handleClick = () => {
    console.log(divRef.current);
    divRef.current.style.color = 'red';
  };
  const handleAdd = () => {
    setCount(count => count + 1);
    num = count;
    num2.current = count;
  };
  return <>
    <div ref={divRef}>useRefHook</div>
    <Button type="primary" onClick={handleClick}>get Dom</Button>
    <hr/>
    <p>count: {count}， ----- num: {num}， ----- num2: {num2.current}</p>
    <Button type="primary" onClick={handleAdd}> + 1</Button>
  </>;
}

export default useRefHook;
