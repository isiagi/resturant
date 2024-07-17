import React, { useEffect, useState } from "react";
import { Button, Text } from "tamagui";
import { View } from "tamagui";
import Constants from "expo-constants";
import { Image } from "tamagui";
import { Pressable, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Props = {};

const cart = (props: Props) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchC = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("cart");
        const value = jsonValue != null ? JSON.parse(jsonValue) : [];
        console.log(value, "value");

        setCart(value);
      } catch (e) {
        console.log(e);
      }
    };
    fetchC();
  }, []);

  const removeFromCart = async (item) => {
    try {
      const jsonValue = await AsyncStorage.getItem("cart");
      const value = jsonValue != null ? JSON.parse(jsonValue) : [];
      if (value) {
        const newCart = value.filter(
          (cartItem) => cartItem.idMeal !== item.idMeal
        );
        await AsyncStorage.setItem("cart", JSON.stringify(newCart));
        setCart(newCart);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View paddingHorizontal="$3" flex={1}>
      <Text color={"#000"} fontSize={"$7"} paddingVertical="$4">
        Selected Items
      </Text>
      <ScrollView flex={1}>
        {cart.map((item) => (
          <View
            flexDirection="row"
            justifyContent="space-between"
            borderWidth="$1"
            padding="$3"
            key={item.idMeal}
            marginTop="$3"
          >
            <View>
              <Image
                source={{
                  uri: item.strMealThumb,
                }}
                width={100}
                height={100}
              />
            </View>
            <View justifyContent="space-between">
              <Text color={"#000"}>{item.strMeal}</Text>
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
              <Pressable onPress={() => removeFromCart(item)}>
                <Ionicons name="close" size={30} />
              </Pressable>
              <Text color={"#000"}>Ugx 20,000</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <View backgroundColor={"#fff"} padding="$4" marginBottom="$3">
        {[1, 2, 3].map((item) => (
          <View flexDirection="row" justifyContent="space-between" key={item}>
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
