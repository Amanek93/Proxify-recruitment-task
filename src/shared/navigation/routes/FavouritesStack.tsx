import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import FavouritesView from '../../../containers/favourites-view';

import { BasicStackScreenOptions } from '../config';

const FavouritesStack = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator headerMode="screen" screenOptions={BasicStackScreenOptions}>
            <Stack.Screen component={FavouritesView} name="Favourites" />
        </Stack.Navigator>
    );
};

export default FavouritesStack;
