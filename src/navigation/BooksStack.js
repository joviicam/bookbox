import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BooksScreen from "../screens/BooksScreen";

const Stack = createNativeStackNavigator(); // Crear un stack navigator

export default function BooksStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BooksS"
        component={BooksScreen}
        options={{ title: "Libros" }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
