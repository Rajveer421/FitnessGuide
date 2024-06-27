import { StyleSheet, Text, View } from "react-native";

import Navigation from "./src/navigation/stackNavigation";
import { StatusBar } from "expo-status-bar";
import Welcome from "./src/pages/Welcome";

export default function App() {
  return (
    <>
      <Welcome />
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