import { create } from "zustand";
import { persist } from "zustand/middleware";

interface authStore {
    isLogin:boolean,
    login: () => void,
    logout: () => void
}


const useAuthStore = create<authStore>()(
    persist(
        (set) => ({
            isLogin:false,
            login: () => set({isLogin: true}),
            logout: () => set({isLogin: false})
        }),
        {
            name: 'auth-storage',
        }
    ) 
)

export default useAuthStore