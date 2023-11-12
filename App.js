import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MainStack from "./src/navigation/MainStack";
import { LogBox } from "react-native";
import Toast from "react-native-toast-message";

export default function App() {
  return (
    <>
      <MainStack />
      <Toast />
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
