import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import colors from "../utils/colors";
import { Input, Icon, Button } from "react-native-elements";
import UsersLoans from "../components/common/UsersLoans";
import UsersLoansBack from "../components/common/UserLoansBack";
import { doGet } from "../config/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function BooksInLoanScreen() {

  const [filteredLoans, setFilteredLoans] = useState([]);
  let [loans, setLoans] = useState([]);

  let [loansHistory, setLoansHistory] = useState([]);


  useEffect(() => {
    const getLoans = async () => {
      try {
        const userString = await AsyncStorage.getItem("user");
        const user = JSON.parse(userString);
        const idUser = user.data.idUser;
        const response = await doGet(`/prestamos/getByUser/${idUser}`);
        const filteredLoansI = response.data.data.filter((loan) => loan.status === true && loan.returnStatus === false);
        setLoans(filteredLoansI);
      } catch (error) {
        console.error("Error al obtener préstamos:", error);
      }
    };
    getLoans();
  }, [loans]);

  useEffect(() => {
    const getLoansH = async () => {
      try {
        const userString = await AsyncStorage.getItem("user");
        const user = JSON.parse(userString);
        const idUser = user.data.idUser;
        const response = await doGet(`/prestamos/getByUser/${idUser}`);
        const filteredLoansI = response.data.data.filter((loan) => loan.returnStatus === true);
        setLoansHistory(filteredLoansI);
      } catch (error) {
        console.error("Error al historial préstamos:", error);
      }
    };
    getLoansH();
  }, [loansHistory]);

  useEffect(() => {
    setFilteredLoans(loans);
  }, [loans]);

  const searchFilterFunction = (text) => {
    if (text) {
      const newData = loans.filter(function (item) {
        const itemData = item.nombre
          ? item.nombre.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        const autor = item.autor ? item.autor.toUpperCase() : "".toUpperCase();
        const nombre = item.nombre
          ? item.nombre.toUpperCase()
          : "".toUpperCase();

        return (
          itemData.indexOf(textData) > -1 ||
          autor.indexOf(textData) > -1 ||
          nombre.indexOf(textData) > -1
        );
      });
      setFilteredLoans(newData);
    } else {
      setFilteredLoans(loans);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Prestamos</Text>
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
          placeholderTextColor={colors.getContrastColor(
            colors.COLOR_FORM_BACKGROUND
          )}
          style={{
            color: colors.getContrastColor(colors.COLOR_FORM_BACKGROUND),
          }}
          onChangeText={(text) => searchFilterFunction(text)}
        ></Input>
      </View>
      <ScrollView>
        <Text style={styles.title}>Préstamos activos</Text>
        <View style={{...styles.loansContainer, height:200}}>
          {filteredLoans.map((loan, key) => (
            <UsersLoans
            book={loan.idBook.name}
            author={loan.idBook.author}
            genre={loan.idBook.genre}
            days={loan.dateInit}
            />
          ))}
        </View>
        <Text style={styles.title}>Historial de Préstamos</Text>
        <View style={styles.loansContainer}>
          {loansHistory.map((loan, key) => (
            <UsersLoansBack
            book={loan.idBook.name}
            author={loan.idBook.author}
            genre={loan.idBook.genre}
            days={loan.dateInit}
            />
          ))}
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
    padding: 5,
    width: 300,
    height: 60,
    color: colors.getContrastColor(colors.COLOR_FORM_BACKGROUND),
    borderRadius: 15,
    backgroundColor: colors.COLOR_FORM_BACKGROUND,
    marginBottom: 20,
    marginTop: 10,
    flexDirection: "row",
  },
});
