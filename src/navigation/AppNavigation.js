import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { DrinksScreen } from "../screens/DrinksScreen";
import { FiltersScreen } from "../screens/FiltersScreen";

const Stack = createStackNavigator();

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            fontFamily: "roboto-regular",
            fontWeight: "500",
            fontSize: 24,
          },
          headerStyle: {
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.4,
            shadowRadius: 6,
            elevation: 10,
          },
        }}
      >
        <Stack.Screen
          name="DrinksScreen"
          component={DrinksScreen}
          options={DrinksScreen.navigationOptions}
        />
        <Stack.Screen
          name="FiltersScreen"
          component={FiltersScreen}
          options={FiltersScreen.navigationOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
