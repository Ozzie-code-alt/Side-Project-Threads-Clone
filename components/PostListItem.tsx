import { Post } from "@/types";
import { Image } from "expo-image";
import React from "react";
import { Text, View } from "react-native";
const PostListItem = ({ post }: { post: Post }) => {
  return (
    <View
      className="flex border border-red-500 gap-5"
      style={{ flexDirection: "row" }}
    >
      <View>
        <Image
          className="h-10 w-10 rounded-full"
          source={{ uri: post.author.avatarUrl }}
        />
      </View>

      <View className="flex flex-col">
        <Text className="text-white font-bold">{post.author.name}</Text>
        <Text className="text-white"> {post.content}</Text>
      </View>
    </View>
  );
};

export default PostListItem;
