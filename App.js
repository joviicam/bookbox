import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MainStack from "./src/navigation/MainStack";
import { LogBox } from "react-native";
import Toast from "react-native-toast-message";
import { ThemeProvider } from "./src/context/ThemeProvider";

export default function App() {
  return (
    <ThemeProvider>
      <MainStack />
      <Toast />
    </ThemeProvider>
  );
}
