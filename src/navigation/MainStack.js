import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import LoginScreen from "../screens/LoginScreen";
import IndexScreen from "../screens/IndexScreen";
import BooksScreen from "../screens/BooksScreen";
import MapScreen from "../screens/MapScreen";
import UsersScreen from "../screens/UsersScreen";
import LoansScreen from "../screens/LoansScreen";
import ApplicationsScreen from "../screens/ApplicationsScreen";
import BooksInLoanScreen from "../screens/BooksInLoanScreen";
import PreferencesScreen from "../screens/PreferencesScreen";
import ConfigurationScreen from "../screens/ConfigurationScreen";
import Header from "../components/common/Header";
import AddBook from "../components/books/AddBook";
import UserDetailScreen from "../screens/UserDetailScreen";
import colors from "../utils/colors";
import BookDetailScreen from "../screens/BookDetailScreen";
import HeaderForConfig from "../components/common/HeaderForConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

//import { createDrawerNavigator } from "@react-navigation/drawer";

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();
//const Drawer = createDrawerNavigator();

function MainStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginS" component={LoginScreen} />
        <Stack.Screen
          name="MainTabs"
          component={MainTabs}
          options={{ headerShown: true, header: () => <Header /> }}
        />
        <Stack.Screen
          name="ConfigurationS"
          component={ConfigurationScreen}
          options={{ headerShown: true, header: () => <HeaderForConfig /> }}
        />
        <Stack.Screen
          name="PreferencesS"
          component={PreferencesScreen}
          options={{ headerShown: true, header: () => <Header /> }}
        />
        <Stack.Screen
          name="AddBookS"
          component={AddBook}
          options={{ headerShown: true, header: () => <Header /> }}
        />
        <Stack.Screen
          name="UserDetailsS"
          component={UserDetailScreen}
          options={{ headerShown: true, header: () => <Header /> }}
        />
        <Stack.Screen
          name="BookDetailS"
          component={BookDetailScreen}
          options={{ headerShown: true, header: () => <Header /> }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MainTabs() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      const userData = await AsyncStorage.getItem("user");
      setUser(JSON.parse(userData));
      console.log("ayuda por favor");
      console.log(JSON.parse(userData));
    };
    getUserData();
  }, []);

  // Obtener el correo y contraseña guardados en el storage
  useEffect(() => {
    const getEmailData = async () => {
      const emailData = await AsyncStorage.getItem("email");
      setEmail(emailData);
    };
    getEmailData();
  }, []);

  useEffect(() => {
    const getPasswordData = async () => {
      const passwordData = await AsyncStorage.getItem("password");
      setPassword(passwordData);
    };
    getPasswordData();
  }, []);

  console.log(user);

  if (user && user.data.role === "cliente") {
    return (
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: colors.getContrastColor(
            colors.COLOR_FORM_BACKGROUND
          ),
          tabBarInactiveTintColor: "gray",
          tabBarIcon: ({ color, size }) => showIcons(route, color, size),
          headerShown: false,
          tabBarStyle: {
            backgroundColor: colors.COLOR_FORM_BACKGROUND,
          },
        })}
      >
        <Tabs.Screen
          name="BooksInLoanS"
          component={BooksInLoanScreen}
          options={{ title: "" }}
        />
        <Tabs.Screen
          name="IndexS"
          component={IndexScreen}
          options={{ title: "" }}
        />
        <Tabs.Screen
          name="MapS"
          component={MapScreen}
          options={{ title: "" }}
        />
      </Tabs.Navigator>
    );
  } else {
    return (
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: colors.getContrastColor(
            colors.COLOR_FORM_BACKGROUND
          ),
          tabBarInactiveTintColor: "gray",
          tabBarIcon: ({ color, size }) => showIcons(route, color, size),
          headerShown: false,
          tabBarStyle: {
            backgroundColor: colors.COLOR_FORM_BACKGROUND,
          },
        })}
      >
        <Tabs.Screen
          name="BooksS"
          component={BooksScreen}
          options={{ title: "Libros" }}
        />
        <Tabs.Screen
          name="UsersS"
          component={UsersScreen}
          options={{ title: "Usuarios" }}
        />
        <Tabs.Screen
          name="ApplicationsS"
          component={ApplicationsScreen}
          options={{ title: "Solicitudes" }}
        />
        <Tabs.Screen
          name="LoanS"
          component={LoansScreen}
          options={{ title: "Prestamos" }}
        />
        {/*         <Tabs.Screen name="MainDrawer" component={MyDrawer} />
         */}
      </Tabs.Navigator>
    );
  }
}

function showIcons(route, color, size) {
  let icono;
  if (route.name === "IndexS") {
    icono = "home";
  } else if (route.name === "BooksS") {
    icono = "bookshelf";
  } else if (route.name === "MapS") {
    icono = "map";
  } else if (route.name === "UsersS") {
    icono = "account-group";
  } else if (route.name === "LoanS") {
    icono = "book-account";
  } else if (route.name === "ApplicationsS") {
    icono = "hand-back-right";
  } else if (route.name === "BooksInLoanS") {
    icono = "book";
  }
  return (
    <Icon type="material-community" name={icono} color={color} size={size} />
  );
}

/* function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="ConfigurationS" component={ConfigurationScreen} />
      <Drawer.Screen name="PreferencesS" component={PreferencesScreen} />
    </Drawer.Navigator>
  );
} */

export default MainStack;
