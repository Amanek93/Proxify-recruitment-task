import React, { useCallback } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';

import { GLOBAL_COLORS } from '../../../ui/const/colors';

const MainDrawerContent = (props: any) => {
    const handleSignOut = useCallback(() => {
        Alert.alert('Should sign out');
    }, []);

    return (
        <View style={styles.mainContainer}>
            <DrawerContentScrollView {...props}>
                <Text style={styles.userName}>Viktor</Text>
                <View style={styles.drawerList}>
                    <DrawerItemList {...props} />
                </View>
                <DrawerItem
                    inactiveBackgroundColor="transparent"
                    inactiveTintColor={GLOBAL_COLORS.white}
                    label="Sign Out"
                    labelStyle={styles.drawerLabel}
                    onPress={handleSignOut}
                />
            </DrawerContentScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    drawerLabel: {
        fontFamily: 'Avenir-Roman',
        fontSize: 20,
        lineHeight: 27,
        marginLeft: 40,
    },
    drawerList: {
        alignContent: 'space-between',
        borderBottomColor: GLOBAL_COLORS.divider,
        borderBottomWidth: 2,
        flex: 1,
        justifyContent: 'space-between',
        marginBottom: 40,
        marginLeft: 20,
        paddingVertical: 40,
    },
    mainContainer: {
        backgroundColor: GLOBAL_COLORS.background,
        borderTopLeftRadius: 48,
        flex: 1,
    },
    userName: {
        alignSelf: 'center',
        color: GLOBAL_COLORS.white,
        fontFamily: 'Avenir-Black',
        fontSize: 28,
        lineHeight: 38,
        textAlign: 'left',
    },
});

export default MainDrawerContent;
