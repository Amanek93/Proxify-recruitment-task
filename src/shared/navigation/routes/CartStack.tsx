import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CartView from '../../../containers/cart-view';

import { BasicStackScreenOptions } from '../config';

const CartStack = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator headerMode="screen" screenOptions={BasicStackScreenOptions}>
            <Stack.Screen component={CartView} name="Your Cart" />
        </Stack.Navigator>
    );
};

export default CartStack;
