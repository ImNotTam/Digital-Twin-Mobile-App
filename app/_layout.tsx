import { Stack } from "expo-router";
import { SafeAreaView } from "react-native";
import "./globals.css";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(section)" options={{ headerShown: false }} />
    </Stack>
  );
}
