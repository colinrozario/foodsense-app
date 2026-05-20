import { create } from "zustand";
import { Product } from "@/types/product";

interface ScanHistoryState {
  history: Product[];
  addScan: (product: Product) => void;
  clearHistory: () => void;
}

export const useScanHistoryStore = create<ScanHistoryState>((set) => ({
  history: [],
  addScan: (product) =>
    set((state) => ({ history: [product, ...state.history] })),
  clearHistory: () => set({ history: [] }),
}));
