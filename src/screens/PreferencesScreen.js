import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../components/common/header";

export default function PreferencesScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <Text>Preferencias</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
