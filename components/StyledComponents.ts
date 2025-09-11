import { Image } from "expo-image";
import { cssInterop } from "nativewind";
import { FlatList } from "react-native";

export const StyledImage = cssInterop(Image, {
  className: {
    target: "style",
  },
});

export const StyledFlatList = cssInterop(FlatList, {
  className: {
    target: "style",
  },
});
