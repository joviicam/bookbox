import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function BooksScreen() {
  return (
    <View style={styles.container}>
      <Text>BooksScreen</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
