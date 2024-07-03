import { StyleSheet, Text, View } from "react-native";

import { FitnessContext } from "./src/navigation/Context";
import StackNavigator from "./src/navigation/stackNavigation";

export default function App() {
  return (
    <FitnessContext>
      <StackNavigator />
    </FitnessContext>
  );
}
