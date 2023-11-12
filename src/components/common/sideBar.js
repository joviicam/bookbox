import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function SideBar() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.sidebarItem}>
        <Text style={styles.sidebarText}>Preferencias</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.sidebarItem}>
        <Text style={styles.sidebarText}>Configuración</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.sidebarItem}>
        <Text style={styles.sidebarText}>Modo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    position: "absolute",
    height: 200,
    width: 200,
    top: 80, // Adjust the top position as needed
    left: 0,
    zIndex: 1,
    elevation: 5,
  },
  sidebarItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  sidebarText: {
    fontSize: 16,
  },
});
