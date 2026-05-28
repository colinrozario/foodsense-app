import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "@/constants/colors";

// TODO: Implement Home screen with weekly summary + recent scans
export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <View className="flex-1 px-screen pt-4">
        <Text className="text-title">Home</Text>
        <Text className="text-body mt-1">Your weekly summary will appear here.</Text>
      </View>
    </SafeAreaView>
  );
}
