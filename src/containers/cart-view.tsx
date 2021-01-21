import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import {GLOBAL_COLORS} from '../ui/const/colors';

const CartView = () => {
  return (
    <ScrollView style={styles.mainContainer}>
      <Text>Your Cart</Text>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  mainContainer: {backgroundColor: GLOBAL_COLORS.white, flex: 1},
});
export default CartView;
