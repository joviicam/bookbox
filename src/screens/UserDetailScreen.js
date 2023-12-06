import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';

export default function UserDetailScreen() {
  const route = useRoute();
  const { user } = route.params;
  console.log({ROUTE: user});
  return (
    <View>
      <Text>UserDetailScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})