import { posts } from "@/constants/dummy";
import { FlatList, Text } from "react-native";

export default function HomeScreen() {
  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <Text className="text-white bg-black"> {item.content} </Text>}
    />
  );
}
