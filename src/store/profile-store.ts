// temprorary fix until authentication and session management is setup

import { create } from "zustand";

interface ProfileInterface {
  role: string;
  setRole: (role: string) => void;
}

export const useProfileStore = create<ProfileInterface>((set, get) => ({
  role: "super-admin",
  setRole: (role: string) => set({ role }),
}));
