import * as SecureStore from "expo-secure-store";
import type { TokenCache } from "@clerk/clerk-expo";

// Clerk token cache backed by SecureStore (more secure than AsyncStorage)
export const tokenCache: TokenCache = {
  async getToken(key: string) {
    try {
      return await SecureStore.getItemAsync(key);
    } catch {
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      await SecureStore.setItemAsync(key, value);
    } catch {
      // ignore
    }
  },
};
