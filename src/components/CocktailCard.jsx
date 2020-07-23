import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export const CocktailCard = ({ drink }) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{ uri: drink.strDrinkThumb }} />
      <Text style={styles.text}> {drink.strDrink} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 40,
    overflow: "hidden",
    flexDirection: "row",
    marginLeft: 20,
  },
  image: {
    width: 100,
    height: 100,
  },
  text: {
    marginLeft: 20,
    alignSelf: "center",
  },
});
