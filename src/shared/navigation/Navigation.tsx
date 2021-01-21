import Animated from 'react-native-reanimated';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { GLOBAL_COLORS } from '../../ui/const/colors';

import CartStack from './routes/CartStack';
import DrawerItemProvider from './components/DrawerItemProvider';
import FavouritesStack from './routes/FavouritesStack';
import MainDrawerContent from './components/MainDrawerContent';
import OrdersStack from './routes/OrdersStack';
import StartStack from './routes/StartStack';

const Drawer = createDrawerNavigator();

const Navigation = () => {
    const insets = useSafeAreaInsets();

    const [progress, setProgress] = useState<Animated.Node<number>>(new Animated.Value(0));

    const rotate = Animated.interpolate(progress, {
        inputRange: [0, 1],
        outputRange: [0, -0.13],
    });

    const scale = Animated.interpolate(progress, {
        inputRange: [0, 1],
        outputRange: [1, 0.95],
    });

    const translateX = Animated.interpolate(progress, {
        inputRange: [0, 1],
        outputRange: [0, 70],
    });

    const screenStyles = { transform: [{ rotate, scale, translateX }] };

    return (
        <View style={[styles.mainContainer, { top: 8 + insets.top }]}>
            <Drawer.Navigator
                drawerContent={(props) => {
                    setProgress(props.progress);
                    return <MainDrawerContent {...props} />;
                }}
                drawerContentOptions={{
                    activeBackgroundColor: GLOBAL_COLORS.activeOpacity,
                    activeTintColor: GLOBAL_COLORS.active,
                    inactiveTintColor: GLOBAL_COLORS.white,
                    inactiveBackgroundColor: 'transparent',
                    style: {
                        marginVertical: 50,
                    },
                    itemStyle: {
                        borderRadius: 15.5,
                    },
                    labelStyle: {
                        fontSize: 20,
                        lineHeight: 27,
                        marginLeft: 20,
                        width: '100%',
                        fontFamily: 'Avenir-Roman',
                    },
                }}
                drawerStyle={styles.drawer}
                drawerType="slide"
                overlayColor="transparent"
            >
                <Drawer.Screen name="Start">
                    {() => (
                        <DrawerItemProvider progress={progress} style={screenStyles}>
                            <StartStack />
                        </DrawerItemProvider>
                    )}
                </Drawer.Screen>

                <Drawer.Screen name="Your Cart">
                    {() => (
                        <DrawerItemProvider progress={progress} style={screenStyles}>
                            <CartStack />
                        </DrawerItemProvider>
                    )}
                </Drawer.Screen>
                <Drawer.Screen name="Favourites">
                    {() => (
                        <DrawerItemProvider progress={progress} style={screenStyles}>
                            <FavouritesStack />
                        </DrawerItemProvider>
                    )}
                </Drawer.Screen>
                <Drawer.Screen name="Your Orders">
                    {() => (
                        <DrawerItemProvider progress={progress} style={screenStyles}>
                            <OrdersStack />
                        </DrawerItemProvider>
                    )}
                </Drawer.Screen>
            </Drawer.Navigator>
        </View>
    );
};

const styles = StyleSheet.create({
    drawer: {
        width: 200,
    },
    mainContainer: {
        backgroundColor: GLOBAL_COLORS.white,
        flex: 1,
    },
});

export default Navigation;
