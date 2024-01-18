import { StyleSheet } from "react-native";
import { scale, verticalScale, moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import colors from '../../styles/color';

const styles = StyleSheet.create({
        container: {
            flex: 1,
    
        },
        hearderText:{
            textTransform:'uppercase',
            fontSize:scale(18),
            fontWeight:'bold',
            color:colors.themeColor,
        
    
        },
        headerStyle: {
            backgroundColor: colors.white,
            paddingVertical: moderateVerticalScale(24),
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 6 },
            shadowOpacity: 0.4,
            justifyContent: 'space-between',
            flexDirection:'row',
            alignItems:'center',
            paddingHorizontal:moderateScale(16),
            // backgroundColor:'pink'
        },
        flatStyle:{
            backgroundColor: colors.white,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            padding:moderateScale(16),
            borderRadius:moderateScale(14),
            margin:2,

        },
        flexView:{ 
            flexDirection: 'row', 
            alignItems: 'center',
            justifyContent:'space-between' },

    });

export default styles;