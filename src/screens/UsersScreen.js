import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function UsersScreen() {
  return (
    <View style={styles.container}>
      <Text>Usuarios</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
