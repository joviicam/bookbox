import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import { Input, Icon, Button } from "react-native-elements";
import colors from "../utils/colors";

import User from "../components/common/User";
import { useEffect, useState } from "react";

export default function UsersScreen() {
  const [filteredUsers, setFilteredUsers] = useState([]);

  let [users, setUsers] = useState([]);

  useEffect(() => {
    const usersArray = [
      {
        id: "1",
        fullName: "Puchis Bahena",
        email: "puchis@gmail.com",
        password: "123456",
        idRol: {
          id: "1",
          name: "administrador",
          description: "Un rol mas"
        },
        roleName: "administrador"
      },
      {
        id: "2",
        fullName: "Luis Bahena",
        email: "lusi@gmail.com",
        password: "123456",
        idRol: {
          id: "1",
          name: "administrador",
          description: "Un rol mas"
        },
        roleName: "administrador"
      },
      {
        id: "3",
        fullName: "Poncio Pilato",
        email: "poncio@gmail.com",
        password: "123456",
        idRol: {
          id: "1",
          name: "administrador",
          description: "Un rol mas"
        },
        roleName: "administrador"
      },
      {
        id: "4",
        fullName: "Judas Iscariote",
        email: "judas@gmail.com",
        password: "123456",
        idRol: {
          id: "1",
          name: "administrador",
          description: "Un rol mas"
        },
        roleName: "administrador"
      },
      {
        id: "5",
        fullName: "Pedro Perez",
        email: "pedro@gmail.com",
        password: "123456",
        idRol: {
          id: "1",
          name: "administrador",
          description: "Un rol mas"
        },
        roleName: "administrador"
      },
    ];
    setUsers(usersArray);
  }, []);

  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  const searchFilterFunction = (text) => {
    if (text) {
      const newData = users.filter((item) => {
        const itemData = item.nombre
          ? item.nombre.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
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
            <Icon type="material-community" name="magnify" size={30} color={colors.getContrastColor(colors.COLOR_FORM_BACKGROUND)} />
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
      </View>
      <ScrollView>
        <View style={styles.userContainer}>
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
    fontFamily: "Roboto",
  },
  SearchInput: {
    padding: 5,
    width: 300,
    height: 60,
    borderRadius: 15,
    backgroundColor: colors.COLOR_FORM_BACKGROUND,
    marginBottom: 20,
    marginTop: 10,
    flexDirection: "row",
  },
});
