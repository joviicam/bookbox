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
        key: "1",
        nombre: "Puchis",
        apellido: "Bahena",
        email: "puchis@gmail.com",
      },
      {
        key: "2",
        nombre: "Luis",
        apellido: "Bahena",
        email: "lusi@gmail.com"
      },
      {
        key: "3",
        nombre: "Poncio",
        apellido: "Pilato",
        email: "poncio@gmail.com"
      },
      {
        key: "4",
        nombre: "Judas",
        apellido: "Iscariote",
        email: "judas@gmail.com"
      },
      {
        key: "5",
        nombre: "Pedro",
        apellido: "Perez",
        email: "pedro@gmail.com"
      },
    ];
    setUsers(usersArray);
  }, []);

  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  const searchFilterFunction = (text) => {
    if(text){
      const newData = users.filter((item) => {
        const itemData = item.nombre ? item.nombre.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredUsers(newData);
    }
    else{
      setFilteredUsers(users);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Usuarios</Text>
      <View style={styles.SearchInput}>
        <Input
          rightIcon={<Icon type="material-community" name="magnify" size={30} />}
          placeholder="Buscar"
          onChangeText={(text) => searchFilterFunction(text)}
        ></Input>
      </View>
      <ScrollView>
        <View style={styles.userContainer}>
          {filteredUsers.map((user) => {
            return (
              <User
                key={user.key}
                nombre={user.nombre}
                apellido={user.apellido}
                email={user.email}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.GREEN,
    alignItems: "center",
    justifyContent: "center"
  },
  title:{
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    fontFamily: "Roboto",
  },
  SearchInput: {
    padding: 5,
    width: 300,
    height: 60,
    color: "white",
    borderRadius: 15,
    backgroundColor: "#E5E5E5",
    marginBottom: 20,
    marginTop: 10,
    flexDirection: "row",
  },
});