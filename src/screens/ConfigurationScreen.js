import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import LogoutButton from "../components/common/LogoutButton";
import ChangePasswordModal from "../components/account/ChangePasswordModal"; // Import the modal component
import { useNavigation } from "@react-navigation/native";
import colors from "../utils/colors";

export default function ConfigurationScreen() {
  const navigation = useNavigation();
  const [isChangePasswordModalVisible, setChangePasswordModalVisible] =
    useState(false);

  const handleOpenChangePasswordModal = () => {
    setChangePasswordModalVisible(true);
  };

  const handleCloseChangePasswordModal = () => {
    setChangePasswordModalVisible(false);
  };

  return (
    <View style={styles.container}>
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
        <LogoutButton onPress={() => navigation.replace("LoginS")} />
      </View>

      {/* Include the ChangePasswordModal component */}
      <ChangePasswordModal
        isVisible={isChangePasswordModalVisible}
        onClose={handleCloseChangePasswordModal}
        onChangePassword={(newPassword) => {
          // Implement your logic for changing the password here
          console.log("New Password:", newPassword);
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
