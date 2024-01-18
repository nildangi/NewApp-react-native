import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navgiationString from '../constants/navgiationString';
import {
    Login,
    Register,
    ChooseAccount,
    ForgotPassword,
    SetPassword
} from "../Screens";

const Stack = createNativeStackNavigator();

export default function AuthStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={navgiationString.LOGIN} component={Login} />
            <Stack.Screen name={navgiationString.REGISTER} component={Register} />
            <Stack.Screen name={navgiationString.SET_PASSWORD} component={SetPassword} />
            <Stack.Screen name={navgiationString.CHOOSE_ACCOUNT} component={ChooseAccount} />
            <Stack.Screen name={navgiationString.FORGOT_PASSWORD} component={ForgotPassword} />
        </Stack.Navigator>

    )
}
