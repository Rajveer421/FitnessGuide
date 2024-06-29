import { StyleSheet, Text, View } from "react-native";

import Navigation from "./src/navigation/stackNavigation";
import { StatusBar } from "expo-status-bar";
import Welcome from "./src/pages/Welcome";
import { BottomNavigation } from "react-native-paper";
import BottomTabNavigation from "./src/navigation/bottomNavigation";

export default function App() {
  return (
    <>
      {/*<Welcome />*/}
      {/*<Navigation />*/}
      <BottomTabNavigation />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
