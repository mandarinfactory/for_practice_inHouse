import { FlatList } from "react-native";

import { CATEGORIES } from "../data/dummy-data";

const renderCategoryItem = (item) => {
  return;
};

export default function CategoriesScreen() {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(itemData) => itemData.item.id}
      renderItem={renderCategoryItem}
    />
  );
}
