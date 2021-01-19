import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {StyleSheet, View, Text} from 'react-native';

const MainDrawerContent = (props: any) => {
  return (
    <View style={styles.mainContainer}>
      <DrawerContentScrollView {...props}>
        <Text style={styles.userName}>Viktor</Text>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#1F1B33',
    borderTopLeftRadius: 48,
    flex: 1,
  },
  userName: {
    alignSelf: 'center',
    color: '#FFFFFF',
    fontFamily: 'Avenir-Black',
    fontSize: 28,
    lineHeight: 38,
    textAlign: 'left',
  },
});

export default MainDrawerContent;
