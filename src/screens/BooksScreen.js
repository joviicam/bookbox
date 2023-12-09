import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View, ScrollView} from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import colors from "../utils/colors";
import Book from "../components/common/Book";
import { useNavigation } from '@react-navigation/native';

export default function BooksScreen() {

  const [filteredBooks, setFilteredBooks] = useState([]);
  let [books, setBooks] = useState([]);

  const navigation = useNavigation();


  useEffect(() => {
    const booksArray = [
      {
        key: "1",
        nombre: "El principito",
        autor: "Antoine de Saint-Exupéry",
        genero: "Ficción",
      },
      {
        key: "2",
        nombre: "Harry Potter y la piedra filosofal",
        autor: "JK Rowling",
        genero: "Ficción",
      },
      {
        key: "3",
        nombre: "Harry Potter y la cámara secreta",
        autor: "JK Rowling",
        genero: "Ficción",
      },
      {
        key: "4",
        nombre: "Harry Potter y el prisionero de Azkaban",
        autor: "JK Rowling",
        genero: "Ficción",
      },
      {
        key: "5",
        nombre: "Harry Potter y el cáliz de fuego",
        autor: "JK Rowling",
        genero: "Ficción",
      },
      {
        key: "6",
        nombre: "Harry Potter y la orden del fénix",
        autor: "JK Rowling",
        genero: "Ficción",
      },
      {
        key: "7",
        nombre: "Harry Potter y el misterio del príncipe",
        autor: "JK Rowling",
        genero: "Ficción",
      },
    ];
    setBooks(booksArray);
  }, []);

  useEffect(() => {
    setFilteredBooks(books);
  }, [books]);

  const searchFilterFunction = (text) => {
    if (text) {
      const newData = books.filter((item) => {
        const itemData = item.nombre
          ? item.nombre.toUpperCase()
          : "".toUpperCase();
        const autorData = item.autor ? item.autor.toString() : "";
        const autor = autorData.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1 || autor.indexOf(textData) > -1;
      });
      setFilteredBooks(newData);
    } else {
      setFilteredBooks(books);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Libros</Text>
      <View style={styles.SearchInput}>
        <Input
          rightIcon={
            <Icon type="material-community" name="magnify" size={30} color={colors.getContrastColor(colors.COLOR_FORM_BACKGROUND)} />
          }
          placeholder="Buscar"
          placeholderTextColor={colors.getContrastColor(colors.COLOR_FORM_BACKGROUND)}
          onChangeText={(text) => searchFilterFunction(text)}
        ></Input>
        <Button
          buttonStyle={styles.btnAdd}
          onPress={() => navigation.navigate('AddBookS')}
          icon={<Icon type="material-community" name="plus" size={30} color={colors.getContrastColor(colors.COLOR_PRIMARY)} />}
        />
        
      </View>
      <ScrollView>
          <View>
          {filteredBooks.map((book) => {
            return (
              <Book
                key={book.nombre}
                nombre={book.nombre}
                autor={book.autor}
                genero={book.genero}
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
    backgroundColor: colors.COLOR_SECONDARY,
    alignItems: "center",
    justifyContent: "center"
  },
  title:{
    fontSize: colors.FONT_SIZE_TITLE,
    fontWeight: "bold",
    color: colors.getContrastColor(colors.COLOR_SECONDARY),
    fontFamily: "Roboto",
  },
  SearchInput: {
    padding: 5,
    width: 200,
    height: 60,
    color: colors.getContrastColor(colors.COLOR_FORM_BACKGROUND),
    borderRadius: 15,
    backgroundColor: colors.COLOR_FORM_BACKGROUND,
    marginBottom: 20,
    marginTop: 10,
    flexDirection: "row",
  },
  btnAdd:{
    marginLeft: 20,
    backgroundColor: colors.COLOR_PRIMARY,
    borderRadius: 15,
    padding: 5,
  },
});
