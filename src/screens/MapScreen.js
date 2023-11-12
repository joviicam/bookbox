import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function MapScreen() {
  const [mapRegion, setMapRegion] = useState({
    latitude: 19.3512,
    longitude: -99.0566,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={mapRegion}
        onRegionChangeComplete={(region) => setMapRegion(region)}
      >
        <Marker
          coordinate={{
            latitude: 19.3512,
            longitude: -99.0566,
          }}
          title={"Av. 2 Pte. 52, Chinam Pac de Juárez, Iztapalapa"}
          description={"Ciudad de México, CDMX"}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
