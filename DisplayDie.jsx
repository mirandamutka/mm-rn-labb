import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';

const DisplayDie = ({sideNumber}) => {

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
            <Text>No die displayed</Text>
        }
      }

    return (
    <Image source={displayDie(sideNumber)} style={styles.dieImg} />
    )
}

const styles = StyleSheet.create({
    dieImg: {
      height: 200,
      width: 200,
      justifyContent: 'center'
    }
  });

export default DisplayDie;