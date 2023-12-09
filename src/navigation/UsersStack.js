import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserDetailScreen from '../screens/UserDetailScreen';
import Header from '../components/common/Header';

const Stack = createNativeStackNavigator();

export default function UsersStack() {
  return (
        <Stack.Screen
          name="UserDetailsS"
          component={UserDetailScreen}
          options={{ headerShown: false }}
        />
  )
}

const styles = StyleSheet.create({})