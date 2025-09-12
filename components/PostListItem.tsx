import { Post } from "@/types";
import React, { memo } from "react";
import { Text, View } from "react-native";
import { StyledImage } from "./StyledComponents";

const PostListItem = ({ post }: { post: Post }) => {
  return (
    <View className="w-full flex-row gap-4 px-4 py-3 border-b border-neutral-800">
      <StyledImage
        className="h-10 w-10 rounded-full border border-neutral-700 overflow-hidden"
        source={{ uri: post.author.avatarUrl }}
      />
      <View className="flex-1">
        <View className="flex-row items-center gap-2 flex-wrap">
          <Text className="text-white font-semibold text-base">
            {post.author.name}
          </Text>
          <Text className="text-neutral-400 text-xs">
            {post.author.tag}
          </Text>
        </View>
        <Text className="text-neutral-200 text-sm mt-1">
          {post.content}
        </Text>
      </View>
    </View>
  );
};

export default memo(PostListItem);