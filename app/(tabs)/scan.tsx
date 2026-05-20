import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// TODO: Implement barcode scanner with expo-camera
export default function ScanScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#0f1117" }}>
      <View className="flex-1 items-center justify-center px-6">
        <Text className="text-ink text-2xl font-bold">Scan a Product</Text>
        <Text className="text-ink-muted text-sm mt-2">
          Point your camera at a barcode
        </Text>
      </View>
    </SafeAreaView>
  );
}
