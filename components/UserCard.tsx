import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { StyledImage } from "./StyledComponents";

const UserCard = () => {
  return (
    <View className="flex flex-row   justify-between">
      <View className="flex  flex-row gap-5">
        <StyledImage
          className="h-16 w-16 rounded-full border border-neutral-700 overflow-hidden"
          source={{ uri: "/assets/test-placeholders/Rectangle5.png" }}
        />

        <View className="flex flex-col mt-3 gap-2">
          <Text className="text-black">threadsapp</Text>
          <Text className="text-sm text-black/90 ">Threads</Text>
          <Text className="font-light text-black">35 followers</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity className="borde py-2 rounded-xl px-7 border border-black ">
          <Text>Follow</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserCard;
