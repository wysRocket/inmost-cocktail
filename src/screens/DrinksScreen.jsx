import React, { useState, useEffect, useContext } from "react";
import { CocktailsContext } from "../context/cocktailsContext";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  ActivityIndicator,
  Alert,
} from "react-native";
import { CocktailCard } from "../components/CocktailCard";
import { FilterButton } from "../components/Buttons";

export const DrinksScreen = () => {
  const { fetchFilters, fetchList, drinks, filters, loading } = useContext(
    CocktailsContext
  );
  const [list, setList] = useState();
  const [index, setIndex] = useState(0);
  const [listsToRender, setListsToRender] = useState();

  useEffect(() => {
    fetchFilters();
  }, []);

  useEffect(() => {
    setListsToRender(filters.filter((x) => x.checked === true));
    setIndex(0);
  }, [filters]);

  // console.log("listsToRender", listsToRender);

  const getList = () => {
    const category = listsToRender[index].strCategory;
    fetchList(category);
    setList(category);
  };

  useEffect(() => {
    if (listsToRender && listsToRender.length > 0) {
      getList();
    } else return;
  }, [listsToRender]);

  const loadMore = () => {
    if (index < listsToRender.length) {
      getList();
      setIndex(index + 1);
      //      console.log("end reached!");
    } else {
      Alert.alert("That's enought for today");
    }
  };
  const renderFooter = () => {
    if (loading)
      return (
        <View>
          <ActivityIndicator color="#000" />
        </View>
      );
    return null;
  };
  return (
    <>
      <Text style={styles.category}> {list} </Text>
      <View style={{ flex: 1, height: Dimensions.get("window").height }}>
        <FlatList
          data={drinks}
          extraData={list}
          ListFooterComponent={renderFooter}
          keyExtractor={(d) => d.idDrink}
          renderItem={({ item }) => <CocktailCard drink={item} />}
          onEndReachedThreshold={0.001}
          onEndReached={() => !loading && loadMore()}
        />
      </View>
    </>
  );
};

DrinksScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: "Drinks",
  headerRight: () => <FilterButton navigation={navigation} />,
});

const styles = StyleSheet.create({
  category: {
    color: "#7E7E7E",
    fontSize: 14,
    padding: 20,
  },
});
