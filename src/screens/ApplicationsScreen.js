import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Input, Icon } from "react-native-elements";
import colors from "../utils/colors";
import Loans from "../components/common/Loans";
import { doGet } from "../config/axios";

export default function ApplicationsScreen() {
  const [filteredLoans, setFilteredLoans] = useState([]);
  let [loans, setLoans] = useState([]);

  useEffect(() => {
    const getLoans = async () => {
      try {
        const response = await doGet("/prestamos/getAll");
        const filteredLoans = response.data.data.filter((loan) => loan.status === false);
        setLoans(filteredLoans);
      } catch (error) {
        console.error("Error al obtener préstamos:", error);
      }
    };
    getLoans();
  }, [loans]);


  useEffect(() => {
    setFilteredLoans(loans);
  }, [loans]);

  const searchFilterFunction = (text) => {
    if (text) {
      const newData = loans.filter(function (item) {
        const book =
          item.idBook && item.idBook.name
            ? item.idBook.name.toLowerCase()
            : "";
        const textData = text.toLowerCase();
        return book.includes(textData);
      });
      setFilteredLoans(newData);
    } else {
      setFilteredLoans(loans);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Solicitudes de libros</Text>
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
          style={{ color: colors.getContrastColor(colors.COLOR_FORM_BACKGROUND) }}
          onChangeText={(text) => searchFilterFunction(text)}
        />
      </View>
      <ScrollView>
        <View>
          {filteredLoans.map((loan, key) => (
            <Loans
              id={loan.id}
              book={loan.idBook.name}
              author={loan.idBook.author}
              email={loan.idUser.email}
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
    textAlign: "center",
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
