import React from 'react';
import {StyleSheet,View,Text} from 'react-native';
import Colors from '../constants/colors';

const Header=props=>{
    return(
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    );
};

const styles=StyleSheet.create({
    header:{
        alignItems:'center',
        justifyContent:'center',
        paddingTop:36,
        height:90,
        width:'100%',
        backgroundColor:Colors.primary
    },
    headerTitle:{
        color:'white',
        fontSize:18
    }
})

export default Header;