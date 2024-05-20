import CustomHeader from "@/components/CustomHeader";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Stack, useNavigation } from "expo-router";
import { TouchableOpacity } from "react-native";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "index",
};

export default function RootLayoutNav() {
  const navigation = useNavigation();
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShadowVisible: false,
          headerTitle: () => <CustomHeader />,
        }}
      />
      <Stack.Screen
        name="(modal)/filter"
        options={{
          presentation: "modal",
          headerTitle: "Filter",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: Colors.lightGrey,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Ionicons name="close-outline" size={28} color={Colors.primary} />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  );
}
