import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
const StartView = () => {
  return (
    <ScrollView style={styles.mainContainer}>
      <Text style={styles.title}>Start</Text>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  mainContainer: {backgroundColor: '#FFFFFF', flex: 1},
  title: {
    alignSelf: 'center',
    color: '#9F9FA0',
    fontFamily: 'Avenir-Medium',
    fontSize: 24,
    lineHeight: 33,
    textAlign: 'left',
  },
});
export default StartView;
