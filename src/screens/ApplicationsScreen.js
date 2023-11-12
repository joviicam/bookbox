import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ApplicationsScreen() {
  return (
    <View style={styles.container}>
      <Text>Solicitudes de libros</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
