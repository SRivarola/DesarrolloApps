import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const UserScreen = () => {
    return (
        <View style={styles.container}>
            <Text>User screen</Text>
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

export default UserScreen;