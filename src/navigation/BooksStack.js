import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BooksScreen from "../screens/BooksScreen";
import AddBook from "../components/books/AddBook";

const Stack = createNativeStackNavigator(); // Crear un stack navigator

export default function BooksStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BooksS"
        component={BooksScreen}
        options={{ title: "Libros" }}
      />
      <Stack.Screen
        name="AddBookS"
        component={AddBook}
        options={{ title: "Añadir libro" }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
