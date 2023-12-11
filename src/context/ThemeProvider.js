import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from '../utils/colors';

// Exporta el contexto directamente
export const ThemeContext = createContext();

// Exporta el componente ThemeProvider que contiene el Provider del contexto
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const getTheme = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem('theme');
        if (savedTheme) {
          setTheme(savedTheme);
        }
      } catch (error) {
        console.log('Error loading theme:', error);
      }
    };
    getTheme();
  }, []);

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
    colors.COLOR_FORM_BACKGROUND = newTheme === 'light' ? '#FFFFFF' : '#000000';
    colors.COLOR_SECONDARY = newTheme === 'light' ? '#77BA99' : '#050505';
    AsyncStorage.setItem('theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
