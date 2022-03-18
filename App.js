import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { useState } from 'react';

import {colors, CLEAR, ENTER } from './src/constants';
import  Keyboard from './src/components/Keyboard';


const number_of_tries = 4

const copyArray = (arr) => {
  return [...arr.map((rows) => [...rows])];
}

export default function App() {
  const word = 'hello';
  const letters = word.split(''); //returns an array of characters

  const [rows, setRows] = useState(
    new Array(number_of_tries).fill(new Array(letters.length).fill(''))
    );
  
  const [curRow, setCurRow] = useState(0);
  const [curCol, setCurCol] = useState(0);
  
  const onKeyPressed = (key) => {
    const updatedRows = copyArray(rows);
    
    if (key === CLEAR) {
      const prevCol = curCol -1;
      if (prevCol >= 0) {
      updatedRows[curRow][prevCol] = '';
      setRows(updatedRows);
      setCurCol(prevCol);
      }
      return;
    }
    if (key === ENTER) {
      if (curCol === rows[0].length) {
        setCurRow(curRow + 1);
        setCurCol(0);
      }
      return;
    }
    if (curCol < rows[0].length) {
    updatedRows[curRow][curCol] = key;
    setRows(updatedRows);
    setCurCol(curCol + 1);
    }
  };

  const isCellActive = (row, col) => {
    return row === curRow && col === curCol;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>w o r d l e</Text>
      
      <ScrollView style={styles.map}>
        {rows.map((row, i) => (
          <View key={`row-${i}`} style={styles.row}>
            {row.map((cell, j) => ( //for each letter, render a cell 
              <View
                key={`cell-${i}-${j}`}
                style={[
                  styles.cell,
                  {
                    borderColor: isCellActive(i,j)
                      ? colors.lightgrey
                      : colors.darkgrey,
                  },
                ]} 
              >
              <Text style={styles.cellText}>{cell.toUpperCase()}</Text>
            </View>
          ))} 
          </View>
        ))}
      </ScrollView>

      <Keyboard onKeyPressed={onKeyPressed} /> 
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
    height: 100,
    marginVertical: 20
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
