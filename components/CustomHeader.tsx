import deliverylogo from "@/assets/images/fooddeliverylogo.png";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useRef } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { ActionSheetRef } from "react-native-actions-sheet";
import { SafeAreaView } from "react-native-safe-area-context";
import LocationBottomSheet from "./LocationBottomSheet";

const SearchBar = () => (
  <View style={styles.SearchBar}>
    <View style={styles.searchSection}>
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: Colors.lightGrey,
            paddingHorizontal: 5,
          }}
        >
          <Ionicons name="search-outline" size={20} color={Colors.medium} />
          <TextInput
            style={styles.inputfield}
            placeholder="Resturant,groceries,dishes"
          />
        </View>
      </View>
      <View>
        <Link href={"/"}>
          <TouchableOpacity>
            <Ionicons name="options-outline" size={20} color={Colors.primary} />
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  </View>
);

const CustomHeader = () => {
  const bottomSheetRef = useRef<ActionSheetRef>(null);

  const handleCancel = () => {
    bottomSheetRef.current?.hide();
  };

  const openMenu = () => {
    bottomSheetRef.current?.show();
  };
  return (
    <View style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.headTitle}>
          <TouchableOpacity onPress={openMenu}>
            <View style={styles.headerSection}>
              <Image style={styles.bike} source={deliverylogo} />
              <View>
                <Text style={styles.title}>Delivery . Home</Text>
                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
                >
                  <Text style={styles.subtitle}>Biratnagar, Nepal</Text>
                  <Ionicons
                    color={Colors.medium}
                    name="chevron-down"
                    size={20}
                  />
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <Ionicons name="person-outline" size={20} color={Colors.primary} />
          </TouchableOpacity>
        </View>
      </View>
      <SearchBar />
      <LocationBottomSheet
        bottomSheetRef={bottomSheetRef}
        handleCancel={handleCancel}
      />
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginLeft: -15,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    marginTop: 10,
    marginRight: 15,
  },
  container: {
    height: 60,
  },
  headTitle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bike: {
    borderRadius: 50,
    width: 50,
    height: 50,
  },
  headerSection: {
    gap: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 14,
    color: Colors.medium,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  SearchBar: {
    height: 60,
  },
  searchSection: {
    gap: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputfield: {
    backgroundColor: Colors.lightGrey,
    padding: 10,
    borderRadius: 5,
  },
});
