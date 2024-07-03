import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";

const CustomButton = ({ title }) => {
  return (
    <View>
      <TouchableOpacity
        style={{
          width: 250,
          height: 50,
          backgroundColor: "white",
          justifyContent: "center",
          borderRadius: 20,
        }}>
        <Text style={{ textAlign: "center", fontWeight: "bold",color:"#4e4f4f",fontSize:18 }}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;