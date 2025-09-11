import { Post } from "@/types";
import React from "react";
import { Text, View } from "react-native";
import { StyledImage } from "./StyledComponents";
const PostListItem = ({ post }: { post: Post }) => {
  return (
    <View
      className="flex border   w-[90%]  gap-5"
      style={{ flexDirection: "row" }}
    >
      <StyledImage
        className="h-[40px] w-[40px] border  rounded-full"
        source={{ uri: post.author.avatarUrl }}
      />

      <View className="flex flex-col gap-2">
        <View style={{ flexDirection: "row" }} className="items-center  gap-3 w-full ">
          <Text className="text-white font-bold text-[20px]">
            {post.author.name}
          </Text>
          <Text className="text-gray-700 font-light text-[14px]">
            {post.author.tag}
          </Text>
        </View>
        <Text
          className="text-white font-light text-[15px] max-w-[85%]"
          numberOfLines={0}
        >
          {" "}
          {post.content}
        </Text>
      </View>
    </View>
  );
};

export default PostListItem;
