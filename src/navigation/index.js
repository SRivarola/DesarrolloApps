import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TabNavigator from './bottomTab';

const AppNavigator = () => {
    return (
        <SafeAreaView style={{ flex: 1, }}>
            <NavigationContainer>
                <TabNavigator />
            </NavigationContainer>
        </SafeAreaView>
    )
}

export default AppNavigator;