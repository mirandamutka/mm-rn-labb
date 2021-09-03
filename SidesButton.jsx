import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

const SidesButton = ({getSides, amountOfSides}) => {

    return (
    <Pressable onPress={() => getSides()}>
        <Text style={styles.amountText}>{amountOfSides}</Text>
    </Pressable>
    )  
}
  

const styles = StyleSheet.create({
    amountText: {
        padding: 3,
        fontSize: 20,
        fontWeight: 'bold'
    }
});

  export default SidesButton;