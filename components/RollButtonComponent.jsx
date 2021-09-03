import React, { useEffect, useState } from 'react';
import { Pressable, View, StyleSheet, Text } from 'react-native';

 const RollButton = ({setDieNumber, sideNumber, setRolls, dieNumber}) => {

    const [pressed, setPressed] = useState(false);
    const [rolled, setRolled] = useState(0);

    const getDieRoll = () => {
        setDieNumber(Math.floor(Math.random() * sideNumber) + 1);
        setPressed(!pressed);
        setRolled(rolled + 1);
    }

    useEffect(() => {
        setRolls((rolls) => [...rolls, dieNumber]);
    }, [rolled])

    return (
        <Pressable onPress={() => {
            getDieRoll()
        }}>
        {({ pressed }) => (
            <View style={pressed ? styles.buttonPressed : styles.button}>
                <Text style={styles.text}>
                Roll Die!
                </Text>
            </View>
        )}
        </Pressable>
      )
 }

 const styles = StyleSheet.create({
     button: {
        backgroundColor: '#1CAF50',
        paddingTop: 5,
        marginTop: 5,
        marginBottom: 10,
        borderRadius: 12,
        width: 200,
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
        paddingTop: 5,
        marginTop: 5,
        marginBottom: 10,
        borderRadius: 12,
        width: 200,
        textAlign: 'center'
     },
     text: {
         fontSize: 'large',
        fontWeight: 'bold',
        paddingBottom: 10,
        color: 'white'
     }
 })

 export default RollButton;
 
