import { create } from 'zustand'

const useStripsStore = create((set) => ({
  return: {
    strips: [],
    filterStrips: (item: any) => set((state: { strips: any }) => ({strips: [...state.strips, item]})),
  }
}))