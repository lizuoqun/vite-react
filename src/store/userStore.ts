import {create} from 'zustand';

interface User {
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

// 创建 store
const useUserStore = create<User>(((set) => ({
  gourd: {
    oneChild: 'oneChild',
    twoChild: 'twoChild',
    threeChild: 'threeChild',
    fourChild: 'fourChild',
    fiveChild: 'fiveChild',
    sixChild: 'sixChild',
    sevenChild: 'sevenChild'
  },
  // 更新方法
  updateGourd: () => set((state) => ({
    gourd: {
      ...state.gourd,
      oneChild: 'oneChild-update'
    }
  }))
})));

export default useUserStore;
