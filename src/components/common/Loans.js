import React, {useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import colors from "../../utils/colors";
import { doPut, doDelete } from "../../config/axios";


import Toast from "react-native-toast-message";
import AcceptLoanModal from "./AcceptLoanModal";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

export default function Loans(props) {
  
  const { author, email, book, id} = props;

  
  const [isLoanModalVisible, setLoanModalVisible] = useState(false);
  const [isLoanConfirmed, setLoanConfirmed] = useState(false);
  
  const toggleLoanModal = () => {
    setLoanModalVisible(!isLoanModalVisible);
  };

  const handleLoanConfirm = async () => {
    const response = await doPut(`prestamos/changeStatus/${id}`);
    console.log("Loan confirmed");
    setLoanConfirmed(true);
    toggleLoanModal();
    Toast.show({
      type: "success",
      text1: "Solicitud de préstamo aceptado",
      text2:
        "Se ha prestado el libro",
      visibilityTime: 3000,
      autoHide: true,
      position: "bottom",
      onHide: () => {},
    });  
  };

  const handleLoanCancel = async() => {
    const response = await doDelete(`prestamos/delete/${id}`);
    console.log("Loan canceled");
    Toast.show({
      type: "error",
      text1: "Solicitud de préstamo cancelado",
      text2:
        "Se ha cancelado la solicitud de préstamo",
      visibilityTime: 3000,
      autoHide: true,
      position: "bottom",
      onHide: () => {},
    });
  };

  return (
    <View style={styles.btn}>
      <View style={styles.containerTitle}>
        <Text style={styles.nameStyle}>{book}</Text>
        <Text style={styles.autorStyle}>{author}</Text>
        <Text style={styles.emailStyle}>{email}</Text>
      </View>
      <View style={styles.btnStatus}>
        <TouchableOpacity onPress={handleLoanCancel}>
          <Icon
            type="material-community"
            size={30}
            color={colors.getContrastColor(colors.COLOR_PRIMARY)}
            name={"bookmark-remove"}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleLoanModal}>
          <Icon
            type="material-community"
            size={30}
            color={colors.getContrastColor(colors.COLOR_PRIMARY)}
            name={"bookmark-check"}
          />
        </TouchableOpacity>
      </View>
      <AcceptLoanModal
        isVisible={isLoanModalVisible}
        onClose={toggleLoanModal}
        onConfirm={handleLoanConfirm}
        book={book}
        email={email}
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
    flexDirection: "column",
    color: colors.getContrastColor(colors.COLOR_PRIMARY),
    marginBottom: 5,
  },
  autorStyle: {
    fontSize: colors.FONT_SIZE_SMALL,
    flexDirection: "column",
    color: colors.getContrastColor(colors.COLOR_PRIMARY),
    marginBottom: 5,
  },
  emailStyle: {
    fontSize: colors.FONT_SIZE_INFO,
    flexDirection: "column",
    color: colors.getContrastColor(colors.COLOR_PRIMARY),
    marginBottom: 5,
    fontWeight: "bold",
  },
  btnStatus: {
    display: "flex",
    flexDirection: "row",
  },
});
