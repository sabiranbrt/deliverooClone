import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ListRenderItem,
  ScrollView,
} from "react-native";
import categories from "@/assets/data/filter.json";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useState } from "react";

interface Category {
  name: string;
  count: number;
  checked?: boolean;
}
const Filter = () => {
  const lists = [
    {
      logos: (
        <Ionicons
          name="swap-vertical-outline"
          size={20}
          color={Colors.primary}
        />
      ),
      title: "Sort",
      subtitle: "Recommended",
      onPress: () => {},
    },
    {
      logos: (
        <Ionicons name="restaurant-outline" size={20} color={Colors.primary} />
      ),
      title: "Hygiene rating",
      subtitle: false,
      onPress: () => {},
    },
    {
      logos: (
        <Ionicons name="pricetag-outline" size={20} color={Colors.primary} />
      ),
      title: "Offers",
      subtitle: false,
      onPress: () => {},
    },
    {
      logos: (
        <Ionicons name="nutrition-outline" size={20} color={Colors.primary} />
      ),
      title: "Dietary",
      subtitle: false,
      onPress: () => {},
    },
  ];
  const [items, setItems] = useState<Category[]>(categories);

  const renderItem: ListRenderItem<Category> = ({ item }) => (
    <View className=" flex-row justify-between items-center py-2 px-3 bg-white">
      <View>
        <Text>
          {item.name} ({item.count})
        </Text>
      </View>
      <View>
        <BouncyCheckbox
          size={20}
          fillColor={Colors.primary}
          unFillColor="#fff"
          iconStyle={{
            borderColor: Colors.primary,
            borderRadius: 4,
            borderWidth: 2,
          }}
          innerIconStyle={{
            borderColor: Colors.primary,
            borderRadius: 4,
            borderWidth: 2,
          }}
          onPress={() => {}}
          isChecked={item.checked}
        />
      </View>
    </View>
  );

  return (
    <View className=" flex-1 bg-grey-light p-4">
      <View>
        {lists.map((items) => {
          return (
            <TouchableOpacity className=" flex-row justify-between items-center bg-white rounded-md p-2">
              <View className=" flex-row py-2 gap-2">
                <View>
                  <Text>{items.logos}</Text>
                </View>
                <View className="">
                  <Text>{items.title}</Text>
                  {items.subtitle === false ? (
                    ""
                  ) : (
                    <Text className=" text-primary-icon">{items.subtitle}</Text>
                  )}
                </View>
              </View>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color={Colors.primary}
              />
            </TouchableOpacity>
          );
        })}
      </View>
      <View className=" my-5">
        <Text>Categories</Text>
      </View>
      <ScrollView className=" ">
        <FlatList data={items} renderItem={renderItem} />
      </ScrollView>
      <View className=" mt-2">
        <TouchableOpacity>
          <Text className=" bg-primary p-3 text-white text-center rounded-lg">
            Done
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Filter;
