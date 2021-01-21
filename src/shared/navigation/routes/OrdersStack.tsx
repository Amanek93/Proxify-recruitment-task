import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import OrdersView from '../../../containers/orders-view';

import { BasicStackScreenOptions } from '../config';

const OrdersStack = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator headerMode="screen" screenOptions={BasicStackScreenOptions}>
            <Stack.Screen component={OrdersView} name="Your Orders" />
        </Stack.Navigator>
    );
};

export default OrdersStack;
