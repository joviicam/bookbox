import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import colors from "../utils/colors";
import { Input, Icon } from "react-native-elements";
import Book from "../components/common/Book";
import { useState, useEffect } from "react";

export default function IndexScreen() {
  const [filteredBooks, setFilteredBooks] = useState([]);
  let [books, setBooks] = useState([]);

  useEffect(() => {
    //Arreglo de libros
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
        //Buscar por nombre
        const itemData = item.nombre
          ? item.nombre.toUpperCase()
          : "".toUpperCase();
        const autorData = item.autor ? item.autor.toString() : "";
        const autor = autorData.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1 || autor.indexOf(textData) > -1;
      });
      setFilteredBooks(newData);
      console.log(newData);
    } else {
      setFilteredBooks(books);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¿Qué leerás hoy?</Text>
      <View style={styles.SearchInput}>
        <Input
          rightIcon={
            <Icon type="material-community" name="magnify" size={30} />
          }
          placeholder="Buscar"
          onChangeText={(text) => searchFilterFunction(text)}
        ></Input>
      </View>
      <ScrollView>
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
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    fontFamily: "Roboto",
    marginTop: 5,
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
  },
});
