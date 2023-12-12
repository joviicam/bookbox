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
        const filteredLoansI = response.data.data.filter((loan) => loan.status === true);
        setLoans(filteredLoansI);
      } catch (error) {
        console.error("Error al obtener préstamos:", error);
      }
    };
    getLoans();
  }, []);

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
            book={loan.idBook && loan.idBook.name ? loan.idBook.name : 'No Name'}
            author={loan.idBook && loan.idBook.author ? loan.idBook.author : 'No Author'}
            email={loan.idUser ? loan.idUser.email : 'No Email'}
            days={loan.dateInit}
            key={loan.id} // Add a unique key for each loan
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
