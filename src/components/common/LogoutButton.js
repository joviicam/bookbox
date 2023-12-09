import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import colors from "../../utils/colors";

export default function LogoutButton(props) {
  const { onPress } = props;
  return (
    <Button
      buttonStyle={styles.container}
      title="Cerrar sesión"
      titleStyle={styles.buttonTitle}
      onPress={() => {
        onPress();
      }}
    ></Button>
  );
}
const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 50,
    borderRadius: 15,
    backgroundColor: colors.COLOR_WARNING,
  },
  buttonTitle: {
    color: colors.getContrastColor(colors.COLOR_WARNING),
    fontWeight: "bold",
    fontSize: colors.FONT_SIZE_TITLE,
  },
});
