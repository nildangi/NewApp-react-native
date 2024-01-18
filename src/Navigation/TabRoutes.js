import * as React from 'react';
import { Image, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Profile, Booking } from '../Screens';
import navgiationString from '../constants/navgiationString';
import imagePath from '../constants/image.path';
import color from '../styles/color';

const BototmTab = createBottomTabNavigator();

export default function TabRoutes() {
    return (
        <BototmTab.Navigator
        screenOptions={{
            headerShown:false,
            tabBarInactiveTintColor:color.black,
            tabBarActiveTintColor:color.tintColor,
        }}
        
        >
            <BototmTab.Screen name={navgiationString.HOME} component={Home}
            options={{
                tabBarIcon:({focused})=>{
                    return(
                        <Image style={{
                            tintColor:focused?color.themeColor: color.blackOpacity80
                        }} source={imagePath.home}/>
                    )
                }
            }}
            />
            <BototmTab.Screen name={navgiationString.BOOKING} component={Booking} 
            options={{
                tabBarIcon:({focused})=>{
                    return(
                        <Image style={{
                            tintColor:focused?color.themeColor: color.blackOpacity80
                        }} source={imagePath.booking}/>
                    )
                }
            }}
            />
            <BototmTab.Screen name={navgiationString.PROFILE} component={Profile} 
            options={{
                tabBarIcon:({focused})=>{
                    return(
                        <Image style={{
                            tintColor:focused?color.themeColor: color.blackOpacity80
                        }} source={imagePath.person}/>
                    )
                }
            }}
            />
        </BototmTab.Navigator>
    );
}