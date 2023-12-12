import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { Button, Input } from "react-native-elements";
import { Picker } from "@react-native-picker/picker";
import colors from "../../utils/colors";
import { useFormik } from "formik";
import * as Yup from "yup";
import { doPost } from "../../config/axios";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function AddBook() {
  const navigation = useNavigation();
  const formik = useFormik({
    initialValues: {
      name: "",
      author: "",
      year: "",
      pages: "",
      genre: "",
      quantity: "",
      editorial: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("El nombre es obligatorio"),
      author: Yup.string().required("El autor es obligatorio"),
      year: Yup.number().required("El año es obligatorio"),
      pages: Yup.number().required("Las páginas son obligatorias"),
      genre: Yup.string().required("El género es obligatorio"),
      quantity: Yup.number().required("La cantidad es obligatoria"),
      editorial: Yup.string().required("La editorial es obligatoria"),
    }),
    onSubmit: async (formData) => {
      console.log(formData);
      try {
        const response = await doPost("/libros/create", formData);
        console.log(response);
        if (response.data.statusCode === 200) {
          alert("Libro creado correctamente");
          formik.resetForm();
          navigation.navigate("BooksS");
          Toast.show({
            text1: "Libro creado correctamente",
            type: "success",
            visibilityTime: 2000,
          });
        } else {
          alert("Error al crear el libro");
        }
      } catch (error) {
        console.log(error);
        alert("Error al crear el libro");
      }
    },
  });

  return (
    <KeyboardAwareScrollView>
      <ImageBackground
        source={require("../../../assets/images/libreria.jpg")}
        style={styles.background}
      >
        <View style={styles.containerLogo}>
          <View style={styles.formContainer}>
            <Text style={styles.header}>Agregar libro</Text>
            <Input
              onChangeText={(text) => {
                formik.setFieldValue("name", text);
              }}
              value={formik.values.name}
              placeholder="Nombre del libro"
              placeholderTextColor={colors.getContrastColor(
                colors.COLOR_FORM_BACKGROUND
              )}
              style={{
                color: colors.getContrastColor(colors.COLOR_FORM_BACKGROUND),
              }}
              errorMessage={formik.errors.name}
            />
            <Input
              onChangeText={(text) => {
                formik.setFieldValue("author", text);
              }}
              value={formik.values.author}
              placeholder="Autor"
              placeholderTextColor={colors.getContrastColor(
                colors.COLOR_FORM_BACKGROUND
              )}
              style={{
                color: colors.getContrastColor(colors.COLOR_FORM_BACKGROUND),
              }}
              errorMessage={formik.errors.author}
            />
            <Input
              onChangeText={(text) => {
                formik.setFieldValue("quantity", text);
              }}
              value={formik.values.quantity}
              placeholder="Cantidad"
              keyboardType="numeric"
              placeholderTextColor={colors.getContrastColor(
                colors.COLOR_FORM_BACKGROUND
              )}
              style={{
                color: colors.getContrastColor(colors.COLOR_FORM_BACKGROUND),
              }}
              errorMessage={formik.errors.quantity}
            />
            <Input
              onChangeText={(text) => {
                formik.setFieldValue("editorial", text);
              }}
              value={formik.values.editorial}
              placeholder="Editorial"
              placeholderTextColor={colors.getContrastColor(
                colors.COLOR_FORM_BACKGROUND
              )}
              style={{
                color: colors.getContrastColor(colors.COLOR_FORM_BACKGROUND),
              }}
              errorMessage={formik.errors.editorial}
            />
            <Input
              onChangeText={(text) => {
                formik.setFieldValue("year", text);
              }}
              value={formik.values.year}
              placeholder="Año"
              keyboardType="numeric"
              placeholderTextColor={colors.getContrastColor(
                colors.COLOR_FORM_BACKGROUND
              )}
              style={{
                color: colors.getContrastColor(colors.COLOR_FORM_BACKGROUND),
              }}
              errorMessage={formik.errors.year}
            />
            <Input
              onChangeText={(text) => {
                formik.setFieldValue("pages", text);
              }}
              value={formik.values.pages}
              placeholder="Páginas"
              keyboardType="numeric"
              placeholderTextColor={colors.getContrastColor(
                colors.COLOR_FORM_BACKGROUND
              )}
              style={{
                color: colors.getContrastColor(colors.COLOR_FORM_BACKGROUND),
              }}
              errorMessage={formik.errors.pages}
            />
            <Picker
              style={styles.picker}
              selectedValue={formik.values.genre}
              onValueChange={(value) => {
                formik.setFieldValue("genre", value);
              }}
              mode="dialog"
              errorMessage={formik.errors.genre}
            >
              <Picker.Item
                label="Selecciona un género"
                value=""
                disabled={true}
                style={{ backgroundColor: colors.COLOR_FORM_BACKGROUND }}
                color={colors.getContrastColor(colors.COLOR_FORM_BACKGROUND)}
              />
              <Picker.Item
                label="Novela histórica"
                value="Novela histórica"
                style={{ backgroundColor: colors.COLOR_FORM_BACKGROUND }}
                color={colors.getContrastColor(colors.COLOR_FORM_BACKGROUND)}
              />
              <Picker.Item
                label="Novela romántica"
                value="Novela romántica"
                style={{ backgroundColor: colors.COLOR_FORM_BACKGROUND }}
                color={colors.getContrastColor(colors.COLOR_FORM_BACKGROUND)}
              />
              <Picker.Item
                label="Novela de terror"
                value="Novela de terror"
                style={{ backgroundColor: colors.COLOR_FORM_BACKGROUND }}
                color={colors.getContrastColor(colors.COLOR_FORM_BACKGROUND)}
              />
              <Picker.Item
                label="Novela de ciencia ficción"
                value="Novela de ciencia ficción"
                style={{ backgroundColor: colors.COLOR_FORM_BACKGROUND }}
                color={colors.getContrastColor(colors.COLOR_FORM_BACKGROUND)}
              />
            </Picker>
            <View style={styles.buttonsContainer}>
              <Button
                title="Guardar"
                titleStyle={{
                  color: colors.getContrastColor(colors.COLOR_PRIMARY),
                }}
                type="submit"
                buttonStyle={styles.saveButton}
                onPress={formik.handleSubmit}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  containerLogo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  background: {
    resizeMode: "cover",
    alignItems: "center",
    height: "100%",
  },
  image: {
    width: 70,
    height: 70,
  },
  header: {
    fontSize: colors.FONT_SIZE_TITLE,
    color: colors.getContrastColor(colors.COLOR_FORM_BACKGROUND),
    fontWeight: "bold",
    textAlign: "center",
    alignSelf: "center",
    marginBottom: 10,
  },
  logoTitle: {
    fontSize: colors.FONT_SIZE_LARGE,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    alignSelf: "center",
  },
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.COLOR_FORM_BACKGROUND,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  picker: {
    width: "100%",
    height: 50, // Adjust the height according to your preference
    marginBottom: 120, // Add marginBottom to give space below the Picker
    color: colors.getContrastColor(colors.COLOR_FORM_BACKGROUND),
  },

  saveButton: {
    width: "80%",
    height: 60,
    borderRadius: 30,
    alignSelf: "center",
    backgroundColor: colors.COLOR_PRIMARY,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
});
