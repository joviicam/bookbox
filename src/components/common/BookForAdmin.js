import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import colors from "../../utils/colors";
import { useNavigation } from "@react-navigation/native";

export default function BookForAdmin(props) {
  const { bookKey, nombre, autor, genero } = props;
  console.log("Tengo hambre");
  console.log(props);
  const navigation = useNavigation();
  const libro = {
    id: bookKey,
    nombre: nombre,
    autor: autor,
    genero: genero,
  };

  const goToBookDetails = () => {
    navigation.navigate("BookDetailS", {
      libro: libro,
    });
  };
  return (
    <TouchableOpacity onPress={goToBookDetails}>
      <View style={styles.btn}>
        <View style={styles.containerTitle}>
          <Text style={styles.nameStyle}>{nombre}</Text>
          <Text style={styles.autorStyle}>{autor}</Text>
          <Text style={styles.genderStyle}>{genero}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    margin: 5,
    backgroundColor: colors.COLOR_PRIMARY,
    borderRadius: 10,
    width: 300,
    height: 80,
  },
  containerTitle: {
    flexDirection: "column",
    color: colors.getContrastColor(colors.COLOR_PRIMARY),
  },
  nameStyle: {
    fontSize: colors.FONT_SIZE_NORMAL,
    fontWeight: "bold",
    color: colors.getContrastColor(colors.COLOR_PRIMARY),
    marginBottom: 5,
  },
  autorStyle: {
    fontSize: colors.FONT_SIZE_SMALL,
    color: colors.getContrastColor(colors.COLOR_PRIMARY),
    marginBottom: 5,
  },
  genderStyle: {
    fontSize: colors.FONT_SIZE_INFO,
    fontWeight: "bold",
    color: colors.getContrastColor(colors.COLOR_PRIMARY),
  },
});
