import Animated from 'react-native-reanimated';
import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {GLOBAL_COLORS} from '../../ui/const/colors';

import CartView from '../../containers/cart-view';
import StartView from '../../containers/start-view';
import MainDrawerContent from './components/MainDrawerContent';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const StackNavigator = (props: any) => {
  const borderTopLeftRadius = Animated.interpolate(props.progress, {
    inputRange: [0, 1],
    outputRange: [0, 40],
  });

  return (
    <View style={styles.overlay}>
      <Animated.View
        style={[styles.cardStyle, props.style, {borderTopLeftRadius}]}>
        <Stack.Navigator
          headerMode="screen"
          screenOptions={(props) => {
            const {toggleDrawer} = props.navigation; // <-- drawer's navigation (not from stack)
            return {
              headerLeft: () => (
                <TouchableOpacity onPress={toggleDrawer}>
                  <Text>ICON</Text>
                </TouchableOpacity>
              ),
              headerStyle: {shadowColor: 'transparent'},
              headerTintColor: GLOBAL_COLORS.header,
              headerTitleStyle: {
                fontSize: 24,
                lineHeight: 33,
                textAlign: 'left',
                letterSpacing: 5,
                fontWeight: '500',
              },
            };
          }}>
          <Stack.Screen
            component={(props) => <StartView {...props} />}
            name="Start"
          />
          <Stack.Screen
            component={(props) => <CartView {...props} />}
            name="Your Cart"
          />
        </Stack.Navigator>
      </Animated.View>
    </View>
  );
};

const Navigation = () => {
  const insets = useSafeAreaInsets();

  const [progress, setProgress] = useState<Animated.Node<number>>(
    new Animated.Value(0)
  );

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

  const screenStyles = {transform: [{rotate, scale, translateX}]};

  return (
    <View style={[styles.mainContainer, {top: 8 + insets.top}]}>
      <Drawer.Navigator
        drawerContentOptions={{
          activeBackgroundColor: GLOBAL_COLORS.activeOpacity,
          activeTintColor: GLOBAL_COLORS.active,
          inactiveTintColor: GLOBAL_COLORS.white,
          inactiveBackgroundColor: 'transparent',
          labelStyle: {
            fontSize: 20,
            lineHeight: 27,
            marginLeft: 0,
            fontFamily: 'Avenir-Roman',
          },
        }}
        drawerContent={(props) => {
          setProgress(props.progress);
          return <MainDrawerContent {...props} />;
        }}
        drawerStyle={styles.drawer}
        drawerType="slide"
        overlayColor="transparent">
        <Drawer.Screen name="Start">
          {(props) => (
            <StackNavigator
              {...props}
              progress={progress}
              style={screenStyles}
            />
          )}
        </Drawer.Screen>
        <Drawer.Screen name="Your Cart">
          {(props) => (
            <StackNavigator
              {...props}
              progress={progress}
              style={screenStyles}
            />
          )}
        </Drawer.Screen>
        <Drawer.Screen name="Favourites">
          {(props) => (
            <StackNavigator
              {...props}
              progress={progress}
              style={screenStyles}
            />
          )}
        </Drawer.Screen>
        <Drawer.Screen name="Your Orders">
          {(props) => (
            <StackNavigator
              {...props}
              progress={progress}
              style={screenStyles}
            />
          )}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    elevation: 13,
    flex: 1,
    overflow: 'hidden',
    shadowColor: GLOBAL_COLORS.white,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
  },
  drawer: {
    width: 200,
  },
  mainContainer: {
    backgroundColor: GLOBAL_COLORS.white,
    flex: 1,
  },
  overlay: {
    backgroundColor: GLOBAL_COLORS.background,
    flex: 1,
  },
});

export default Navigation;
