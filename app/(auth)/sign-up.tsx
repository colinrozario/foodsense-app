import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// TODO: Implement Clerk sign-up UI
export default function SignUp() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#0f1117" }}>
      <View className="flex-1 items-center justify-center px-6">
        <Text className="text-ink text-2xl font-bold">Create Account</Text>
        <Text className="text-ink-muted text-sm mt-2">Join FoodSense today</Text>
      </View>
    </SafeAreaView>
  );
}
