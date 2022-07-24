import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UserScreen } from '../../screens/index';

const Stack = createNativeStackNavigator();

const UserNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='User'>
            <Stack.Screen 
                name='User'
                component={UserScreen}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}

export default UserNavigator;