import React from "react";
import { View, Text, StyleSheet} from "react-native";
import colors from "../../utils/colors";


export default function LoansHistory(props) {
    const {nombre, autor, email} = props;

    return(
        <View style={styles.btn}>
            <View style={styles.containerTitle}> 
                    <Text style={styles.nameStyle}>{nombre}</Text>
                    <Text style={styles.autorStyle}>{autor}</Text>
                    <Text style={styles.emailStyle}>{email}</Text>
            </View>
            <View style={styles.containerTitle}>
                <Text style={styles.back}>Dias para devolverlo</Text>
                <Text style={styles.daysback}>5</Text>
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
    },
    back: {
        width: 100,
        color: "white",
        fontWeight: "bold",
        marginRight: -37,
        marginTop: -27,
        fontSize: 12,
    },
    daysback: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    }
});