import Animated from 'react-native-reanimated';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

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
        <Stack.Navigator headerMode="none">
          <Stack.Screen
            component={(props) => <StartView {...props} />}
            name="Start"
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
      </Drawer.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    elevation: 13,
    flex: 1,
    overflow: 'hidden',
    shadowColor: 'white',
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
    backgroundColor: 'white',
    flex: 1,
  },
  overlay: {
    backgroundColor: '#1F1B33',
    flex: 1,
  },
});

export default Navigation;
