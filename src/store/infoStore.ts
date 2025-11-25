import {create} from 'zustand';
import {immer} from 'zustand/middleware/immer';
import {createJSONStorage, devtools, persist, subscribeWithSelector} from 'zustand/middleware';

export interface InfoInterface {
  name: string,
  age: number,
  address: {
    county: string,
    province: string,
    city: string
  },
  updateAge: () => void
}

const logger = (config) => (set, get, api) => config((...args) => {
  console.log(api);
  console.log('before', get());
  set(...args);
  console.log('after', get());
}, get, api);

const useInfoStore = create<InfoInterface>()(
  immer(
    subscribeWithSelector(
      persist(
        devtools(
          logger(
            (set) => ({
              name: 'modify',
              age: 14,
              address: {
                county: 'China',
                province: 'GuangDong',
                city: 'GuangZhou'
              },
              updateAge: () => set((state) => {
                state.age += 1;
              })
            })
          ),
          {
            enabled: true, // 是否开启devtools
            name: '用户信息' // 仓库名称
          }
        ),
        {
          name: 'info',
          storage: createJSONStorage(() => localStorage), // 存储方式 可选 localStorage sessionStorage IndexedDB 默认localStorage
          // 部分状态持久化
          partialize: (state) => ({
            name: state.name,
            age: state.age
          })
        }
      )
    )
  )
);

export default useInfoStore;
