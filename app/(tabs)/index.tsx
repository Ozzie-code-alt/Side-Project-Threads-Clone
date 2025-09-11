import PostListItem from "@/components/PostListItem";
import { posts } from "@/constants/dummy";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function HomeScreen() {
  return (
    <SafeAreaView className=" flex max-w-lg overflow-x-hidden   items-center   gap-10 bg-black">
      <FlatList
        contentContainerStyle={{
          gap: 30, // 28 * 4 = 112px

          flexDirection: "column",
        }}
        className="border flex flex-col gap-64"
        data={posts}
        renderItem={({ item }) => <PostListItem post={item} />}
      />
    </SafeAreaView>
  );
}
