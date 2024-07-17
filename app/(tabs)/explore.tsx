import { Image, Text, View } from "tamagui";
import Constants from "expo-constants";
import { ActivityIndicator, FlatList, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Button } from "tamagui";
import {
  verticalScale as vs,
  horizontalScale as hs,
  moderateScale as ms,
} from "@/components/ui/Metric";
import { useEffect, useState } from "react";
import instance from "@/api/base";

export default function TabTwoScreen() {
  const [introData, setIntroData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchC = async () => {
      try {
        setLoading(true);
        const data = await instance.get(`filter.php?c=Chicken`);
        setIntroData(data.data.meals);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchC();
  }, []);
  return (
    <View paddingTop={Constants.statusBarHeight}>
      <View paddingHorizontal="$3">
        <Text
          color={"#000"}
          fontSize={"$7"}
          paddingTop="$3"
          fontWeight={"bold"}
        >
          Your Favourites Meals
        </Text>
        <View>
          {loading ? (
            <ActivityIndicator />
          ) : (
            <FlatList
              data={introData}
              renderItem={({ item }) => (
                <View style={{ flex: 1, marginTop: vs(25) }}>
                  <View style={{ position: "relative" }}>
                    <Image
                      source={{
                        uri: item.strMealThumb,
                      }}
                      height={250}
                      backgroundSize={"cover"}
                    />

                    <Ionicons
                      style={{ position: "absolute", top: 5, right: 5 }}
                      name="heart"
                      size={25}
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
                  <Button>Add To Cart</Button>
                </View>
              )}
              keyExtractor={(item) => item.idMeal}
            />
          )}
        </View>
      </View>
    </View>
  );
}
