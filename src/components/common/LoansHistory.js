import React, {useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../../utils/colors";
import DevolutionLoanModal from "./DevolutionLoanModal";
import { doPut } from "../../config/axios";
import Toast from "react-native-toast-message";
//navegacion
import { useNavigation } from "@react-navigation/native";

export default function LoansHistory(props) {
  const { author, email, book, days, id} = props;

  const navigation = useNavigation();

  const calculateDaysPrested = (dateInit) => {
    const [day, month, year] = dateInit.split('/');
    const dateInitObject = new Date(year, month - 1, day);
    const currentDate = new Date();
    const timeDifference = currentDate - dateInitObject;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    return daysDifference;
  };

  const daysPrested = calculateDaysPrested(days);
  const fine = daysPrested > 3 ? (daysPrested - 3) * 60 : 0;

  const [isLoanModalVisible, setLoanModalVisible] = useState(false);
  const [isLoanConfirmed, setLoanConfirmed] = useState(false);
  
  const toggleLoanModal = () => {
    setLoanModalVisible(!isLoanModalVisible);
  };

  const handleDevolution = async() => {
    const response = await doPut(`prestamos/returnBook/${id}`);
    console.log("Loan canceled");
    setLoanConfirmed(true);
    toggleLoanModal();
    Toast.show({
      type: "success",
      text1: "Devolución de libro",
      text2:
        "Se ha devuelto el libro",
      visibilityTime: 3000,
      autoHide: true,
      position: "bottom",
      onHide: () => {},
    });
    navigation.navigate("LoanS");
  }

  return (
    <TouchableOpacity 
    onPress={toggleLoanModal}
    style={styles.btn}>
      <View style={styles.containerTitle}>
        <Text style={styles.nameStyle}>{book}</Text>
        <Text style={styles.autorStyle}>{author}</Text>
        <Text style={styles.emailStyle}>{email}</Text>
      </View>
      <View style={{...styles.containerTitle, marginTop: 15}}>
        <Text style={styles.back}>Días en préstamo</Text>
        <Text 
          style={{ ...styles.daysback, color: daysPrested > 3 ? 'red' : 'white' }}  
        >{daysPrested}</Text>
        {daysPrested > 3 && <Text style={styles.multa}>Multa: ${fine}</Text>}
      </View>
      <DevolutionLoanModal
        isVisible={isLoanModalVisible}
        onClose={toggleLoanModal}
        onConfirm={handleDevolution}
        book={book}
        email={email}
        fine={fine}
      />
    </TouchableOpacity>
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
    height: 100,
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
  back: {
    width: 100,
    color: colors.getContrastColor(colors.COLOR_PRIMARY),
    fontWeight: "bold",
    marginRight: -37,
    marginTop: -27,
    fontSize: colors.FONT_SIZE_SMALL,
  },
  daysback: {
    color: colors.getContrastColor(colors.COLOR_PRIMARY),
    fontWeight: "bold",
    textAlign: "center",
    fontSize: colors.FONT_SIZE_NORMAL,
  },
  multa: {
    color: colors.getContrastColor(colors.COLOR_PRIMARY),
    fontWeight: "bold",
    textAlign: "center",
    fontSize: colors.FONT_SIZE_SMALL,
  }
});
