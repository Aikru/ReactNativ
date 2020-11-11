import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Contact from './Contact';

const names = [
  {name: 'Roger carel', role: 'père'},
  {name: 'Roger carel', role: 'père'},
  {name: 'Roger carel', role: 'père'},
  {name: 'Roger carel', role: 'père'},
  {name: 'Roger carel', role: 'père'},
];

const uiContact = names.map((el) => (
  <Contact nameContact={el.name} roleContact={el.role} />
));

const styles = StyleSheet.create({
  container: {
    margin: '0',
    width: '100%',
  },
  isActive: {
    height: '25px',
    fontWeight: 'Bold',
    color: '#314E2C',
    borderBottom: '3px solid #314E2C ',
  },
  filter: {
    display: 'flex',
    justifyContent: 'space-around',
    color: '#A4A8AC',
    marginBottom: '1em',
  },
  title: {
    marginTop: '2em',
    fontWeight: 'Bold',
    fontSize: '20px',
    color: '#314E2C',
  },
  subtitle: {
    color: '#A4A8AC',
  },
});

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Famille </Text>
      <Text style={styles.subtitle}> Contact with your familly </Text>

      <Text style={styles.filter}>
        <Text style={styles.isActive}>All</Text>
        <Text>loved</Text>
        <Text>Usefull</Text>
        <Text>Close</Text>
      </Text>
      {uiContact}
    </View>
  );
}
