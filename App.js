import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [dieNumber, setDieNumber] = useState(null);
  const [sideNumber, setSideNumber] = useState(null);

  const getRandomInt = () => {
    setDieNumber(Math.floor(Math.random() * sideNumber) + 1)
  }

  const getSides = (sideNumber) => {
    setSideNumber(sideNumber)
    setDieNumber(null)
  }

  const displayDie = (sideNumber) => {
    switch(sideNumber) {
      case 4:
        return require('./img/4sided.png')
        break;
      case 6:
        return require('./img/6sided.png')
        break;
      case 8:
        return require('./img/8sided.png')
        break;
      case 10:
        return require('./img/10sided.png')
        break;
      case 12:
        return require('./img/12sided.png')
        break;
      default:
        <Text>No image</Text>
    }
  }

  return (
    <View style={styles.container}>
      <Text>Choose amount of sides:</Text>
      <View style={styles.sidesContainer}>
        <Pressable onPress={() => {
          getSides(4)
        }}>
          <Text style={styles.amountText}>4</Text>
        </Pressable>
        <Pressable onPress={() => {
          getSides(6)
        }}>
          <Text style={styles.amountText}>6</Text>
        </Pressable>
        <Pressable onPress={() => {
          getSides(8)
        }}>
          <Text style={styles.amountText}>8</Text>
        </Pressable>
        <Pressable onPress={() => {
          getSides(10)
        }}>
          <Text style={styles.amountText}>10</Text>
        </Pressable>
        <Pressable onPress={() => {
          getSides(12)
        }}>
          <Text style={styles.amountText}>12</Text>
        </Pressable>
      </View>
      <View style={styles.logBox}>
        {sideNumber ? <Image source={displayDie(sideNumber)} style={styles.dieImg} /> : null}
      
        <Text style={styles.dieText}>{dieNumber}</Text>
      </View>
      {sideNumber ? <Pressable onPress={() => {
          getRandomInt()
        }}>
        {({ pressed }) => (
          <Text style={styles.text}>
            {pressed ? 'Die Rolled!' : 'Roll Die!'}
          </Text>
        )}
      </Pressable> : null}
      
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
