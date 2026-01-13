import { Stack } from 'expo-router';

export default function MainAppLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="clans" />
      <Stack.Screen name="friends" />
      <Stack.Screen name="vibes" />
      <Stack.Screen name="more" />
    </Stack>
  );
}
