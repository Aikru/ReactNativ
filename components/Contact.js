import * as React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import Hr from './HrCustom';
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  containerName: {
    display: 'flex',
    flexDirection: 'Column',
  },
  name: {
    fontWeight: 'bold',
    fontSize: '16px',
    color: '#314E2C',
  },
  role: {
    fontWeight: 'Bold',
    font: '12px',
    color: '#A4A8AC',
  },
  img: {
    alignSelf: 'center',
  },
});

export default function AssetExample() {
  return (
    <View>
      <View style={styles.container}>
        <Image source={require('../assets/contact.png')} />
        <Text style={styles.containerName}>
          <Text style={styles.role}> Père</Text>
          <Text style={styles.name}> Roger carel </Text>
        </Text>
        <Image
          style={styles.img}
          source={require('../assets/call-contact.png')}
        />
      </View>
      <Hr />
    </View>
  );
}
