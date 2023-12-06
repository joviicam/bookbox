import React from "react";
import { View, Text, StyleSheet} from "react-native";
import colors from "../../utils/colors";

export default function User(props) {

    const { nombre, apellido, email } = props;

    return (
        <View style={styles.btn}>
            <View style={styles.containerTitle}>
                <Text style={styles.nameStyle}>{nombre} {apellido}</Text>
                <Text style={styles.email}>{email}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    btn:{ 
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        margin: 5,
        backgroundColor: colors.COLOR_PRIMARY,
        borderRadius: 10,
        width: 250,
        height: 80, 
    },
    containerTitle: {
        flexDirection: "column",
    },
    nameStyle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "white",
        marginBottom: 5,
    },
    lastname: {
        fontSize: 12,
        color: "white",
        marginBottom: 5,
    },
    email: {
        fontSize: 10,
        fontWeight: "bold",
        color: "white",
        marginBottom: 5,
    },
    
})
