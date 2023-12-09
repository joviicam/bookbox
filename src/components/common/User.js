import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../../utils/colors";
import { useNavigation } from "@react-navigation/native";

export default function User(props) {
  const {
    user: { fullName, email },
  } = props;
  const { user } = props;

  const navigation = useNavigation();

  const goToUserDetails = () => {
    navigation.navigate("UserDetailsS", { user: user });
  };

  return (
    <TouchableOpacity onPress={goToUserDetails}>
      <View style={styles.btn}>
        <View style={styles.containerTitle}>
          <Text style={styles.nameStyle}>{fullName}</Text>
          <Text style={styles.email}>{email}</Text>
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
    fontSize: colors.FONT_SIZE_NORMAL,
    fontWeight: "bold",
    color: colors.getContrastColor(colors.COLOR_PRIMARY),
    marginBottom: 5,
  },
  email: {
    fontSize: colors.FONT_SIZE_INFO,
    fontWeight: "bold",
    color: colors.getContrastColor(colors.COLOR_PRIMARY),
    marginBottom: 5,
  },
});
