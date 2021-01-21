import Animated from 'react-native-reanimated';
import React from 'react';
import { StyleProp, StyleSheet, View } from 'react-native';

import { GLOBAL_COLORS } from '../../../ui/const/colors';

type Props = {
    children: any;
    progress: Animated.Node<any>;
    style: StyleProp<any>;
};

const DrawerItemProvider = ({ children, progress, style }: Props) => {
    const borderTopLeftRadius = Animated.interpolate(progress, {
        inputRange: [0, 1],
        outputRange: [0, 40],
    });

    return (
        <View style={styles.overlay}>
            <Animated.View style={[styles.cardStyle, style, { borderTopLeftRadius }]}>
                {children}
            </Animated.View>
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

    overlay: {
        backgroundColor: GLOBAL_COLORS.background,
        flex: 1,
    },
});

export default DrawerItemProvider;
