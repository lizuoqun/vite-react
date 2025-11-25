import {create} from 'zustand';
import {immer} from 'zustand/middleware/immer';

interface UserInterface {
  gourd: {
    oneChild: string,
    twoChild: string,
    threeChild: string,
    fourChild: string,
    fiveChild: string,
    sixChild: string,
    sevenChild: string,
  },
  updateGourd: () => void
}

// 注意：使用 immer 中间件时的特殊结构
const useUserImmerStore = create<UserInterface>()(immer((set) => ({
  gourd: {
    oneChild: 'oneChild',
    twoChild: 'twoChild',
    threeChild: 'threeChild',
    fourChild: 'fourChild',
    fiveChild: 'fiveChild',
    sixChild: 'sixChild',
    sevenChild: 'sevenChild'
  },
  updateGourd: () => set((state) => {
    // 使用 immer 直接修改状态
    state.gourd.oneChild = 'oneChild-update';
    state.gourd.twoChild = 'twoChild-update';
    state.gourd.threeChild = 'threeChild-update';
  })
})));

export default useUserImmerStore;
