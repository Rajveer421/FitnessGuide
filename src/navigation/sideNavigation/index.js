import { StyleSheet, Text, View } from "react-native";

import AnDesign from "react-native-vector-icons/AntDesign";
import { COLORS } from "../../constants/Colors";
import HomeScreen from "../../pages/HomeScreen";
import Profile from "../../pages/Profile";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

const SideNavigation = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        drawerPosition: "left",
        drawerActiveBackgroundColor: COLORS.PRIMARY,
      }}>
      <Drawer.Screen
        options={{
          drawerIcon: ({ color, size }) => (
            <AnDesign name="home" color={color} size={26} />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({ color, size }) => (
            <AnDesign name="user" color={color} size={26} />
          ),
        }}
        name="About"
        component={Profile}
      />
    </Drawer.Navigator>
  );
};

export default SideNavigation;

const styles = StyleSheet.create({});
