import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../utils/colors";

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
    backgroundColor: colors.COLOR_FORM_BACKGROUND,
  },
  title: {
    fontSize: colors.FONT_SIZE_TITLE,
    color: colors.getContrastColor(colors.COLOR_FORM_BACKGROUND),
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 40,
  }
});
