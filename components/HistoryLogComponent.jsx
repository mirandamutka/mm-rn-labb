import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

const HistoryLog = ({rolls}) => {
    
    return (    
        <View style={styles.historyContainer}>
            {rolls.length > 0 ? 
                <ScrollView style={styles.rollsList}>
                    {rolls.slice(0).reverse().map((roll, index) =>
                    roll ? 
                        <Text key={index} style={styles.rollsListText}>You rolled <Text style={styles.boldText}>{roll}</Text></Text>
                    : <Text key={index}></Text>
                    )}
                </ScrollView>
            : <Text></Text> 
            }  
        </View>   
    )
}

const styles = StyleSheet.create({
    historyContainer: {
        width: 200,
        height: 200,
        backgroundColor: '#eee',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5
    },
    rollsList: {
        width: '100%',
        height: '100%',
        textAlign: 'center'
    },
    rollsListText: {
      padding: 5  
    },
    boldText: {
        fontWeight: 'bold'
    }
})

export default HistoryLog;