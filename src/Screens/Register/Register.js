import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import HeaderComp from '../../components/HeaderComp';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import ButtonComp from '../../components/ButtonComp';
import styles from '../Register/styles';
import navgiationString from '../../constants/navgiationString';
import TextInputwithLable from '../../components/TextInputwithLable';
import imagePath from '../../constants/image.path';

// create a component
const Register = ({ navigation }) => {
    const [isTrue,setTrue]=useState(false)
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <HeaderComp />
                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={{ flexDirection: 'row' }}>
                        <TextInputwithLable
                            lable="First Name"
                            placeHolder="Please enter your first name"
                            inputStyle={{ flex: 1 }}
                        />
                        <View style={{ marginHorizontal: moderateScale(8) }}></View>
                        <TextInputwithLable
                            lable="Last Name"
                            placeHolder="Please enter your last name"
                            inputStyle={{ flex: 1 }}
                        />
                    </View>
                    <TextInputwithLable
                        lable="Salon Name"
                        placeHolder="Please enter your last name"
                        inputStyle={{ marginVertical: moderateVerticalScale(28) }}
                    />
                    <TextInputwithLable
                        lable="Date of Birth"
                        placeHolder="Please enter your DOB"
                    //inputStyle={{ marginVertical:moderateVerticalScale(28)}}
                    />
                    <TextInputwithLable
                        lable="Phone Number"
                        placeHolder="Enter your phone number"
                    //inputStyle={{ marginVertical:moderateVerticalScale(28)}}
                    />
                    <TextInputwithLable
                        lable="Email"
                        placeHolder="Enter your email"
                        inputStyle={{ marginVertical: moderateVerticalScale(28) }}
                        keyboardType='email-address'
                    />
                    <View style={{ flexDirection: 'row' }}>
                        <TextInputwithLable
                            lable="Country"
                            placeHolder="Enter your Country"
                            inputStyle={{ flex: 1 }}
                        />
                        <View style={{ marginHorizontal: moderateScale(8) }}></View>
                        <TextInputwithLable
                            lable="Postal/Zip Code"
                            placeHolder="Enter your Postal/Zip Code"
                            inputStyle={{ flex: 1 }}
                        />
                    </View>
                    <TextInputwithLable
                        lable="Address"
                        placeHolder="Please enter your address"
                        inputStyle={{ marginVertical: moderateVerticalScale(28) }}
                    />
                    <TextInputwithLable
                        lable="Refferal Code"
                        placeHolder="Please enter your code"
                    // inputStyle={{ flex: 1 }}
                    />
                    <TouchableOpacity 
                    style={styles.bottomView}
                    activeOpacity={0.8}
                    onPress={()=>setTrue(!isTrue)}
                    >
                        <Image source={isTrue? imagePath.activeCheck :imagePath.inActiveCheck}
                            style={{ marginLeft: moderateScale(12) }}
                        />
                        <Text>By Loggin in, you agree to bbb Privacy Policy and Terms of Use</Text>
                    </TouchableOpacity>


                    <ButtonComp
                        btnText={'Continue'}

                        onPress={() => navigation.navigate(navgiationString.SET_PASSWORD)}
                    />
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

//make this component available to the app
export default Register;
