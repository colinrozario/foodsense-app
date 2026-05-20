import { create } from "zustand";

interface CalorieState {
  dailyTotal: number;
  addCalories: (amount: number) => void;
  reset: () => void;
}

export const useCalorieStore = create<CalorieState>((set) => ({
  dailyTotal: 0,
  addCalories: (amount) =>
    set((state) => ({ dailyTotal: state.dailyTotal + amount })),
  reset: () => set({ dailyTotal: 0 }),
}));
