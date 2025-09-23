import Feather from "@expo/vector-icons/Feather";
import React, { useState } from "react";
import { TextInput, View } from "react-native";
const SearchInput = ({ onSearchInput }: { onSearchInput: (value: string) => void }) => {
  const [searchInput, setSearchInput] = useState("");
  console.log(searchInput);

  onSearchInput(searchInput);
  return (
    <View className=" flex flex-row   px-3 items-center bg-gray-400/20 border-black rounded-xl">
      <Feather name="search" size={24}  color="black" />

      <TextInput
        className="h-14 w-full  px-2 text-black z-10"
        placeholderTextColor={"black"}
        placeholder="Search"
        onChangeText={setSearchInput}
        value={searchInput}
      />
    </View>
  );
};

export default SearchInput;
