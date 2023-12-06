import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserDetailScreen from '../screens/UserDetailScreen';
import Header from '../components/common/header';

const Stack = createNativeStackNavigator();

export default function UsersStack() {
  return (
        <Stack.Screen
          name="UserDetailsS"
          component={UserDetailScreen}
          options={{ headerShown: true, header: () => <Header /> }}
        />
  )
}

const styles = StyleSheet.create({})