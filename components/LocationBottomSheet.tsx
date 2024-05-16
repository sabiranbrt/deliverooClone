import { View, Text, StyleSheet } from "react-native";
import ActionSheet, { ActionSheetRef } from "react-native-actions-sheet";

interface LocationBottomSheetProps {
  bottomSheetRef: React.RefObject<ActionSheetRef>;
  handleCancel: () => void;
}

const LocationBottomSheet = ({ bottomSheetRef }: LocationBottomSheetProps) => {
  return (
    <ActionSheet ref={bottomSheetRef}>
      <View style={styles.sheet}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>Delivery</Text>
          <Text>Pickup</Text>
        </View>
      </View>
    </ActionSheet>
  );
};

export default LocationBottomSheet;
const styles = StyleSheet.create({
  sheet: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
});
