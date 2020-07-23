import React from "react";
import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import CheckedIcon from "../../assets/checked.png";

export const FilterCard = ({ filterItem, toggleSingleCheckBox }) => {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        toggleSingleCheckBox(filterItem.strCategory, filterItem.checked)
      }
    >
      <Text style={styles.text}> {filterItem.strCategory} </Text>
      {filterItem.checked ? (
        <Image style={styles.image} source={CheckedIcon} />
      ) : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 15,
    overflow: "hidden",
    flexDirection: "row",
    marginLeft: 20,
    justifyContent: "space-between",
    padding: 15,
  },
  image: {},
  text: {
    alignSelf: "center",
  },
});
