import CustomHeader from "@/components/CustomHeader";
import { Stack } from "expo-router";
export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "index",
};

export default function RootLayoutNav() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShadowVisible: false,
          headerTitle: () => <CustomHeader />,
        }}
      />
    </Stack>
  );
}
