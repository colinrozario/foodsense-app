import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// TODO: Implement Clerk sign-in UI
export default function SignIn() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#0f1117" }}>
      <View className="flex-1 items-center justify-center px-6">
        <Text className="text-ink text-2xl font-bold">Welcome to FoodSense</Text>
        <Text className="text-ink-muted text-sm mt-2">Sign in to continue</Text>
      </View>
    </SafeAreaView>
  );
}
