import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MapScreen from "../screens/MapScreen";

const Stack = createNativeStackNavigator(); // Crear un stack navigator

export default function MapStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MapS"
        component={MapScreen}
        options={{ title: "Mapa" }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
