import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { StyleSheet } from "react-native";
import colors from "../../utils/colors";
import LoanModal from "./LoanModal"; // Import the LoanModal component
import Toast from "react-native-toast-message";

export default function Book(props) {
  const { nombre, autor, genero } = props;
  const [isLoanModalVisible, setLoanModalVisible] = useState(false);
  const [isLoanConfirmed, setLoanConfirmed] = useState(false);

  const toggleLoanModal = () => {
    if (isLoanConfirmed) {
      // If the loan is confirmed, we don't want to show the modal again
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Ya solicitaste este libro",
        visibilityTime: 3000,
        autoHide: true,
        onHide: () => {},
      });
      return;
    } else {
      setLoanModalVisible(!isLoanModalVisible);
    }
  };

  const handleLoanConfirm = () => {
    // Add your logic for handling the loan confirmation here
    console.log("Loan confirmed");
    setLoanConfirmed(true);
    toggleLoanModal();
    Toast.show({
      type: "success",
      text1: "Préstamo confirmado",
      text2: "El libro se ha añadido a tu lista de préstamos",
      visibilityTime: 3000,
      autoHide: true,
      onHide: () => {},
    });
  };

  return (
    <View style={styles.btn}>
      <View style={styles.containerTitle}>
        <Text style={styles.nameStyle}>{nombre}</Text>
        <Text style={styles.autorStyle}>{autor}</Text>
        <Text style={styles.genderStyle}>{genero}</Text>
      </View>

      <TouchableOpacity onPress={toggleLoanModal}>
        <Icon
          type="material-community"
          size={30}
          color="white"
          name={isLoanConfirmed ? "hand-back-left" : "hand-back-left-outline"}
        />
      </TouchableOpacity>

      <LoanModal
        isVisible={isLoanModalVisible}
        onClose={toggleLoanModal}
        onConfirm={handleLoanConfirm}
        nombre={nombre}
        autor={autor}
      />
    </View>
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
  },
  nameStyle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
    marginBottom: 5,
  },
  autorStyle: {
    fontSize: 12,
    color: "white",
    marginBottom: 5,
  },
  genderStyle: {
    fontSize: 10,
    fontWeight: "bold",
    color: "white",
  },
});
