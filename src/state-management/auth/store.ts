import { create } from "zustand";

interface authUser {
  user: string;
  login: (username: string) => void;
  logout: () => void;
}

const useAuthUser = create<authUser>((set) => ({
  user: "",
  login: (username) => set(() => ({ user: username })),
  logout: () => set((state) => ({ user: "" })),
}));

export default useAuthUser;
