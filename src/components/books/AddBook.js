import React from "react";
import { StyleSheet, Text, View, ImageBackground} from "react-native";
import colors from "../../utils/colors";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Input, Icon, Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function AddBook() {

  const navigation = useNavigation();

    return (
        <KeyboardAwareScrollView>
            <ImageBackground
            source={require("../../../assets/images/libreria.jpg")}
            style={styles.background}
            >
              {/* Icono de regresar */}
            <View style={styles.titleBar}>
            <Icon
              type="material-community"
              name="arrow-left"
              size={30}
              color={"white"}
              containerStyle={styles.btnBack}
              onPress={() => navigation.goBack()}
            />
            <Text style={styles.logoTitle}>Añadir libro</Text>
            </View>
            <View style={styles.containerForm}>
                
                <Text style={styles.text}>Nombre</Text>
                <Input
                style={styles.input}
                placeholder="Titulo"
                placeholderTextColor={colors.getContrastColor(colors.COLOR_FORM_BACKGROUND)}
                />
                <Text style={styles.text}>Autor</Text>
                <Input
                style={styles.input}
                placeholder="Autor"
                placeholderTextColor={colors.getContrastColor(colors.COLOR_FORM_BACKGROUND)}
                />
                <Text style={styles.text}>Género</Text> 
                <Input
                style={styles.input}
                placeholder="Género"
                placeholderTextColor={colors.getContrastColor(colors.COLOR_FORM_BACKGROUND)}
                />
                <Text style={styles.text}>Descripción</Text>
                <Input
                style={styles.input}
                placeholder="Descripción"
                placeholderTextColor={colors.getContrastColor(colors.COLOR_FORM_BACKGROUND)}
                />
                <Button
                  title={"Añadir libro"}
                  titleStyle={{color: colors.getContrastColor(colors.COLOR_PRIMARY)}}
                  buttonStyle={styles.btnAddBook}
                />
            </View>
            </ImageBackground>
            
        </KeyboardAwareScrollView>
    );
}

const styles = StyleSheet.create({

      text:{
        fontWeight: "bold",
        color: colors.getContrastColor(colors.COLOR_FORM_BACKGROUND),
        textAlign: "left",
        alignSelf: "flex-start",
        fontFamily: "Roboto",
        fontSize: colors.FONT_SIZE_SMALL,
      },
      background: {
        resizeMode: "cover", 
        alignItems: "center",
        height: 800
      },
      logoTitle: {
        fontSize: colors.FONT_SIZE_LARGE,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        alignSelf: "center",
        fontFamily: "Roboto",
        marginTop: 20,
      },
      containerForm: {
        height: 500,
        width: "80%",
        backgroundColor: colors.COLOR_FORM_BACKGROUND,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        padding: 20,
        display: "flex",
        alignItems: "center",
        marginTop: 20,
      },
      btnAddBook:{
        width: 250,
        height: 60,
        backgroundColor: colors.COLOR_PRIMARY,
        borderRadius: 30,
        justifyContent: "center",
        alignContent: "center",
        marginBottom: 20,
      },
      titleBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 24,
        marginHorizontal: 16,
      },
});
