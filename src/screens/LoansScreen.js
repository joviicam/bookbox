import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import colors from "../utils/colors";
import { Input, Icon, Button } from "react-native-elements";
import LoansHistory from "../components/common/LoansHistory";

export default function LoansScreen() {

  const [filteredLoans, setFilteredLoans] = useState([]);

  let [loans, setLoans] = useState([]);

  useEffect(() => {
    const loansArray = [
      {
        key: "1",
        nombre: "El principito",
        autor: "Antoine de Saint-Exupéry",
        email: "puchis@gmail.com",
        days: "5",
      },
      {
        key: "2",
        nombre: "Harry Potter y la piedra filosofal",
        autor: "JK Rowling",
        email: "yahir@gmail.com",
        days: "5",
      },
      {
        key: "3",
        nombre: "Cien años de soledad",
        autor: "Gabriel García Márquez",
        email: "example@gmail.com",
        days: "5",
      },
      {
        key: "4",
        nombre: "1984",
        autor: "George Orwell",
        email: "libro1984@gmail.com",
        days: "5",
      },
      {
        key: "5",
        nombre: "Orgullo y prejuicio",
        autor: "Jane Austen",
        email: "janeausten@gmail.com",
        days: "5",
      },
      {
        key: "6",
        nombre: "El diario de Ana Frank",
        autor: "Ana Frank",
        email: "mike@gmail.com",
        days: "5",
      },
    ];
    setLoans(loansArray);
  }, []);

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
        return itemData.indexOf(textData) > -1;
      });
      setFilteredLoans(newData);
    } else {
      setFilteredLoans(loans);
    }
  }


  return (
    <View style={styles.container}>
        <Text style={styles.title}>Prestamos</Text>
        <View style={styles.SearchInput}>
          <Input
            rightIcon={
              <Icon type="material-community" name="magnify" size={30} color={colors.getContrastColor(colors.COLOR_FORM_BACKGROUND)} />
            }
            placeholder="Buscar"
            placeholderTextColor={colors.getContrastColor(colors.COLOR_FORM_BACKGROUND)}
            style={{ color: colors.getContrastColor(colors.COLOR_FORM_BACKGROUND)}}
            onChangeText={(text) => searchFilterFunction(text)}
          ></Input>
        </View>
        <ScrollView>
        <View style={styles.loansContainer}>
          {filteredLoans.map((loan) => (
            <LoansHistory
              key={loan.key}
              nombre={loan.nombre}
              autor={loan.autor}
              email={loan.email}
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
    justifyContent: "center"
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
    color: colors.getContrastColor(colors.COLOR_FORM_BACKGROUND),
    borderRadius: 15,
    backgroundColor: colors.COLOR_FORM_BACKGROUND,
    marginBottom: 20,
    marginTop: 10,
    flexDirection: "row",
  },
});
