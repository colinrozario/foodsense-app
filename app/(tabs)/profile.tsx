import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "@/constants/colors";

// TODO: Implement profile, dietary preferences, allergens, daily goals
export default function ProfileScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <View className="flex-1 px-screen pt-4">
        <Text className="text-title">Profile</Text>
        <Text className="text-body mt-1">Allergen preferences and account settings.</Text>
      </View>
    </SafeAreaView>
  );
}
