import React from "react";
import { StyleSheet, Text, View, ImageBackground} from "react-native";
import colors from "../../utils/colors";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Input, Icon, Button } from "react-native-elements";

export default function AddBook() {
    return (
        <KeyboardAwareScrollView>
            <ImageBackground
            source={require("../../../assets/images/libreria.jpg")}
            style={styles.background}
            >
            <Text style={styles.logoTitle}>Añadir libro</Text>
            <View style={styles.containerForm}>
                
                <Text style={styles.text}>Nombre</Text>
                <Input
                style={styles.input}
                placeholder="Titulo"
                placeholderTextColor={colors.PRIMARY_COLOR}
                />
                <Text style={styles.text}>Autor</Text>
                <Input
                style={styles.input}
                placeholder="Autor"
                placeholderTextColor={colors.PRIMARY_COLOR}
                />
                <Text style={styles.text}>ISBN</Text>
                <Input
                style={styles.input}
                placeholder="ISBN"
                placeholderTextColor={colors.PRIMARY_COLOR}
                />
                <Text style={styles.text}>Género</Text> 
                <Input
                style={styles.input}
                placeholder="Género"
                placeholderTextColor={colors.PRIMARY_COLOR}
                />
            </View>
            </ImageBackground>
            
        </KeyboardAwareScrollView>
    );
}

const styles = StyleSheet.create({
    containerLogo: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 150,
      },
      background: {
        resizeMode: "cover", 
        alignItems: "center",
        height: 500
      },
      image: {
        width: 70,
        height: 70,
      },
      logoTitle: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        alignSelf: "center",
        fontFamily: "Roboto",
        marginTop: 20,
      },
      containerForm: {
        height: 400,
        width: "80%",
        backgroundColor: "white",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        padding: 20,
      },
});
