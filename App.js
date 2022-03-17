import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';


import {colors} from './src/constants';
import  Keyboard from './src/components/Keyboard';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>w o r d l e</Text>
      <Keyboard/> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    alignItems: 'center',
    
  },
  title: {
    color: colors.lightgrey,
    fontWeight: 'bold',
  }
});
