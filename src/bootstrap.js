import * as Font from "expo-font";

export async function bootstrap() {
  await Font.loadAsync({
    "roboto-regular": require("../assets/fonts/Roboto-Regular.ttf"),
  });
}
