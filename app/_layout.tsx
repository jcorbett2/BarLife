import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="get_name" options={{ headerShown: false }} />
      <Stack.Screen name="get_user" options={{ headerShown: false }} />
      <Stack.Screen name="get_password" options={{ headerShown: false }} />
      <Stack.Screen name="get_pfp" options={{ headerShown: false }} />
    </Stack>
  );
}