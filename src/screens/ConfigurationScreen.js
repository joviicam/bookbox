import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ConfigurationScreen() {
  return (
    <View style={styles.container}>
      <Text>Configuracion</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
});
