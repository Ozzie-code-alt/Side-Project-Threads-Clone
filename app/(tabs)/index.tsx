import PostListItem from "@/components/PostListItem";
import { posts } from "@/constants/dummy";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function HomeScreen() {
  return (
    <SafeAreaView
      edges={["top"]}
     className="flex-1 bg-black"
    >
      <FlatList
        contentContainerStyle={{
          gap: 30, // 28 * 4 = 112px

          flexDirection: "column",
        }}
      
        data={posts}
        renderItem={({ item }) => <PostListItem post={item} />}
      />
    </SafeAreaView>
  );
}
