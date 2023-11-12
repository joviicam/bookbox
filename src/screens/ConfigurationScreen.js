import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../components/common/header";

export default function ConfigurationScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <Text>Configuracion</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
