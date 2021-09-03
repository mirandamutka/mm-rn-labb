import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import DisplayDie from './components/DisplayDieComponent';
import HistoryLog from './components/HistoryLogComponent';
import RollButton from './components/RollButtonComponent';
import SidesButton from './components/SidesButtonComponent';

export default function App() {
  const [dieNumber, setDieNumber] = useState(null);
  const [sideNumber, setSideNumber] = useState(null);
  const [rolls, setRolls] = useState([]);

  const getSides = (sideNumber) => {
    setSideNumber(sideNumber);
    setRolls((rolls) => []);
    setDieNumber();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Choose amount of sides:</Text>
      <View style={styles.sidesContainer}>
        <SidesButton 
          getSides={() => getSides(4)}
          amountOfSides={4}
        />
        <SidesButton 
          getSides={() => getSides(6)}
          amountOfSides={6}
        />
        <SidesButton 
          getSides={() => getSides(8)}
          amountOfSides={8}
        />
        <SidesButton 
          getSides={() => getSides(10)}
          amountOfSides={10}
        />
        <SidesButton 
          getSides={() => getSides(12)}
          amountOfSides={12}
        />
      </View>
      <View style={styles.logBox}>
        {sideNumber ? <DisplayDie sideNumber={sideNumber} /> : null}
        <Text style={styles.dieText}>{dieNumber}</Text>
      </View>

      {sideNumber ? 
        <RollButton
          setDieNumber={setDieNumber}
          sideNumber={sideNumber}
          setRolls={setRolls}
          dieNumber={dieNumber}
       /> 
       : null}
      {sideNumber ? <HistoryLog rolls={rolls} /> : null}
      
      
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sidesContainer: {
    flexDirection: 'row' 
  },
  headerText: {
    fontSize: 'large'
  },
  amountText: {
    padding: 3,
    fontSize: 20,
    fontWeight: 'bold'
  },
  dieImg: {
    height: 200,
    width: 200,
    justifyContent: 'center'
  },
  dieText: {
    position: 'absolute',
    top: '45%',
    left: '45%',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white'
  }
});
