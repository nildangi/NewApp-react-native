//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';
import HeaderComp from '../../components/HeaderComp';
import { moderateScale } from 'react-native-size-matters';
import ButtonComp from '../../components/ButtonComp';
import styles from './Styles';
import navgiationString from '../../constants/navgiationString';

// create a component
const ChooseAccount = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ paddingHorizontal: moderateScale(24) }}>
                <HeaderComp />
            </View>
            <View style={styles.container}>
                <Text style={styles.headingText}>Choose your accounts type</Text>
                <View style={{ alignItems: 'center' }}>
                    <Image source={{ uri: 'https://s3fs.paintnite.com/yaymaker-images/venue/original/wjgav-10014375-virtual-event-create-from-home.jpg' }}
                        style={styles.imgStyle} />
                    <Text style={styles.textStyle}>Agency</Text>
                </View>

                <View style={{ alignItems: 'center' }}>
                    <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/236/236831.png' }}
                        style={styles.imgStyle} />
                    <Text style={styles.textStyle}>Freelancer</Text>
                </View>
                <ButtonComp
                    btnText={'Continue'}
                    btnStyle={{
                        width: '100%'
                    }}
                    onPress={() => navigation.navigate(navgiationString.REGISTER)} />
            </View>
        </SafeAreaView>
    );
};

//make this component available to the app
export default ChooseAccount;
