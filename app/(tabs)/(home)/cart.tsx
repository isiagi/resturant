import React from "react";
import { Button, Text } from "tamagui";
import { View } from "tamagui";
import Constants from "expo-constants";
import { Image } from "tamagui";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {};

const cart = (props: Props) => {
  return (
    <View paddingHorizontal="$3" flex={1}>
      <Text color={"#000"} fontSize={"$7"} paddingVertical="$4">
        Selected Items
      </Text>
      <View flex={1}>
        <View
          flexDirection="row"
          justifyContent="space-between"
          borderWidth="$1"
          padding="$3"
        >
          <View>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnJlYWtmYXN0fGVufDB8fDB8fHww",
              }}
              width={100}
              height={100}
            />
          </View>
          <View justifyContent="space-between">
            <Text color={"#000"}>Special BreakFast</Text>
            <View flexDirection="row" gap="$4">
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
          </View>
          <View alignItems="flex-end" justifyContent="space-between">
            <Ionicons name="close" size={30} />
            <Text color={"#000"}>Ugx 20,000</Text>
          </View>
        </View>
      </View>
      <View backgroundColor={"#fff"} padding="$4" marginBottom="$3">
        {[1, 2, 3].map(() => (
          <View flexDirection="row" justifyContent="space-between">
            <Text color={"#000"} fontSize={"$5"}>
              Sub Total
            </Text>
            <Text color={"#000"} fontSize={"$5"}>
              Ugx 10,000
            </Text>
          </View>
        ))}
        <Button marginTop="$3">Place Order</Button>
      </View>
    </View>
  );
};

export default cart;
