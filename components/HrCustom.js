import * as React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const styles = StyleSheet.create({
  hr: {
    width: '90%',
    backgroundColor: '#E2E2E2',
    height: '1px',
    margin: '5px',
    marginLeft: '20px',
  },
});

export default function AssetExample() {
  return <View style={styles.hr}></View>;
}
