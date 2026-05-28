import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "@/constants/colors";

// TODO: Implement barcode scanner with expo-camera
export default function ScanScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <View className="flex-1 items-center justify-center px-screen">
        <Text className="text-title">Scan a Product</Text>
        <Text className="text-body mt-2 text-center">
          Point your camera at a barcode or nutrition label.
        </Text>
      </View>
    </SafeAreaView>
  );
}
