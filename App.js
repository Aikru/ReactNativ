import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import Top from './components/Top';
import Day from './components/DayComponent';
import Percent from './components/Percent';
import Button from './components/Button';
import Medicals from './components/MedicalVisits';
import Contact from './components/ContactAnnuary';

const styles = StyleSheet.create({
  containerButton: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    padding: '5%',
    flexWrap: 'wrap',
    marginTop: '50px',
  },
  containerDay: {
    display: 'flex',
    width: '325px',

    flexDirection: 'row',
  },
  container: {
    padding: '12px',
  },

  background: {
    backgroundColor: '#EBF3EC',
    height: '550px',
    margin: '-25px',
  },
});

const days = [
  {day: 'Tue', num: 5},
  {day: 'Wed', num: 6},
  {day: 'Fri', num: 7},
  {day: 'Sat', num: 8},
  {day: 'Sun', num: 9},
];
const button = [
  {text: 'Reminder', notif: 5, icon: 'ReminderIcon'},
  {text: 'Medecine', notif: 2, icon: 'MedecineIcon'},
  {text: 'Doctor Visit', notif: 4, icon: 'DoctorVisitIcon'},
  {text: 'Call', notif: 1, icon: 'CallIcon'},
];

const uiDays = days.map((el) => <Day day={el.day} num={el.num} />);

const uibutton = button.map((el) => <Button text={el.text} notif={el.notif} />);

export default function App() {
  return (
    <View style={styles.container}>
      <Top />
      <View style={styles.containerDay}>{uiDays}</View>
      <Percent />
      <Text style={styles.background}>
        <View style={styles.containerButton}>{uibutton}''</View>
      </Text>

      <Medicals />

      <Contact />
    </View>
  );
}
