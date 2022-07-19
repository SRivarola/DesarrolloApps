import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SearchScreen } from '../../screens/index';

const Stack = createNativeStackNavigator();

const SearchNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Search'>
            <Stack.Screen 
                name='Search'
                component={SearchScreen}
                // options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}

export default SearchNavigator;