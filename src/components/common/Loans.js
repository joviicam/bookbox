import React from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { Icon } from "react-native-elements";
import colors from "../../utils/colors";

import Toast from "react-native-toast-message";


export default function Loans(props){

    const {nombre, autor, email} = props;
    //cuando se presiona el boton de confirmar prestamo lo guarda en un array que se mandara a otra pantalla
    //cuando se presiona el boton de cancelar prestamo lo elimina del array

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
    }
    
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
    }


    return(
        <View style={styles.btn}>
            <View style={styles.containerTitle}> 
                    <Text style={styles.nameStyle}>{nombre}</Text>
                    <Text style={styles.autorStyle}>{autor}</Text>
                    <Text style={styles.emailStyle}>{email}</Text>
            </View>
            <View 
                style={styles.btnStatus}
            >
                <TouchableOpacity
                onPress={handleLoanCancel}
                >
                <Icon
                    type="material-community"
                    size={30}
                    color="white"
                    name={"bookmark-remove"}
                />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={handleLoanConfirm}
            >
                <Icon
                    type="material-community"
                    size={30}
                    color="white"
                    name={"bookmark-check"}
                />
            </TouchableOpacity>
            </View>
        </View>
    )
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
        width: 320,
        height: 80,
    },
    containerTitle: {
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
    emailStyle: {
        fontSize: 10,
        color: "white",
        marginBottom: 5,
        fontWeight: "bold",
    },
    btnStatus: {
        display: "flex",
        flexDirection: "row",
    }
});