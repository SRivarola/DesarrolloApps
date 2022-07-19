import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BrandScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Home screen</Text>
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

export default BrandScreen;