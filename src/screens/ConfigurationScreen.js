import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import LogoutButton from "../components/common/LogoutButton";
import ChangePasswordModal from "../components/account/ChangePasswordModal"; // Import the modal component
import { useNavigation } from "@react-navigation/native";
import colors from "../utils/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { doPut, doGet } from "../config/axios";
import Toast from "react-native-toast-message";

export default function ConfigurationScreen() {
  const navigation = useNavigation();
  const [isChangePasswordModalVisible, setChangePasswordModalVisible] =
    useState(false);
  const [userStored, setUserStored] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      const userData = await AsyncStorage.getItem("user");
      setUser(JSON.parse(userData));
      console.log(JSON.parse(userData));
    };
    getUserData();
  }, []);

  const actualizarDatos = async () => {
    try {
      console.log(user.idUser);
      const response = await doGet(`/usuarios/getById/${user.idUser}`);
      if (response.data.statusCode === 200) {
        console.log(response.data.data);
        navigation.navigate("UserDetailsS", { user: response.data.data });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getUserStored = async () => {
      const user = await AsyncStorage.getItem("user");
      setUserStored(JSON.parse(user));
      console.log(userStored);
    };
    getUserStored();
  }, []);

  const handlePassChange = async (newPassword) => {
    try {
      const response = await doPut("/usuarios/changePass", {
        password: userStored.password,
        email: userStored.email,
        newPassword: newPassword,
      });
      if (response.data.statusCode === 200) {
        Toast.show({
          type: "success",
          position: "bottom",
          text1: "La contraseña se cambió correctamente",
          visibilityTime: 3000,
          autoHide: true,
          onHide: () => {},
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleOpenChangePasswordModal = () => {
    setChangePasswordModalVisible(true);
  };

  const handleCloseChangePasswordModal = () => {
    setChangePasswordModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={actualizarDatos}>
        <View style={styles.optionContainer}>
          <Text style={styles.option}>Actualizar datos personales</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("PreferencesS")}>
        <View style={styles.optionContainer}>
          <Text style={styles.option}>Configuración visual</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleOpenChangePasswordModal}>
        <View style={styles.optionContainer}>
          <Text style={styles.option}>Cambiar contraseña</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.logout}>
        <LogoutButton
          onPress={async () => {
            await AsyncStorage.removeItem("user");
            await AsyncStorage.removeItem("token");
            await AsyncStorage.removeItem("email");
            await AsyncStorage.removeItem("password");
            await AsyncStorage.removeItem("idUser");
            navigation.reset({
              index: 0,
              routes: [{ name: "LoginS" }],
            });
          }}
        />
      </View>

      {/* Include the ChangePasswordModal component */}
      <ChangePasswordModal
        isVisible={isChangePasswordModalVisible}
        onClose={handleCloseChangePasswordModal}
        onChangePassword={(newPassword) => {
          handlePassChange(newPassword); // Call the function to change the password
          handleCloseChangePasswordModal(); // Close the modal after changing the password
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.COLOR_FORM_BACKGROUND,
  },
  optionContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 10,
    paddingTop: 10,
  },
  option: {
    fontSize: colors.FONT_SIZE_NORMAL,
    marginBottom: 10,
    color: colors.getContrastColor(colors.COLOR_FORM_BACKGROUND),
  },
  logout: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 20,
  },
});
