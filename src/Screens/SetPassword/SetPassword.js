import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import HeaderComp from '../../components/HeaderComp';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import ButtonComp from '../../components/ButtonComp';
import styles from '../SetPassword/styles';
import navgiationString from '../../constants/navgiationString';
import TextInputwithLable from '../../components/TextInputwithLable';
import imagePath from '../../constants/image.path';

// create a component
const SetPassword = ({ navigation }) => {
    const [isVisible, setVisible] = useState(true)

    const [isTrue, setTrue] = useState(false)
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <HeaderComp />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles.headingText}>Set Password</Text>
                    <Text  style={styles.descText}>Set a password for you new account<Text style={{fontWeight:'bold'}}>(+33) 34 56 78 901</Text></Text>
                    <TextInputwithLable
                        lable="Password"
                        placeHolder="Enter your Password"
                        secureTextEntry={isVisible}
                        rightIcom={isVisible ? imagePath.hideEye : imagePath.showEye}
                        onPressRight={() => setVisible(!isVisible)}
                        inputStyle={{ marginVertical: moderateVerticalScale(76) }}
                        
                />


                    <ButtonComp
                        btnText={'Continue'}
                        onPress={() => navigation.navigate(navgiationString.FORGOT_PASSWORD)}
                        btnStyle={styles.btnStyle}
                        img={imagePath.arrowForward}
                    />
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

//make this component available to the app
export default SetPassword;
