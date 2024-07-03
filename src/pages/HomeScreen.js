import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useContext } from "react";

import FitnessCards from "../components/FitnessCards";
import { FitnessItems } from "../navigation/Context";

const HomeScreen = () => {
  const {
    minutes,

    calories,

    workout,
  } = useContext(FitnessItems);
  return (
    <ScrollView style={{ marginTop: 85,marginLeft:10, marginRight:10}}>
      <View
        style={{
          backgroundColor: "#65bebf",
          padding: 15,
         
          height: 150,
          width: "100%",
          borderRadius:15,

        }}>
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
          HOME WORKOUT
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 20,
          }}>
          <View>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "white",
                fontSize: 18,
              }}>
              {workout}
            </Text>
            <Text style={{ color: "#2b2b2b", fontSize: 17, marginTop: 6 }}>
              WORKOUTS
            </Text>
          </View>

          <View>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "white",
                fontSize: 18,
              }}>
              {calories}
            </Text>
            <Text style={{ color: "#2b2b2b", fontSize: 17, marginTop: 6 }}>
              KCAL
            </Text>
          </View>

          <View>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "white",
                fontSize: 18,
              }}>
              {minutes}
            </Text>
            <Text style={{ color: "#2b2b2b", fontSize: 17, marginTop: 6,fontWeight:"bold" }}>
              MINS
            </Text>
          </View>
        </View>

        
          
        <FitnessCards />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
