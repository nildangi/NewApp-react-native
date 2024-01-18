import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import HeaderComp from '../../components/HeaderComp';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import ButtonComp from '../../components/ButtonComp';
import styles from '../ForgotPassword/styles';
import navgiationString from '../../constants/navgiationString';
import TextInputwithLable from '../../components/TextInputwithLable';
import imagePath from '../../constants/image.path';

// create a component
const ForgotPassword = ({ navigation }) => {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <HeaderComp />

                <View style={{ flex: 1 }}>

                    <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>
                        < Image source={imagePath.lock} style={{ height: scale(60), width: scale(60) }} />
                    </View>

                    <View style={{ flex: 0.4,justifyContent:'center' }}>
                        <Text style={styles.headingText}>Forgot Password</Text>
                        <Text style={styles.descText}>Enter the email address associated with your account.</Text>
                    </View>

                    <View style={{ flex: 0.4}}>
                        <TextInputwithLable
                            lable="Email"
                            placeHolder="Enter your email"
                            inputStyle={{ marginVertical: moderateVerticalScale(28) }}
                            keyboardType='email-address'
                        />

                        <ButtonComp
                            btnText={'Send'}
                            onPress={() => navigation.navigate(navgiationString.SET_PASSWORD)}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

//make this component available to the app
export default ForgotPassword;
