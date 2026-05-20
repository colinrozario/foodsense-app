import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// TODO: Implement scan history list
export default function HistoryScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#0f1117" }}>
      <View className="flex-1 px-6 pt-6">
        <Text className="section-title">Scan History</Text>
        <Text className="text-ink-muted text-sm mt-2">
          Your recent scans will appear here.
        </Text>
      </View>
    </SafeAreaView>
  );
}
