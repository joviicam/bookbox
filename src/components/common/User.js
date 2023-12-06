import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import colors from "../../utils/colors";
import { useNavigation } from "@react-navigation/native";


export default function User(props) {
  const navigation = useNavigation();
  const { user: {key, nombre, email} } = props;
  const { user } = props; //de prueba

  const changeView = () => {
    //navegar a la pantalla UserDetailScreen
    navigation.navigate("UserDetailsS", { user: user });
    console.log("Holiiii soy " + JSON.stringify(user));
  }; 

  return (
    <TouchableOpacity onPress={changeView}>
      <View style={styles.btn}>
        <View style={styles.containerTitle}>
          <Text style={styles.nameStyle}>{nombre}</Text>
          <Text style={styles.emailStyle}>{email}</Text>
        </View>
      </View>
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
  emailStyle: {
    fontSize: 12,
    color: "white",
    marginBottom: 5,
  },
});
