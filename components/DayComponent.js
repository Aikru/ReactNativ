import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  day: {
    margin: 'auto',
    fontWeight: 'bold',
    color: '#314E2C',
  },
  num: {
    fontWeight: 'bold',
    fontSize: '20px',
    color: '#314E2C',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '15px',
  },

  days: {
    color: '#314E2C',
    backgroundColor: '#F9F9F9',
    height: '90px',
    width: '5em',
    display: 'flex',
    flexDirection: 'column',
    margin: '4px',
  },
});

export default function AssetExample(prop) {
  return (
    <View>
      <Text style={styles.days}>
        <Text style={styles.num}> {prop.num} </Text>
        <Text style={styles.day}> {prop.day} </Text>
      </Text>
    </View>
  );
}
