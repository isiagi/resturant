import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ImageBackground } from "react-native";
import { Image, Text } from "tamagui";
import { View } from "tamagui";

type Props = {};

const Page = (props: Props) => {
  return (
    <View flex={1}>
      <View position="relative">
        <ImageBackground
          source={{
            uri: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnJlYWtmYXN0fGVufDB8fDB8fHww",
          }}
          resizeMode="cover"
        >
          <View height={250} justifyContent="center" alignItems="center">
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnJlYWtmYXN0fGVufDB8fDB8fHww",
                height: 130,
                width: 130,
              }}
              position="absolute"
              bottom="$-9"
              borderRadius={100}
            />
          </View>
        </ImageBackground>
      </View>
      <View paddingHorizontal="$3">
        <View paddingTop="$11">
          <Text color={"#000"} fontSize={"$6"} textAlign="center">
            Geofrey Isiagi
          </Text>
        </View>
        <View>
          {[1, 2, 3, 4, 5].map((item) => (
            <View
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              key={item}
              paddingTop="$4"
            >
              <Text color={"#000"} fontSize={"$6"}>
                My Orders
              </Text>
              <Ionicons name="arrow-forward" size={20} />
            </View>
          ))}
        </View>

        <View flexDirection="row" alignItems="center" paddingTop="$7">
          <Ionicons name="log-out-outline" size={30} />
          <Text color={"#000"} fontSize={"$6"}>
            Exit
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Page;
