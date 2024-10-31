import { create } from 'zustand';
import { Theme, ThemeSchema } from '../types';

interface ThemeStore extends Theme {
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
  isDark: false,
  toggleTheme: () => set((state) => ({ isDark: !state.isDark })),
}));