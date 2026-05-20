import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// TODO: Implement profile + allergen settings
export default function ProfileScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#0f1117" }}>
      <View className="flex-1 px-6 pt-6">
        <Text className="section-title">Profile</Text>
        <Text className="text-ink-muted text-sm mt-2">
          Allergen preferences and account settings.
        </Text>
      </View>
    </SafeAreaView>
  );
}
