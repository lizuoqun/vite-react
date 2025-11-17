import {useSyncExternalStore} from 'react';

const useStorage = (key: string, initValue: any) => {
  // 订阅者
  const subscribe = (callback: () => void) => {
    // 订阅
    window.addEventListener('storage', callback);
    return () => {
      // 取消订阅
      window.removeEventListener('storage', callback);
    };
  };

  // 快照
  const getSnapshot = () => {
    // 快照返回的是引用类型要注意返回的引用值是否改变，即[]===[]为false
    return JSON.parse(localStorage.getItem(key) || JSON.stringify(initValue));
  };

  const res = useSyncExternalStore(subscribe, getSnapshot);

  const updateStorage = (value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
    window.dispatchEvent(new StorageEvent('storage'));
  };

  return [res, updateStorage];
};

export default useStorage;
