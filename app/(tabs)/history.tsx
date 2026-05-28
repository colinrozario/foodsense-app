import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "@/constants/colors";

// TODO: Implement scan history list
export default function HistoryScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <View className="flex-1 px-screen pt-4">
        <Text className="text-title">History</Text>
        <Text className="text-body mt-1">Your recent scans will appear here.</Text>
      </View>
    </SafeAreaView>
  );
}
