import * as React from 'react';
import {Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    color: '#FFFFFF',
    backgroundColor: '#28B67B',
    height: '60px',
    width: '100%',
    borderRadius: '15px',
    padding: '5px',

    paddingLeft: '40px',
  },

  bar: {
    display: 'block',
    width: '80%',
    height: '5px',
    backgroundColor: '#FFFFFF',
    margin: '10px',
  },
  subbar: {
    display: 'flex',
    backgroundColor: '#FACE3E',
    width: '70%',
    height: '100%',
  },
});

export default function AssetExample() {
  return (
    <Text style={styles.container}>
      Visite effectuees ce mois ci :
      <Text style={styles.bar}>
        <Text style={styles.subbar}> </Text>
      </Text>
    </Text>
  );
}
