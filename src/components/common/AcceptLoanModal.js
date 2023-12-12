import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import colors from "../../utils/colors";

export default function AcceptLoanModal({
    isVisible,
    onClose,
    onConfirm,
    book,
    email,
}) {
    return (
        <Modal isVisible={isVisible} onBackdropPress={onClose}>
        <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>
            ¿Aceptas el préstamo?{"\n"}
            </Text>
            <Text style={styles.bookTitle}>
            Libro: {book}
            {"\n\n"}email: {email}
            {"\n\n"}
            Duración del préstamo: 3 días
            </Text>

            <View style={styles.buttonContainer}>
            <TouchableOpacity
                style={styles.confirmButton}
                onPress={() => {
                onConfirm();
                onClose();
                }}
            >
                <Text style={styles.buttonTextAccept}>Aceptar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
                <Text style={styles.buttonTextCancel}>Cancelar</Text>
            </TouchableOpacity>
            </View>
        </View>
        </Modal>
    );
}

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
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  confirmButton: {
    backgroundColor: colors.COLOR_PRIMARY,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    width: 100,
    borderRadius: 15,
  },
  cancelButton: {
    backgroundColor: colors.COLOR_WARNING,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    width: 100,
    borderRadius: 15,
  },
  buttonTextAccept: {
    color: colors.getContrastColor(colors.COLOR_PRIMARY),
    fontWeight: "bold",
  },
  buttonTextCancel: {
    color: colors.getContrastColor(colors.COLOR_WARNING),
    fontWeight: "bold",
  },
  bookTitle: {
    fontSize: colors.FONT_SIZE_NORMAL,
    color: colors.getContrastColor(colors.COLOR_FORM_BACKGROUND),
    marginBottom: 20,
    textAlign: "left",
  },
});
