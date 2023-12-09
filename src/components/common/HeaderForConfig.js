import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import colors from "../../utils/colors";

export default function HeaderForConfig() {
  return (
    <View style={styles.header}>
      <View style={styles.containerLogo}>
        <Image
          style={styles.image}
          source={require("../../../assets/images/logo.png")}
        />
        <Text style={styles.logoTitle}>Librería {"\n"}BookBox</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.COLOR_SECONDARY,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between", // Align items horizontally
    paddingTop: 30,
    alignItems: "center",
  },
  containerLogo: {
    backgroundColor: colors.COLOR_SECONDARY,
    flexDirection: "row",
    marginLeft: 110,
    alignItems: "center",
  },
  logoTitle: {
    fontSize: colors.FONT_SIZE_TITLE,
    fontWeight: "bold",
    color: colors.getContrastColor(colors.COLOR_SECONDARY),
    marginLeft: 10,
  },
  image: {
    width: 60,
    height: 60,
  },
});
