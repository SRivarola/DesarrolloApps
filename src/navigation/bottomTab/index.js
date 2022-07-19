import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IonicsIcons from '@expo/vector-icons/Ionicons'
import MainNavigator from '../main/index';
import SearchNavigator from '../search/index';
import UserNavigator from '../user/index';
import { Text } from 'react-native';
import { colors } from '../../constants/colors'

const BottomTabs = createBottomTabNavigator();

const LabelBottonTab = (focused, label) => (
    <Text
        style={{
            color: focused ? colors.rojoClaro : colors.rosa,
            fontFamily: focused ? 'Lato-Bold' : 'Lato-Regular'
        }}
    >
        {label}
    </Text>
)

const TabNavigator = () => {
    return (
        <BottomTabs.Navigator
            initialRouteName='HomeTab'
            // screenOptions={{headerShown: false,}}
        >
            <BottomTabs.Screen
                name='HomeTab'
                component={MainNavigator}
                options={{
                    tabBarLabel: ({focused}) => LabelBottonTab(focused, 'Inicio'),
                    tabBarIcon: ({focused}) => (
                        <IonicsIcons 
                            name={ focused ? 'home' : 'home-outline'} 
                            size={20}
                            color={ focused ? colors.rojoClaro : colors.rosa }
                        />
                    )
                }}
            />
             <BottomTabs.Screen
                name='SearchTab'
                component={SearchNavigator}
                options={{
                    tabBarLabel: ({focused}) => LabelBottonTab(focused, 'Buscar'),
                    tabBarIcon: ({focused}) => (
                        <IonicsIcons 
                            name={'search-sharp'} 
                            size={20}
                            color={ focused ? colors.rojoClaro : colors.rosa }
                        />
                    )
                }}
            />
               <BottomTabs.Screen
                name='UserTab'
                component={UserNavigator}
                options={{
                    tabBarLabel: ({focused}) => LabelBottonTab(focused, 'User'),
                    tabBarIcon: ({focused}) => (
                        <IonicsIcons 
                            name={ focused ? 'md-person-sharp' : 'md-person-outline' } 
                            size={20}
                            color={ focused ? colors.rojoClaro : colors.rosa }
                        />
                    )
                }}
            />
        </BottomTabs.Navigator>
    )
}
export default TabNavigator;