import * as React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    height: '83px',
  },
  img: {
    position: 'absolute',
    top: 0,
  },
  containerText: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#28B67B',
    borderRadius: '15px',
  },

  text: {
    color: '#f3f3f3',
    marginBottom: '-5%',
    marginLeft: '45%',
    fontSize: '12px',
    padding: '4px',

    display: 'block',
  },
});

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.containerText}>
        <Text style={styles.text}>
          Vous avez completé 75% de vos taches cette semaine
        </Text>{' '}
      </Text>
      <Image
        style={styles.img}
        source={require('../assets/illustration.png')}
      />
    </View>
  );
}
