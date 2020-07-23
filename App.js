import React from "react";
import { StyleSheet } from "react-native";
import { CocktailsState } from "./src/context/CocktailsState";
import { AppLoading } from "expo";
import { AppNavigation } from "./src/navigation/AppNavigation";
import { bootstrap } from "./src/bootstrap";

export default function App() {
  const [isReady, setIsReady] = React.useState(false);
  if (!isReady) {
    return (
      <AppLoading
        startAsync={bootstrap}
        onFinish={() => setIsReady(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
  return (
    <CocktailsState>
      <AppNavigation />
    </CocktailsState>
  );
}
