import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';

function useLayoutEffectHook() {
  const [count, setCount] = useState(0);
  const SUM = 1;

  const app1Ref = useRef<HTMLDivElement>({} as HTMLDivElement);
  const app2Ref = useRef<HTMLDivElement>({} as HTMLDivElement);
  const scrollTopRef = useRef<HTMLDivElement>({} as HTMLDivElement);

  // 异步执行，不阻塞DOM渲染
  useEffect(() => {
    for (let i = 0; i < SUM; i++) {
      setCount(count => count + 1);
    }
    app1Ref.current.style.transition = 'opacity 3s';
    app1Ref.current.style.opacity = '1';
  }, []);

  // 同步执行，阻塞DOM渲染
  useLayoutEffect(() => {
    // for (let i = 0; i < SUM; i++) {
    //   setCount(count => count + 1);
    // }
    app2Ref.current.style.transition = 'opacity 3s';
    app2Ref.current.style.opacity = '1';

    const scroll = window.location.hash.split('#')[1];
    if (scroll) {
      scrollTopRef.current.scrollTop = Number(scroll);
    }
  }, []);

  const handelScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (e.target) {
      window.location.href = `#${parseInt(e.target.scrollTop)}`;
    }
  };
  return <>
    <div>app</div>
    {
      Array.from({length: count}).map((_, index) => {
        return <div key={index}>{index}</div>;
      })
    }
    <div ref={app1Ref} style={{opacity: '0', width: '100px', height: '100px', background: 'red'}}>app1</div>
    <div ref={app2Ref} style={{opacity: '0', width: '100px', height: '100px', background: 'blue'}}>app2</div>
    <div ref={scrollTopRef} style={{height: '500px', overflow: 'auto'}} onScroll={handelScroll}>
      {
        Array.from({length: 500}).map((_, index) => {
          return <div key={index}>{index}</div>;
        })
      }
    </div>
  </>;
}

export default useLayoutEffectHook;
