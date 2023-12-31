import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import LoginForm from "../components/account/LoginForm";
import RegisterForm from "../components/account/RegisterForm";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import colors from "../utils/colors";

export default function LoginScreen() {
  const [showLoginForm, setShowLoginForm] = useState(true);

  const changeForm = () => {
    setShowLoginForm(!showLoginForm);
  };
  return (
    <KeyboardAwareScrollView>
      <ImageBackground
        source={require("../../assets/images/libreria.jpg")}
        style={styles.background}
      >
        <View style={styles.containerLogo}>
          <Image
            style={styles.image}
            source={require("../../assets/images/logo.png")}
          />
          <Text style={styles.logoTitle}>Librería {"\n"}BookBox</Text>
        </View>
        <View style={styles.containerForm}>
          {showLoginForm ? <LoginForm /> : <RegisterForm />}
        </View>
        <TouchableOpacity onPress={changeForm}>
          <Text style={styles.BottomText}>
            {!showLoginForm
              ? "¿Ya tienes una cuenta?"
              : "¿No tienes una cuenta?"}
            <Text style={{ color: "#18ACFF", fontWeight: "bold" }}>
              {" "}
              {showLoginForm ? "Regístrate" : "Inicia Sesión"}
            </Text>
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </KeyboardAwareScrollView>
  );
}
const styles = StyleSheet.create({
  containerLogo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 220,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    alignItems: "center",
  },
  image: {
    width: 70,
    height: 70,
  },
  logoTitle: {
    fontSize: colors.FONT_SIZE_LARGE,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    alignSelf: "center",
  },
  containerForm: {
    marginTop: 60,
    height: 400,
    width: "80%",
    backgroundColor: colors.COLOR_FORM_BACKGROUND,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    padding: 20,
  },
  BottomText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: colors.FONT_SIZE_NORMAL,
    marginTop: 10,
    marginBottom: 80,
  },
});
