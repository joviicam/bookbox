import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function PreferencesScreen() {
  return (
    <View style={styles.container}>
      <Text>Preferencias</Text>
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
