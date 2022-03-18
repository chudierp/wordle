import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';


import {colors} from './src/constants';
import  Keyboard from './src/components/Keyboard';

const number_of_tries = 4

export default function App() {
  const word = 'hello';
  const letters = word.split(''); //returns an array of characters

  const rows = new Array(number_of_tries).fill(
    new Array(letters.length).fill('a')
  );
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>w o r d l e</Text>
      
      <View style={styles.map}>

        {rows.map((row) => (
          <View style={styles.row}>
            {row.map((cell) => ( //for each letter, render a cell 
            <View style={styles.cell} >
              <Text style={styles.cellText}>{cell.toUpperCase()}</Text>
            </View>
          ))} 
          </View>
        ))}
      </View>

      <Keyboard /> 
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
  },
  map: {
    alignSelf: 'stretch',
    height: 100
  },
  row: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cell: {
    borderWidth: 1,
    borderColor: colors.darkgrey,
    flex: 1,
    aspectRatio: 1,
    margin: 3,
    maxWidth: 70,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cellText: {
    color: colors.lightgrey,
    fontWeight: 'bold',
    fontSize: 48
  }
});
