import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import { Input, Icon, Button } from "react-native-elements";
import colors from "../utils/colors";
import { useNavigation } from "@react-navigation/native";
import User from "../components/common/User";
import { useEffect, useState } from "react";
import { doGet } from "../config/axios";

export default function UsersScreen() {
  const [filteredUsers, setFilteredUsers] = useState([]);
  const navigation = useNavigation();
  let [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await doGet("/usuarios/getAll");
      setUsers(response.data.data);
    };
    getUsers();
  }, [users]);

  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  const searchFilterFunction = (text) => {
    if (text) {
      const textData = text.toLowerCase();
      const newData = users.filter((item) => {
        const fullName = item.fullName ? item.fullName.toLowerCase() : "";
        const email = item.email ? item.email.toLowerCase() : "";
        return fullName.includes(textData) || email.includes(textData);
      });
      setFilteredUsers(newData);
    } else {
      setFilteredUsers(users);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Usuarios</Text>
      <View style={styles.SearchInput}>
        <Input
          rightIcon={
            <Icon
              type="material-community"
              name="magnify"
              size={30}
              color={colors.getContrastColor(colors.COLOR_FORM_BACKGROUND)}
            />
          }
          placeholder="Buscar"
          onChangeText={(text) => searchFilterFunction(text)}
          placeholderTextColor={colors.getContrastColor(
            colors.COLOR_FORM_BACKGROUND
          )}
          style={{
            color: colors.getContrastColor(colors.COLOR_FORM_BACKGROUND),
          }}
        ></Input>
        <Button
          buttonStyle={styles.btnAdd}
          onPress={() => navigation.navigate("UserDetailsS")}
          icon={
            <Icon
              type="material-community"
              name="plus"
              size={30}
              color={colors.getContrastColor(colors.COLOR_PRIMARY)}
            />
          }
        />
      </View>
      <ScrollView>
        <View>
          {filteredUsers.map((user) => {
            return <User key={user.id} user={user} />;
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.COLOR_SECONDARY,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: colors.FONT_SIZE_TITLE,
    fontWeight: "bold",
    color: colors.getContrastColor(colors.COLOR_SECONDARY),
  },
  SearchInput: {
    marginLeft: -50,
    padding: 5,
    width: 250,
    height: 60,
    color: colors.getContrastColor(colors.COLOR_FORM_BACKGROUND),
    borderRadius: 15,
    backgroundColor: colors.COLOR_FORM_BACKGROUND,
    marginBottom: 20,
    marginTop: 10,
    flexDirection: "row",
  },
  btnAdd: {
    marginLeft: 15,
    backgroundColor: colors.COLOR_PRIMARY,
    borderRadius: 15,
    marginTop: 5,
    padding: 5,
  },
});
