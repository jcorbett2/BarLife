import { Stack } from 'expo-router';

export default function AccountCreationLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="get_name" />
      <Stack.Screen name="get_age" />
      <Stack.Screen name="get_user" />
      <Stack.Screen name="get_password" />
      <Stack.Screen name="get_pfp" />
      <Stack.Screen name="get_bio" />
      <Stack.Screen name="create_account" />
      <Stack.Screen name="login" />
    </Stack>
  );
}
