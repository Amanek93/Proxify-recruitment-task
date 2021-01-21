import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { GLOBAL_COLORS } from '../../ui/const/colors';
import { GLOBAL_ICONS } from '../../ui/const/icons';
import { NotWorthIt } from '../../../typings';

export const BasicStackScreenOptions = (props: NotWorthIt): NotWorthIt => {
    return {
        headerLeft: () => (
            <TouchableOpacity onPress={props.navigation.toggleDrawer} style={styles.menuIcon}>
                <Icon color={GLOBAL_COLORS.menuIcon} name={GLOBAL_ICONS.menu} size={40} />
            </TouchableOpacity>
        ),
        headerStyle: { shadowColor: 'transparent' },
        headerTitleAlign: 'left',
        headerTintColor: GLOBAL_COLORS.header,
        headerTitleStyle: {
            fontSize: 24,
            fontWeight: '500',
            letterSpacing: 5,
            lineHeight: 33,
            textAlign: 'left',
        },
    };
};

const styles = StyleSheet.create({
    menuIcon: {
        marginLeft: 20,
        width: 200,
    },
});
