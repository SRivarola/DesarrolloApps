import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const LogScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Log screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default LogScreen;