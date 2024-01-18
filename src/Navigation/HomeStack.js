import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navgiationString from '../constants/navgiationString';
import TabRoutes from './TabRoutes';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={navgiationString.TAB_ROUTES} component={TabRoutes} />
        </Stack.Navigator>

    )
}
