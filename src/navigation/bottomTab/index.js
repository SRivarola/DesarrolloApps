import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import IonicsIcons from '@expo/vector-icons/Ionicons'
import MainNavigator from '../main/index';
import SearchNavigator from '../search/index';
import UserNavigator from '../user/index';
import { Text, Image } from 'react-native';
import { colors } from '../../constants/colors';
import { styles } from './styles';

const BottomTabs = createBottomTabNavigator();

const TabNavigator = () => {

    const userName = useSelector((state) => state.user.name);
    const userImg = useSelector((state) => state.user.img);

    return (
        <BottomTabs.Navigator
            initialRouteName='HomeTab'
            screenOptions={{
                headerShown: false,
                tabBarStyle: styles.buttomTab,
                tabBarShowLabel: false,
            }}
        >
            <BottomTabs.Screen
                name='HomeTab'
                component={MainNavigator}
                options={{
                    tabBarIcon: ({focused}) => (
                        <>
                        <IonicsIcons 
                            name={ focused ? 'home' : 'home-outline'} 
                            size={30}
                            color={ focused ? colors.black : colors.grey }
                        />
                        <Text
                            style={{
                                color: focused ? colors.black : colors.grey,
                                fontFamily: focused ? 'Lato-Bold' : 'Lato-Regular'
                            }}
                        >
                            Inicio
                        </Text>
                        </>
                    )
                }}
            />
             <BottomTabs.Screen
                name='SearchTab'
                component={SearchNavigator}
                options={{
                    tabBarIcon: ({focused}) => (
                        <>
                        <IonicsIcons 
                            name={'search-sharp'} 
                            size={30}
                            color={ focused ? colors.black : colors.grey }
                        />
                        <Text
                            style={{
                                color: focused ? colors.black : colors.grey,
                                fontFamily: focused ? 'Lato-Bold' : 'Lato-Regular'
                            }}
                        >
                            Buscar
                        </Text>
                        </>
                    )
                }}
            />
               <BottomTabs.Screen
                name='UserTab'
                component={UserNavigator}
                options={{
                    tabBarIcon: ({focused}) => (
                        <>
                        {
                            userImg ?
                            <Image 
                                style={ focused? {...styles.imagen, borderWidth: 1, borderColor: colors.black} : styles.imagen  }
                                source={{uri: userImg}}
                            />
                            :
                            <IonicsIcons 
                                name={ focused ? 'md-person-sharp' : 'md-person-outline' } 
                                size={30}
                                color={ focused ? colors.black : colors.grey }
                            />
                        }
                        <Text  
                            style={{
                                color: focused ? colors.black : colors.grey,
                                fontFamily: focused ? 'Lato-Bold' : 'Lato-Regular'
                            }}
                        >
                            {userName? userName : 'User'}
                        </Text>
                        </>
                    )
                }}
            />
        </BottomTabs.Navigator>
    )
}
export default TabNavigator;