import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function BooksInLoanScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Libros en préstamo</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 40,
  }
});
