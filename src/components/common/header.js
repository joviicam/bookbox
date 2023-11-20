import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import colors from "../../utils/colors";
import { useNavigation } from "@react-navigation/native";

export default function Header() {
  const navigation = useNavigation();

  const goToConfig = () => {
    navigation.navigate("ConfigurationS");
  };

  return (
    <View style={styles.header}>
      <View style={styles.containerLogo}>
        <Image
          style={styles.image}
          source={require("../../../assets/images/logo.png")}
        />
        <Text style={styles.logoTitle}>Librería {"\n"}BookBox</Text>
      </View>
      <TouchableOpacity onPress={goToConfig}>
        <Icon
          name="cog"
          type="material-community"
          color={colors.COLOR_PRIMARY}
          size={40}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#77BA99",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between", // Align items horizontally
    paddingTop: 30,
    alignItems: "center",
  },
  containerLogo: {
    flexDirection: "row",
    marginLeft: 90,
    alignItems: "center",
  },
  logoTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    fontFamily: "Roboto",
    marginLeft: 10,
  },
  image: {
    width: 60,
    height: 60,
  },
  icon: {
    marginTop: 10,
    marginRight: 10,
  },
});
