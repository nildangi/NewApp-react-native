//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, Image } from 'react-native';
import dummyData from './dummyData';
import color from '../../styles/color';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import imagePath from '../../constants/image.path';
import styles from './styles';
import ButtonComp from '../../components/ButtonComp';

// create a component
const Home = () => {
    const renderItem = ({ item }) => {
        return (
            <View style={styles.flatStyle}>
                <View style={styles.flexView}>
                    <View>
                        <Text style={{
                            fontSize:scale(12),
                            color: color.blackOpacity80
                        }}>{item?.date}</Text>

                        <Text style={{
                            fontSize: moderateScale(14),
                            color: color.black,
                            fontWeight: 'bold',
                            marginTop:moderateVerticalScale(8)
                        }}
                        >{item?.name}</Text>

                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <Image style={{
                                width:moderateScale(14),
                                height:moderateScale(14),
                                tintColor:color.blackOpacity50,
                            }}
                             source={imagePath.location} />
                            <Text style={{
                                fontSize: moderateScale(12),
                                color: color.blackOpacity50,
                                fontWeight: 'bold'
                            }}
                            >{item?.address}</Text>
                        </View>
                    </View>
                    <Image source={{
                        uri: 'https://cdn.dribbble.com/users/1162077/screenshots/7475318/media/8837a0ae1265548e27a2b2bb3ab1f366.png?compress=1&resize=400x300'
                    }}
                        style={{
                            width: moderateScale(64),
                            height: moderateScale(64),
                            borderRadius: moderateScale(32)
                        }} />
                </View>
                <View style={{ ...styles.flexView, marginVertical: moderateVerticalScale(14) }}>

                    <Text style={{
                         fontSize: moderateScale(14),
                         color: color.black,
                         textTransform:'uppercase',

                    }}>Price</Text>
                    <Text style={{
                        fontSize: moderateScale(14),
                        color: color.black,
                        fontWeight: 'bold',
                    }}>{item?.price}</Text>
                </View>
                <View style={styles.flexView}>
                    <View style={{ flex: 1 }}>
                        <ButtonComp
                            btnText={'Reject'}
                            btnStyle={{
                                backgroundColor: color.white,
                                borderWidth: 1,
                                borderColor: color.themeColor
                            }}
                            btnTextStyle={{ color: color.themeColor }}
                        />
                    </View>
                    <View style={{ marginHorizontal: moderateScale(8) }}></View>
                    <View style={{ flex: 1 }}>
                        <ButtonComp
                            btnText={'Accept'} />
                    </View>
                </View>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <SafeAreaView style={{flex:1, backgroundColor: color.white }}>
                <View style={styles.headerStyle}>
                    <Text />
                    <Text style={styles.hearderText}>Nanny Line</Text>
                    <Image source={imagePath.ball} />
                </View>

                <View style={{
                    marginTop: moderateVerticalScale(14),
                    marginHorizontal: moderateScale(16)
                }}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={dummyData}
                        renderItem={renderItem}
                        ItemSeparatorComponent={() => <View style={{ marginBottom: moderateVerticalScale(14) }} />}
                    />
                </View>
            </SafeAreaView>
        </View>
    );
};



//make this component available to the app
export default Home;
