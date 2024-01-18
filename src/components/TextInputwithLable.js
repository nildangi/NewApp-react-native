//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import { scale, verticalScale, moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import colors from '../styles/color';

// create a component
const TextInputwithLable = ({
    lable,
    placeHolder,
    onChangeText = () => { },
    inputStyle = {},
    rightIcom,
    onPressRight,
    ...props
}) => {
    return (
        <View style={{ ...styles.inputStyle, ...inputStyle }}>
            <Text style={styles.labelTextStyle}>{lable}</Text>
            <View style={styles.flexView}>
                <TextInput
                    placeholder={placeHolder}
                    style={styles.inlineStyle}
                    {...props}
                />
                {!!rightIcom ? <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={onPressRight}
                >
                    <Image style={{ tintColor: colors.blackOpacity30 }} source={rightIcom} />
                </TouchableOpacity> : null}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    inputStyle: {
        borderBottomWidth: 1,
        borderBottomColor: colors.blackOpacity30,
        padding: moderateScale(4),
    },
    inlineStyle: {
        paddingVertical: moderateVerticalScale(8),
        fontSize:scale(16),
        color:colors.blackOpacity80,
        flex:1


    },
    flexView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});

export default TextInputwithLable;
