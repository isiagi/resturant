import React, { useEffect, useState } from "react";
import { Button, Image, ScrollView, Text, View } from "tamagui";
import Constants from "expo-constants";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import instance from "@/api/base";

type Props = {};

const Page = (props: Props) => {
  const [introData, setIntroData] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useLocalSearchParams();

  useEffect(() => {
    const fetchC = async () => {
      try {
        setLoading(true);
        const data = await instance.get(`lookup.php?i=${id}`);
        setIntroData(data.data.meals[0]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchC();
  }, []);

  return (
    <View flex={1} style={{ paddingTop: Constants.statusBarHeight }}>
      <View flex={1}>
        <View position="relative" marginBottom="$5">
          <Image
            source={{
              uri: introData.strMealThumb,
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
        <ScrollView flex={1}>
          <View paddingHorizontal="$3" paddingBottom="$7">
            <View
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <View>
                <Text color={"#000"} fontSize={"$7"}>
                  {introData.strMeal}
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
              <Text color={"#000"}>{introData.strInstructions}</Text>
            </View>
            <View>
              <Button> Add for Ugx 20,000</Button>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Page;
