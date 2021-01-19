import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {StyleSheet, View, Text} from 'react-native';
import {GLOBAL_COLORS} from '../../../ui/const/colors';

const MainDrawerContent = (props: any) => {
  return (
    <View style={styles.mainContainer}>
      <DrawerContentScrollView {...props}>
        <Text style={styles.userName}>Viktor</Text>
        <DrawerItemList {...props} />
        <DrawerItem
          inactiveBackgroundColor="transparent"
          inactiveTintColor={GLOBAL_COLORS.white}
          labelStyle={{
            fontSize: 20,
            lineHeight: 27,
            marginLeft: 0,
            fontFamily: 'Avenir-Roman',
          }}
          label="Sign Out"
          onPress={() => ''}
        />
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: GLOBAL_COLORS.background,
    borderTopLeftRadius: 48,
    flex: 1,
  },
  userName: {
    alignSelf: 'center',
    color: GLOBAL_COLORS.white,
    fontFamily: 'Avenir-Black',
    fontSize: 28,
    lineHeight: 38,
    textAlign: 'left',
  },
});

export default MainDrawerContent;
