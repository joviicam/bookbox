import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Modal from "react-native-modal";
import colors from "../../utils/colors";

const ChangePasswordModal = ({ isVisible, onClose, onChangePassword }) => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [error, setError] = useState("");

  const handleConfirm = () => {
    if (currentPassword.trim() === "") {
      setError("Contraseña actual no puede estar vacía");
      return;
    }

    if (newPassword.trim() === "") {
      setError("Nueva contraseña no puede estar vacía");
      return;
    }

    if (confirmNewPassword.trim() === "") {
      setError("Confirmar nueva contraseña no puede estar vacía");
      return;
    }

    if (newPassword !== confirmNewPassword) {
      setError("La nueva contraseña y la confirmación deben coincidir");
      return;
    }

    // Reset the error state
    setError("");

    // Call the function to change the password
    onChangePassword(newPassword);

    onClose();
    // Reset the form
    setCurrentPassword("");
    setNewPassword("");
    setConfirmNewPassword("");
    setError("");
  };

  return (
    <Modal isVisible={isVisible} onBackdropPress={onClose}>
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Cambiar Contraseña</Text>

        <TextInput
          style={styles.input}
          placeholder="Contraseña actual"
          placeholderTextColor={colors.getContrastColor(colors.COLOR_FORM_BACKGROUND)}
          secureTextEntry
          value={currentPassword}
          onChangeText={(text) => setCurrentPassword(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Nueva Contraseña"
          placeholderTextColor={colors.getContrastColor(colors.COLOR_FORM_BACKGROUND)}
          secureTextEntry
          value={newPassword}
          onChangeText={(text) => setNewPassword(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Confirmar Nueva Contraseña"
          placeholderTextColor={colors.getContrastColor(colors.COLOR_FORM_BACKGROUND)}
          secureTextEntry
          value={confirmNewPassword}
          onChangeText={(text) => setConfirmNewPassword(text)}
        />
        {error !== "" && <Text style={styles.errorText}>{error}</Text>}

        <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
          <Text style={styles.buttonTextConfirm}>Confirmar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
          <Text style={styles.buttonTextCancel}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: colors.COLOR_FORM_BACKGROUND,
    padding: 20,
    borderRadius: 15,
  },
  modalTitle: {
    fontSize: colors.FONT_SIZE_TITLE,
    color: colors.getContrastColor(colors.COLOR_FORM_BACKGROUND),
    fontWeight: "bold",
    marginBottom: 10,
    alignSelf: "center",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    color: colors.getContrastColor(colors.COLOR_FORM_BACKGROUND),
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  confirmButton: {
    backgroundColor: colors.COLOR_PRIMARY,
    padding: 10,
    borderRadius: 15,
    alignItems: "center",
    marginBottom: 10,
  },
  cancelButton: {
    backgroundColor: colors.COLOR_WARNING,
    padding: 10,
    borderRadius: 15,
    alignItems: "center",
  },
  buttonTextConfirm: {
    color: colors.getContrastColor(colors.COLOR_PRIMARY),
    fontWeight: "bold",
  },
  buttonTextCancel: {
    color: colors.getContrastColor(colors.COLOR_WARNING),
    fontWeight: "bold",
  },
  errorText: {
    color: colors.COLOR_WARNING,
    marginBottom: 10,
    fontSize: colors.FONT_SIZE_INFO,
  },
});

export default ChangePasswordModal;
