import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function BooksInLoanScreen() {
  return (
    <View style={styles.container}>
      <Text>Libros en préstamo</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
