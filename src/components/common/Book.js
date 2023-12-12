import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { StyleSheet } from "react-native";
import colors from "../../utils/colors";
import LoanModal from "./LoanModal";
import Toast from "react-native-toast-message";
import { doPost } from "../../config/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";

export default function Book(props) {
  const { name, author, genre, bookKey } = props;
  const [isLoanModalVisible, setLoanModalVisible] = useState(false);
  const [isLoanConfirmed, setLoanConfirmed] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      const userData = await AsyncStorage.getItem("user");
      setUser(JSON.parse(userData));
      console.log("ayuda por favor");
      console.log(JSON.parse(userData));
    };
    getUserData();
  }, []);

  let formData = {};
  if (user && user.data && user.data.idUser) {
    formData = {
      idUser: {
        id: user.data.idUser,
      },
      idBook: {
        id: bookKey,
      },
    };
    console.log("te amo junior h <3");
    console.log(formData);
  }

  const toggleLoanModal = () => {
    setLoanModalVisible(!isLoanModalVisible);
  };

  const handleLoanConfirm = async () => {
    console.log("entre al handleLoanConfirm");
    console.log(formData);
    try {
      const response = await doPost("/prestamos/create", formData);
      console.log(response);
      if (response.data.statusCode === 200) {
        console.log("Loan confirmed");
        setLoanConfirmed(true);
        toggleLoanModal();
        Toast.show({
          type: "success",
          text1: "Solicitud de préstamo confirmado",
          text2:
            "El libro se ha añadidirá a tu lista de préstamos una vez la solicitud sea aprobada",
          visibilityTime: 3000,
          autoHide: true,
          position: "bottom",
          onHide: () => {},
        });
        alert("Solicitud de préstamo confirmado");
      } else {
        alert("Error al crear el libro");
      }
    } catch (error) {
      console.log(error);
      alert("Error al crear el libro");
    }
  };

  return (
    <View style={styles.btn}>
      <View style={styles.containerTitle}>
        <Text style={styles.nameStyle}>{name}</Text>
        <Text style={styles.autorStyle}>{author}</Text>
        <Text style={styles.genderStyle}>{genre}</Text>
      </View>

      <TouchableOpacity onPress={toggleLoanModal}>
        <Icon
          type="material-community"
          size={30}
          color={colors.getContrastColor(colors.COLOR_PRIMARY)}
          name={"hand-back-left"}
        />
      </TouchableOpacity>

      <LoanModal
        isVisible={isLoanModalVisible}
        onClose={toggleLoanModal}
        onConfirm={handleLoanConfirm}
        name={name}
        bookKey={bookKey}
        author={author}
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
    color: colors.getContrastColor(colors.COLOR_PRIMARY),
  },
  nameStyle: {
    fontSize: colors.FONT_SIZE_NORMAL,
    fontWeight: "bold",
    color: colors.getContrastColor(colors.COLOR_PRIMARY),
    marginBottom: 5,
  },
  autorStyle: {
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
