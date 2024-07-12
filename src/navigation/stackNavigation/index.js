import { StyleSheet, Text, View } from "react-native";

import FitScreen from "../../pages/FitScreen";
import HomeScreen from "../../pages/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import RestScreen from "../../pages/RestScreen";
import SideNavigation from "../sideNavigation";
import Welcome from "../../pages/Welcome";
import WorkOutScreen from "../../pages/WorkoutScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SideNav"
          component={SideNavigation}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Workout"
          component={WorkOutScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Fit"
          component={FitScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Rest"
          component={RestScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
