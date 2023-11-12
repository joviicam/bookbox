import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import colors from "../../utils/colors";
import SideBar from "./sideBar";

export default function Header() {
  const [showSideBar, setShowSideBar] = useState(true);

  const changeSideBar = () => {
    setShowSideBar(!showSideBar);
  };
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={changeSideBar}>
        <Icon
          name="menu"
          type="material-community"
          color={colors.COLOR_PRIMARY}
          size={40}
          style={{
            marginLeft: 5,
            marginRight: 52,
            alignSelf: "center",
            marginTop: 25,
          }}
        />
      </TouchableOpacity>
      <View style={styles.containerLogo}>
        <Image
          style={styles.image}
          source={require("../../../assets/images/logo.png")}
        />
        <Text style={styles.logoTitle}>Librería {"\n"}BookBox</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#77BA99",
    padding: 10,
    alignItems: "center",
    width: "100%",
    paddingTop: 15,
    flexDirection: "row",
    alignSelf: "center",
  },
  containerLogo: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 25,
  },
  logoTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    alignSelf: "center",
    fontFamily: "Roboto",
    marginLeft: 10,
  },
  image: {
    width: 60,
    height: 60,
  },
});
