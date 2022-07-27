import React, { useState, useEffect } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TabNavigator from './bottomTab';
import { colors } from '../constants/colors';
import { BrandScreen } from '../screens';

const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      border: colors.pink,
    },
  };

const AppNavigator = () => {

    const [brand, setBrand] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setBrand(false)
        }, 2500);
    }, []);

    return (
        <SafeAreaView style={{ flex: 1, }}>
            <NavigationContainer theme={MyTheme}>
                {
                    brand?
                    <BrandScreen />
                    :
                    <TabNavigator />
                }
            </NavigationContainer>
        </SafeAreaView>
    )
}

export default AppNavigator;