import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TextInput, View } from "react-native";
import ActionSheet, { ActionSheetRef } from "react-native-actions-sheet";
import { TouchableOpacity } from "react-native-gesture-handler";

interface LocationBottomSheetProps {
  bottomSheetRef: React.RefObject<ActionSheetRef>;
  handleCancel: () => void;
}

const LocationBottomSheet = ({ bottomSheetRef }: LocationBottomSheetProps) => {
  return (
    <ActionSheet ref={bottomSheetRef}>
      <View style={styles.sheet} className=" flex-1 bg-grey-light">
        <View className=" flex-row items-center gap-3 justify-center">
          <TouchableOpacity>
            <Text className=" text-xs bg-primary text-white px-4 py-1 rounded-[25px]">
              Delivery
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className=" text-xs px-4 py-1 rounded-[25px]">Pickup</Text>
          </TouchableOpacity>
        </View>
        <View className=" mt-5 mb-5">
          <Text>Your Location</Text>
          <TouchableOpacity>
            <View className=" rounded-[5px] flex-row items-center border-[1px] p-2 border-grey ">
              <View>
                <Ionicons
                  name="location-outline"
                  size={20}
                  color={Colors.medium}
                />
              </View>
              <TextInput editable={false} className=" flex-1   ">
                Address
              </TextInput>
              <View>
                <Ionicons
                  name="chevron-forward-outline"
                  color={Colors.medium}
                  size={20}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <Text>Arrival time</Text>
          <TouchableOpacity>
            <View className=" rounded-[5px] flex-row items-center border-[1px] p-2 border-grey ">
              <View>
                <Ionicons
                  name="alarm-outline"
                  size={20}
                  color={Colors.medium}
                />
              </View>
              <TextInput editable={false} className=" flex-1   ">
                Now
              </TextInput>
              <View>
                <Ionicons
                  name="chevron-forward-outline"
                  color={Colors.medium}
                  size={20}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View className=" mt-5">
          <TouchableOpacity>
            <Text className=" bg-primary text-white rounded-sm p-3 text-center">
              Confirm
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ActionSheet>
  );
};

export default LocationBottomSheet;
const styles = StyleSheet.create({
  sheet: {
    flex: 1,
    // backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    padding: 20,
    width: "100%",
  },
});
