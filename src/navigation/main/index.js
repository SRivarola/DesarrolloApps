import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, DetailsScreen, ActorScreen } from '../../screens/index';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen 
                name='Home'
                component={HomeScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name='Details'
                component={DetailsScreen}
                options={{headerShown: false}}
            />
               <Stack.Screen
                name='Actor'
                component={ActorScreen}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}

export default MainNavigator;