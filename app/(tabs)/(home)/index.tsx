import { View, SafeAreaView, FlatList, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
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
import getCategories from "@/api/api_routes/getCategories";
import instance from "@/api/base";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { green } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

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
  const [introData, setIntroData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeMeal, setActiveMeal] = useState([]);
  const [activeMealStr, setActiveMealStr] = useState("Beef");
  const [favouritesStr, setFavouritesStr] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const fetchC = async () => {
      try {
        setLoading(true);
        const data = await instance.get("categories.php");
        setIntroData(data.data.categories);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchC();
  }, []);

  useEffect(() => {
    const fetchC = async () => {
      try {
        setIsLoading(true);
        const data = await instance.get(`filter.php?c=${activeMealStr}`);
        setActiveMeal(data.data.meals);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchC();
  }, [activeMealStr]);

  // Fetch cart count
  useEffect(() => {
    const fetchCartCount = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("cart");
        const cart = jsonValue != null ? JSON.parse(jsonValue) : [];
        setCartCount(cart.length);
      } catch (e) {
        console.error("Error retrieving cart count:", e);
      }
    };
    fetchCartCount();
  }, []);

  const handlePress = (strCategory) => {
    setActiveMealStr(strCategory);
  };

  const showToast = () => {
    Toast.show({
      type: "success",
      text1: "Hello",
      text2: "This is some something 👋",
    });
  };

  const addToCart = async (item) => {
    try {
      // Retrieve the current cart from AsyncStorage
      const jsonValue = await AsyncStorage.getItem("cart");

      // Parse the JSON value to get the cart array, or initialize an empty array if the cart is null
      const cart = jsonValue != null ? JSON.parse(jsonValue) : [];

      console.log(cart, "cart");

      // Check if the item is already in the cart by comparing item IDs
      const itemExists = cart.some(
        (cartItem) => cartItem.idMeal === item.idMeal
      );

      if (itemExists) {
        Toast.show({
          type: "error",
          text1: "Error",
          text2: "Item already in cart",
        });
        return; // If the item is already in the cart, do nothing and return
      } else {
        // If the item is not in the cart, add it to the cart array
        cart.push(item);

        // Save the updated cart back to AsyncStorage
        await AsyncStorage.setItem("cart", JSON.stringify(cart));

        Toast.show({
          type: "success",
          text1: "Success",
          text2: "Item added to cart",
        });
      }
    } catch (e) {
      // Handle any errors that may occur
      console.error(e);
    }
  };

  // Count the number of items in the cart

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
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Pressable onPress={() => router.push("/cart")}>
              <Ionicons name="cart" size={30} />
            </Pressable>
            <Text fontSize="$7" fontWeight={"bold"} color={"green"}>
              {cartCount}
            </Text>
          </View>
        </View>
        <View>
          <Text color={"#000"} fontSize={"$7"}>
            Categories
          </Text>
          <ScrollView horizontal>
            {loading ? (
              <Text
                style={{ textAlign: "center", color: "#000", fontSize: ms(20) }}
              >
                Loading...
              </Text>
            ) : (
              <>
                {introData.map(
                  ({ idCategory, strCategoryThumb, strCategory }) => {
                    const activeColor = activeMealStr === strCategory;
                    return (
                      <Pressable
                        key={idCategory}
                        onPress={() => handlePress(strCategory)}
                      >
                        <View
                          style={[
                            {
                              paddingVertical: vs(20),
                              marginRight: ms(20),
                            },
                          ]}
                        >
                          <Image
                            source={{
                              uri: strCategoryThumb,
                              width: 70,
                              height: 70,
                            }}
                            style={[
                              { borderRadius: ms(50) },
                              activeColor && {
                                borderColor: "#000",
                                borderWidth: 3,
                              },
                            ]}
                          />
                          <Text style={{ textAlign: "center", color: "#000" }}>
                            {strCategory}
                          </Text>
                        </View>
                      </Pressable>
                    );
                  }
                )}
              </>
            )}
          </ScrollView>
        </View>
        <View style={{ flex: 1 }}>
          <Text color={"#000"} fontSize={"$7"}>
            Results For {activeMealStr}
          </Text>

          {isLoading ? (
            <Text color={"#000"} fontSize={"$5"}>
              Loading...
            </Text>
          ) : (
            <FlatList
              data={activeMeal}
              initialNumToRender={10}
              numColumns={2}
              renderItem={({ item }) => (
                <View
                  style={{ flex: 1, marginLeft: hs(10), marginTop: vs(25) }}
                >
                  <View style={{ position: "relative" }}>
                    <Image
                      source={{
                        uri: item.strMealThumb,
                      }}
                      height={200}
                      backgroundSize={"cover"}
                      borderRadius={ms(20)}
                    />

                    <Ionicons
                      style={{
                        position: "absolute",
                        top: vs(15),
                        right: hs(15),
                      }}
                      name="heart"
                      size={30}
                      color={favouritesStr ? "red" : "white"}
                      onPress={showToast}
                    />
                  </View>
                  <Pressable
                    onPress={() =>
                      router.push({
                        pathname: "/detail",
                        params: { id: item.idMeal },
                      })
                    }
                  >
                    <Text color="#000" paddingTop="$1.5">
                      {item.strMeal}
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
                  <Button onPress={() => addToCart(item)}>Add To Cart</Button>
                </View>
              )}
            />
          )}
        </View>
        <Toast position="bottom" bottomOffset={20} />
      </View>
    </View>
  );
};

export default index;
