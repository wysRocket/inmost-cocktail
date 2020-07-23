import React, { useState, useEffect, useContext } from "react";
import { CocktailsContext } from "../context/cocktailsContext";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { FilterCard } from "../components/FilterCard";

export const FiltersScreen = ({ navigation }) => {
  const { filters, setFilters } = useContext(CocktailsContext);

  useEffect(() => {
    setCheckBoxes(filters);
  }, [filters]);

  const [CheckBoxes, setCheckBoxes] = useState(filters);
  // console.log("FiltersScreen -", CheckBoxes);

  const applyHandler = () => {
    setFilters(CheckBoxes);
    navigation.navigate("DrinksScreen");
  };

  const toggleSingleCheckBox = (category, flag) => {
    setCheckBoxes(
      CheckBoxes.map((c) => {
        if (c.strCategory === category) {
          return { ...c, checked: !flag };
        }
        return c;
      })
    );
  };

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={CheckBoxes}
        keyExtractor={(f) => f.strCategory}
        renderItem={({ item }) => (
          <FilterCard
            filterItem={item}
            toggleSingleCheckBox={toggleSingleCheckBox}
          />
        )}
      />
      <Button color="#272727" title="APPLY" onPress={applyHandler} />
    </View>
  );
};

FiltersScreen.navigationOptions = {
  headerTitle: "Filters",
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 30,
  },
  text: {
    fontSize: 16,
    fontFamily: "roboto-regular",
  },
  flex: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
