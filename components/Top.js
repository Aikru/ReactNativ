import * as React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const styles = StyleSheet.create({
  name: {
    marginTop: '10px',
    display: 'flex',
    flexDirection: 'column',

    margin: 'auto',
    fontWeight: 'bold',
    fontSize: '20px',
    color: '#314E2C',
  },

  img: {
    position: 'absolute',
    right: '2em',
    top: '0.5em',
  },

  id: {
    fontWeight: 'light',
    fontSize: '12px',
    color: '#D9D9D9',
  },
});
export default function Top() {
  return (
    <View>
      <Image style={styles.img} source={require('../assets/exit.png')} />
      <Text style={styles.name}>
        <Text> John Doe </Text>
        <Text style={styles.id}>ID: Q1734567891</Text>
      </Text>
    </View>
  );
}
