import { create } from 'zustand';
import { UserStore } from '../types/generals';

const useStoreUser = create<UserStore>((set) => {
  const storedState = localStorage.getItem('userStore');
  const initialState = storedState ? JSON.parse(storedState) : {
    username: '',
    correctCards: [],
    flippedCards: [],
    inCorrectCards: [],
  };

  return {
    ...initialState,
    setUsername: (username: string) => set(() => ({ username })),
    setCorrectCards: (arrayCards: []) => set(() => ({ correctCards: arrayCards })),
    setFlippedCards: (arrayIds: []) => set(() => ({ flippedCards: arrayIds })),
    setInCorrectCards: (arrayCards: []) => set(() => ({ inCorrectCards: arrayCards })),
  };
});

useStoreUser.subscribe((state) => {
  localStorage.setItem('userStore', JSON.stringify(state));
});

export default useStoreUser