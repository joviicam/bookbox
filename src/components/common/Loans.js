import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import colors from "../../utils/colors";
import { doPut } from "../../config/axios";

import Toast from "react-native-toast-message";

export default function Loans(props) {
  
  const { author, email, book, id} = props;
  
  const handleLoanConfirm = () => {
    console.log("Loan confirmed");
    Toast.show({
      type: "success",
      text1: "Préstamo confirmado",
      text2: "El libro se ha prestado",
      visibilityTime: 3000,
      autoHide: true,
      onHide: () => {},
    });
  };

  const handleLoanCancel = () => {
    console.log("Loan canceled");
    Toast.show({
      type: "success",
      text1: "Préstamo cancelado",
      text2: "El libro no se ha prestado",
      visibilityTime: 3000,
      autoHide: true,
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
        <TouchableOpacity onPress={handleLoanConfirm}>
          <Icon
            type="material-community"
            size={30}
            color={colors.getContrastColor(colors.COLOR_PRIMARY)}
            name={"bookmark-check"}
          />
        </TouchableOpacity>
      </View>
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
