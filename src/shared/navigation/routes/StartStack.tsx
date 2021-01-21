import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import StartView from '../../../containers/start-view';

import { BasicStackScreenOptions } from '../config';

const StartStack = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator headerMode="screen" screenOptions={BasicStackScreenOptions}>
            <Stack.Screen component={StartView} name="Start" />
        </Stack.Navigator>
    );
};

export default StartStack;
