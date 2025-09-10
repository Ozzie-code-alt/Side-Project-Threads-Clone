import PostListItem from "@/components/PostListItem";
import { posts } from "@/constants/dummy";
import { FlatList, SafeAreaView, ScrollView } from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView className="h-full w-full flex  items-center justify-  gap-10 bg-black">
      <ScrollView
        className="  w-full max-w-80  border border-blue-500"
      >
        <FlatList
          contentContainerStyle={{
            gap: 30, // 28 * 4 = 112px
            flexDirection: "column",
          }}
          className="border border-yellow-500 h-full flex flex-col gap-40"
          data={posts}
          renderItem={({ item }) => <PostListItem post={item} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
