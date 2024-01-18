//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TextInput, TouchableOpacity, Button, Alert } from 'react-native';
import styles from '../Login/styles'
import { moderateVerticalScale } from 'react-native-size-matters';
import TextInputwithLable from '../../components/TextInputwithLable';
import imagePath from '../../constants/image.path';
import ButtonComp from '../../components/ButtonComp';
import navigationStings from '../../constants/navgiationString';
import navgiationString from '../../constants/navgiationString';


// create a component
const Login = ({ navigation }) => {
    const [isVisible, setVisible] = useState(true)
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../Login/babyChild.jpg')}
                style={styles.imgStyle}>

                <Text style={styles.loginTextStyle}>LOGIN</Text>
            </ImageBackground>

            <View style={styles.mainStyles}>
                <TextInputwithLable
                    lable="Email address"
                    placeHolder="Enter your email"
                    inputStyle={{ marginBottom: moderateVerticalScale(28) }}
                    keyboardType='email-address'

                />
                <TextInputwithLable
                    lable="Password"
                    placeHolder="Enter your Password"
                    secureTextEntry={isVisible}
                    rightIcom={isVisible ? imagePath.hideEye : imagePath.showEye}
                    onPressRight={() => setVisible(!isVisible)}
                />
                <TouchableOpacity 
                activeOpacity={0.7} 
                style={styles.forgotView}
                onPress={() => navigation.navigate(navgiationString.FORGOT_PASSWORD)}
                
                >
                    <Text style={styles.forgotText}>Forgot Password ?</Text>
                </TouchableOpacity>

                <ButtonComp
                    btnText={'Login'}
                    
                />

            </View>
            <View style={styles.bottomView}>
                <Text>Not a member</Text>
                <TouchableOpacity onPress={()=>navigation.navigate(navigationStings.CHOOSE_ACCOUNT)}>
                    <Text style={{color:'#88D6CE'}}>Join Now</Text>
                </TouchableOpacity>
            </View>

        </View>
    );

};

export default Login;
