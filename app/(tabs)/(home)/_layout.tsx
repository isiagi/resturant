import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="detail" options={{ headerShown: false }} />
        <Stack.Screen
          name="cart"
          options={{ headerTitleAlign: "center", headerTitle: "My Cart" }}
        />
      </Stack>
    </>
  );
}
