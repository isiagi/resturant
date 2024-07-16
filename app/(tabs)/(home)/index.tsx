import { View, SafeAreaView, FlatList, Pressable } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

import Constants from "expo-constants";
import { Button, Image, ScrollView, Text, XStack } from "tamagui";
import {
  horizontalScale as hs,
  verticalScale as vs,
  moderateScale as ms,
} from "@/components/ui/Metric";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";

type ItemData = {
  id: string;
  title: string;
};

const DATA: ItemData[] = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

type Props = {};

const index = () => {
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: hs(10),
      }}
    >
      <StatusBar style="dark" translucent={true} hidden={false} />

      <View style={{ paddingTop: Constants.statusBarHeight, flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: vs(20),
          }}
        >
          <Text color={"#000"} fontSize={"$7"}>
            Welcome Back
          </Text>
          <Pressable onPress={() => router.push("/cart")}>
            <Ionicons name="cart" size={30} />
          </Pressable>
        </View>
        <View>
          <Text color={"#000"} fontSize={"$7"}>
            Categories
          </Text>
          <ScrollView>
            <XStack justifyContent="space-between">
              {[1, 2, 3, 4].map((item) => (
                <View style={{ paddingVertical: vs(20) }} key={item}>
                  <Image
                    source={{
                      uri: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnJlYWtmYXN0fGVufDB8fDB8fHww",
                      width: 70,
                      height: 70,
                    }}
                    style={{ borderRadius: ms(50) }}
                  />
                  <Text style={{ textAlign: "center", color: "#000" }}>
                    Hello
                  </Text>
                </View>
              ))}
            </XStack>
          </ScrollView>
        </View>
        <View style={{ flex: 1 }}>
          <Text color={"#000"} fontSize={"$7"}>
            Results For BreakFast
          </Text>

          <FlatList
            data={[1, 2, 3, 4, 5, 6, 7]}
            numColumns={2}
            renderItem={() => (
              <View style={{ flex: 1, marginLeft: hs(10), marginTop: vs(25) }}>
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
          />
        </View>
      </View>
    </View>
  );
};

export default index;
