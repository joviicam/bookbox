import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../utils/colors";
import { Picker } from "@react-native-picker/picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {ThemeContext} from "../context/ThemeProvider";

export default function PreferencesScreen() {
  const {theme, toggleTheme} = useContext(ThemeContext);

  const handleChangeTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    toggleTheme(newTheme);
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.COLOR_FORM_BACKGROUND,
    },
    title: {
      fontSize: colors.FONT_SIZE_TITLE,
      fontWeight: "bold",
      color: colors.getContrastColor(colors.COLOR_FORM_BACKGROUND),
      textAlign: "center",
      marginTop: 20,
    },
    themeTitle: {
      fontSize: colors.FONT_SIZE_TITLE,
      color: colors.getContrastColor(colors.COLOR_FORM_BACKGROUND),
      textAlign: "left",
      marginTop: 50,
      marginLeft: "20%",
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Preferencias</Text>
      <View>
        <Text style={styles.themeTitle}>Tema: </Text>
        <Picker
          style={styles.picker}
          selectedValue={theme}
          onValueChange={handleChangeTheme}
          mode="dropdown"
        >
          <Picker.Item
            key="1"
            label="Claro"
            value="light"
            style={{
              backgroundColor: colors.COLOR_FORM_BACKGROUND,
            }}
            color={colors.getContrastColor(colors.COLOR_FORM_BACKGROUND)}
          />
          <Picker.Item
            key="2"
            label="Oscuro"
            value="dark"
            style={{
              backgroundColor: colors.COLOR_FORM_BACKGROUND,
            }}
            color={colors.getContrastColor(colors.COLOR_FORM_BACKGROUND)}
          />
        </Picker>
      </View>
    </View>
  );
}
