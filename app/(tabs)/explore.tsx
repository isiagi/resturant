import { Image, Text, View } from "tamagui";
import Constants from "expo-constants";
import { FlatList, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Button } from "tamagui";
import {
  verticalScale as vs,
  horizontalScale as hs,
  moderateScale as ms,
} from "@/components/ui/Metric";

export default function TabTwoScreen() {
  return (
    <View paddingTop={Constants.statusBarHeight}>
      <View paddingHorizontal="$5">
        <Text
          color={"#000"}
          fontSize={"$7"}
          paddingTop="$3"
          fontWeight={"bold"}
        >
          Your Favourites Meals
        </Text>
        <View>
          <FlatList
            data={[1, 2, 3, 4, 5, 6, 7]}
            renderItem={() => (
              <View style={{ flex: 1, marginTop: vs(25) }}>
                <View style={{ position: "relative" }}>
                  <Image
                    source={{
                      uri: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnJlYWtmYXN0fGVufDB8fDB8fHww",
                    }}
                    height={200}
                    backgroundSize={"cover"}
                  />

                  <Ionicons
                    style={{ position: "absolute", top: 5, right: 5 }}
                    name="heart"
                    size={25}
                  />
                </View>
                <Pressable onPress={() => router.push("/detail")}>
                  <Text color="#000" paddingTop="$1.5">
                    Special BreakFast
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      paddingVertical: vs(5),
                    }}
                  >
                    <Text color="#000">Price</Text>
                    <Text color="#000">Ugx 20000</Text>
                  </View>
                </Pressable>
                <Button>Add To Cart</Button>
              </View>
            )}
            keyExtractor={(item) => item}
          />
        </View>
      </View>
    </View>
  );
}
