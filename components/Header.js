import React from 'react';
import {StyleSheet,View,Text,Platform} from 'react-native';
import Colors from '../constants/colors';

const Header=props=>{
    return(
        <View style={{...styles.headerBase,...Platform.select({
            ios:styles.headerIOS,
            android:styles.headerAndroid
        })}}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    );
};

const styles=StyleSheet.create({
    headerBase:{
        alignItems:'center',
        justifyContent:'center',
        paddingTop:36,
        height:90,
        width:'100%',
    },
    headerIOS:{
        backgroundColor:'white',
        borderColor:'#ccc',
        borderBottomWidth:1
    },
    headerAndroid:{
        backgroundColor:Colors.primary,
    },
    headerTitle:{
        color:'white',
        fontSize:18,
        fontFamily:'open-sans-bold'
    }
})

export default Header;