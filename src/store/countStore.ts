import {create} from 'zustand';

interface CountStoreInterface {
  count: number;
  other: string,
  increment: () => void;
  decrement: () => void;
  getCount: () => number;
}

const useCountStore = create<CountStoreInterface>((set, get) => ({
  count: 0,
  other: 'other',
  increment: () => set((state) => ({count: state.count + 1})),
  decrement: () => set((state) => ({count: state.count - 1})),
  getCount: () => get().count
}));

export default useCountStore;
