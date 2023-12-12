import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import colors from "../utils/colors";
import Book from "../components/common/Book";
import { useNavigation } from "@react-navigation/native";
import { doGet } from "../config/axios";

export default function IndexScreen() {
  const [searchText, setSearchText] = useState("");
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    const getBooks = async () => {
      const response = await doGet("/libros/getByQuantity/0");
      if (response.data && response.data.data) {
        setBooks(response.data.data);
      }
    };
    getBooks();
  }, []);

  useEffect(() => {
    setFilteredBooks(books);
  }, [books]);

  const searchFilterFunction = (text) => {
    if (text) {
      const newData = books.filter((item) => {
        const name = item.name ? item.name.toLowerCase() : "";
        const author = item.author ? item.author.toLowerCase() : "";
        const editorial = item.editorial ? item.editorial.toLowerCase() : "";
        const year = item.year ? item.year.toString() : "";
        const pages = item.pages ? item.pages.toString() : "";
        const genre = item.genre ? item.genre.toLowerCase() : "";
        const quantity = item.quantity ? item.quantity.toString() : "";
        const textData = text.toLowerCase();
        return (
          name.includes(textData) ||
          author.includes(textData) ||
          editorial.includes(textData) ||
          year.includes(textData) ||
          pages.includes(textData) ||
          genre.includes(textData) ||
          quantity.includes(textData)
        );
      });
      setFilteredBooks(newData);
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
            <Icon
              type="material-community"
              name="magnify"
              size={30}
              color={colors.getContrastColor(colors.COLOR_FORM_BACKGROUND)}
            />
          }
          placeholder="Buscar"
          style={{
            color: colors.getContrastColor(colors.COLOR_FORM_BACKGROUND),
          }}
          placeholderTextColor={colors.getContrastColor(
            colors.COLOR_FORM_BACKGROUND
          )}
          onChangeText={(text) => searchFilterFunction(text)}
        ></Input>
      </View>
      <ScrollView>
        <View>
          {filteredBooks.map((book) => {
            return (
              <Book
                key={book.id}
                bookKey={book.id}
                name={book.name}
                author={book.author}
                editorial={book.editorial}
                year={book.year}
                pages={book.pages}
                genre={book.genre}
                quantity={book.quantity}
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
