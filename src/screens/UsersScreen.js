import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import colors from "../utils/colors";
import { Input, Icon } from "react-native-elements";
import { useState, useEffect } from "react";
import User from "../components/common/User";

export default function UsersScreen() {
  const [filteredUsers, setFilteredUsers] = useState([]);
  let [users, setUsers] = useState([]);

  useEffect(() => {
    //Arreglo de libros
    const usersArray = [
      {
        key: 1,
        nombre: "Diego Albabera Fierro",
        email: "diego@gmail.com",
      },
      {
        key: 2,
        nombre: "Yahir Alberto Diaz Gonzalez",
        email: "yahir@gmail.com",
      },
      {
        key: 3,
        nombre: "Brenda Johana Galvez Alvarez",
        email: "johana@gmail.com",
      },
      {
        key: 4,
        nombre: "Fernando Rodriguez Memije",
        email: "fer@gmail.com",
      },
      {
        key: 5,
        nombre: "Jose Miguel Delgado Perez",
        email: "maik@gmail.com",
      },
      {
        key: 6,
        nombre: "Anna Christina Bustos",
        email: "chris@gmail.com",
      },
      {
        key: 7,
        nombre: "Guadalupe Yutzil Fuentes",
        email: "yut@gmail.com",
      },
      {
        key: 8,
        nombre: "Jose Emilio Enriquez Torres",
        email: "emiliane@gmail.com",
      },
    ];
    setUsers(usersArray);
  }, []);

  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  const searchFilterFunction = (text) => {
    if (text) {
      const newData = users.filter((user) => {
        //Buscar por nombre
        const userData = user.nombre
          ? user.nombre.toUpperCase()
          : "".toUpperCase();
        const emailData = user.email ? user.email.toString() : "";
        const email = emailData.toUpperCase();
        const textData = text.toUpperCase();
        return userData.indexOf(textData) > -1 || email.indexOf(textData) > -1;
      });
      setFilteredUsers(newData);
    } else {
      setFilteredUsers(users);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.SearchInput}>
        <Input
          rightIcon={
            <Icon type="material-community" name="magnify" size={30} />
          }
          placeholder="Buscar"
          onChangeText={(text) => searchFilterFunction(text)}
        ></Input>
      </View>
      <View style={styles.titleUsers}>
        <Text style={styles.textTitleUsers}>Usuarios</Text>
      </View>
        <ScrollView>
          {filteredUsers.map((user) => {
            return (
              <User
                key={user.key}
                user={user}
              />
            );
          })}
        </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.GREEN,
    alignItems: "center",
    justifyContent: "center",
  },
  SearchInput: {
    padding: 5,
    width: 300,
    height: 60,
    color: "white",
    borderRadius: 15,
    backgroundColor: "#E5E5E5",
    marginBottom: 10,
    marginTop: 10,
  },
  titleUsers: {
    marginLeft: "30%",
    marginBottom: 10,
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  textTitleUsers: {
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
    fontFamily: "Roboto",
    marginTop: 5,
  },
});