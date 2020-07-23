import React from "react";
import FilterIcon from "../../assets/FilterIcon.png";
import { StyleSheet, Image, TouchableOpacity } from "react-native";

export const FilterButton = ({ navigation }) => {
  const goToFilters = () => {
    navigation.navigate("FiltersScreen");
  };
  return (
    <TouchableOpacity onPress={goToFilters}>
      <Image source={FilterIcon} style={styles.filterIcon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  filterIcon: {
    width: 28,
    height: 29,
    marginRight: 20,
  },
});
