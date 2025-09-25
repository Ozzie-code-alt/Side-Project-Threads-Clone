import SearchInput from "@/components/search-input";
import UserCard from "@/components/UserCard";
import { useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Search() {
  const [searchData, setsearchData] = useState("");
  const handleSearchData = (passedData: string) => {
    setsearchData(passedData);
  };

  console.log(searchData);
  return (
    <SafeAreaView className="px-2">
      <View className="gap-5">
        <Text className="text-[30px]">Search</Text>
        <SearchInput onSearchInput={handleSearchData} />
        {/* <Text className="mt-2 text-gray-600">Current search: {searchData}</Text> */}
        {/*Mapped Section Component here  */}
        <UserCard />
      </View>
    </SafeAreaView>
  );
}
