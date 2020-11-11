import * as React from 'react';
import {Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  button: {
    width: '40%',
    height: '170px',
    margin: '5%',
    backgroundColor: '#FFFFFF',
    borderRadius: '15px',
    display: 'flex',
  },
  img: {margin: '1em', marginBottom: '60px'},
  text: {
    textAlign: 'center',
    fontSize: '20px',
    color: '#314E2C',
  },

  reminder: {
    textAlign: 'center',
    color: '#314E2C',
  },
});

export default function AssetExample(props) {
  return (
    <TouchableOpacity style={styles.button}>
      <Image style={styles.img} source={require('../assets/CallRed.png')} />
      <Text style={styles.text}> {props.text}</Text>
      <Text style={styles.reminder}>{props.notif} reminder</Text>
    </TouchableOpacity>
  );
}
