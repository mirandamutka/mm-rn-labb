import React from 'react';
import { Pressable, View, StyleSheet, Text } from 'react-native';

const SidesButton = ({getSides, amountOfSides}) => {

    return (
        <Pressable onPress={() => getSides()}>
            {({ pressed }) => (
                <View style={pressed ? styles.buttonPressed : styles.button}>
            <Text style={styles.amountText}>{amountOfSides}</Text>
            </View>
            )}
        </Pressable>
    )  
}
  

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#1CAF50',
        width: 50,
        padding: 5,
        margin: 5,
        marginBottom: 10,
        borderRadius: 12,
        textAlign: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        
        elevation: 7
    },
    buttonPressed: {
        backgroundColor: '#3e8e41',
        width: 50,
        padding: 5,
        margin: 5,
        marginBottom: 10,
        borderRadius: 12,
        textAlign: 'center'
    },
    amountText: {
        padding: 3,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    }
});

  export default SidesButton;