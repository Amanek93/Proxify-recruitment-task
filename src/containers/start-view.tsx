import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { GLOBAL_COLORS } from '../ui/const/colors';

const StartView = () => {
    return <ScrollView style={styles.mainContainer} />;
};

const styles = StyleSheet.create({
    mainContainer: { backgroundColor: GLOBAL_COLORS.white, flex: 1 },
});

export default StartView;
