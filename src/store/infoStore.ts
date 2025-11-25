import {create} from 'zustand';
import {immer} from 'zustand/middleware/immer';

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

const useInfoStore = create<InfoInterface>()(immer((set) => ({
  name: 'modify',
  age: 18,
  address: {
    county: 'China',
    province: 'GuangDong',
    city: 'GuangZhou'
  },
  updateAge: () => set((state) => {
    state.age += 1;
  })
})));

export default useInfoStore;
