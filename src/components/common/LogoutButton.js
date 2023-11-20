import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";

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
    backgroundColor: "#FF5858",
  },
  buttonTitle: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 20,
  },
});
