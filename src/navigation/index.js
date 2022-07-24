import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TabNavigator from './bottomTab';
import { colors } from '../constants/colors';

const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      border: 'pink',
    },
  };

const AppNavigator = () => {
    return (
        <SafeAreaView style={{ flex: 1, }}>
            <NavigationContainer theme={MyTheme}>
                <TabNavigator />
            </NavigationContainer>
        </SafeAreaView>
    )
}

export default AppNavigator;