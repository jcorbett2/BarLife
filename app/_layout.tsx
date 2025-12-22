import { Stack } from "expo-router";
import { View } from "react-native";

export default function RootLayout() {
  return (
    <View style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
      <Stack />
    </View>
  );
}
