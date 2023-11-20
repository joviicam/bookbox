import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import colors from "../../utils/colors";

export default function LoanModal({
  isVisible,
  onClose,
  onConfirm,
  nombre,
  autor,
}) {
  return (
    <Modal isVisible={isVisible} onBackdropPress={onClose}>
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>
          ¿Desea solicitar un préstamo de este libro?{"\n"}
        </Text>
        <Text style={styles.bookTitle}>
          Nombre: {nombre}
          {"\n\n"}Autor: {autor}
        </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.confirmButton}
            onPress={() => {
              onConfirm();
              onClose();
            }}
          >
            <Text style={styles.buttonText}>Aceptar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
            <Text style={styles.buttonText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 15,
  },
  modalTitle: {
    fontSize: 20,
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
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    width: 100,
    borderRadius: 15,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  bookTitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "left",
  },
});
