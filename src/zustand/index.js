import { create } from 'zustand'

export const useStore = create((set) => ({
  count: 0,
  token: localStorage.getItem("token") || null,
  inc: (payload) => set((state) => ({ count: state.count + payload })),
  res: () => set({ count: 0 }),
  login: (payload)=> set(()=> {
    localStorage.setItem("token", payload)
    return {token: payload}
  }),
  logout: ()=> set(()=>{
    localStorage.removeItem("token")
    return {token: null}
  })
}))
