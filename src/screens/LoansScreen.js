import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import colors from "../utils/colors";
import { Input, Icon, Button } from "react-native-elements";
import LoansHistory from "../components/common/LoansHistory";
import { doGet } from "../config/axios";

export default function LoansScreen() {
  const [filteredLoans, setFilteredLoans] = useState([]);

  let [loans, setLoans] = useState([]);

  useEffect(() => {
    const getLoans = async () => {
      try {
        const response = await doGet("/prestamos/getAll");
        const filteredLoans = response.data.data.filter((loan) => loan.status === true);
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
        const itemData = item.nombre
          ? item.nombre.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        const email = item.email ? item.email.toUpperCase() : "".toUpperCase();
        const autor = item.autor ? item.autor.toUpperCase() : "".toUpperCase();
        return (
          itemData.indexOf(textData) > -1 ||
          email.indexOf(textData) > -1 ||
          autor.indexOf(textData) > -1
        );
      });
      setFilteredLoans(newData);
    } else {
      setFilteredLoans(loans);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Préstamos</Text>
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
        <View style={styles.loansContainer}>
          {filteredLoans.map((loan) => (
            <LoansHistory
              book={loan.idBook.name}
              author={loan.idBook.author}
              email={loan.idUser.email}
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
