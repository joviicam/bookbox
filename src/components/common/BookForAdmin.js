import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import colors from "../../utils/colors";
import { useNavigation } from "@react-navigation/native";

export default function BookForAdmin(props) {
  const { bookKey, name, author, editorial, pages, year, genre, quantity } =
    props;
  const navigation = useNavigation();
  const libro = {
    id: bookKey,
    name: name,
    author: author,
    editorial: editorial,
    pages: pages,
    year: year,
    genre: genre,
    quantity: quantity,
  };

  const goToBookDetails = () => {
    navigation.navigate("BookDetailS", {
      libro: libro,
    });
    console.log(libro);
  };
  return (
    <TouchableOpacity onPress={goToBookDetails}>
      <View style={styles.btn}>
        <View style={styles.containerTitle}>
          <Text style={styles.nameStyle}>{name}</Text>
          <Text style={styles.authorStyle}>{author}</Text>
          <Text style={styles.genderStyle}>{genre}</Text>
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
  authorStyle: {
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
