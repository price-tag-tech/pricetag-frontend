// temprorary fix until authentication and session management is setup

import { create } from "zustand";

interface ProfileInterface {
  role: string;
  user: Record<string, any>;
  setRole: (role: string) => void;
  setUser: (user: Record<string, any>) => void;
}

export const useProfileStore = create<ProfileInterface>((set, get) => ({
  role: "user-reg-admin",
  user: {},
  setRole: (role: string) => set({ role }),
  setUser: (user: Record<string, any>) => set({ user }),
}));
