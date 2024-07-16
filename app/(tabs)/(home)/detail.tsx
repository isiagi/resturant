import React from "react";
import { Button, Image, Text, View } from "tamagui";
import Constants from "expo-constants";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { router } from "expo-router";

type Props = {};

const Page = (props: Props) => {
  return (
    <View style={{ paddingTop: Constants.statusBarHeight }}>
      <View>
        <View position="relative">
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnJlYWtmYXN0fGVufDB8fDB8fHww",
              height: 300,
            }}
            backgroundSize={"cover"}
            borderBottomRightRadius={"$5"}
            borderBottomLeftRadius={"$5"}
          />
          <Pressable
            onPress={() => router.back()}
            style={{ position: "absolute", top: 10, left: 5 }}
          >
            <Ionicons name="close" size={30} />
          </Pressable>
          <Ionicons
            style={{ position: "absolute", top: 10, right: 5 }}
            name="heart"
            size={30}
          />
        </View>
        <View paddingHorizontal="$3">
          <View
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <View>
              <Text color={"#000"} fontSize={"$7"}>
                Special BreakFast
              </Text>
              <Text color={"#000"} fontSize={"$5"}>
                (10pc)
              </Text>
            </View>
            <View backgroundColor={"#000"} padding="$2" borderRadius={50}>
              <Text color={"#fff"} fontSize={"$5"}>
                Ugx 20,000
              </Text>
            </View>
          </View>
          <View flexDirection="row" gap="$7" paddingVertical="$5">
            <Pressable>
              <Text
                backgroundColor={"#000"}
                color={"#fff"}
                fontSize={"$7"}
                paddingHorizontal="$3"
              >
                +
              </Text>
            </Pressable>
            <Text color={"#000"} fontSize={"$7"}>
              1
            </Text>
            <Pressable>
              <Text
                backgroundColor={"#000"}
                color={"#fff"}
                fontSize={"$7"}
                paddingHorizontal="$3"
              >
                -
              </Text>
            </Pressable>
          </View>
          <View>
            <Text color={"#000"} fontSize={"$5"}>
              Description
            </Text>
            <Text color={"#000"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </View>
          <View>
            <Button> Add for Ugx 20,000</Button>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Page;
