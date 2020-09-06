import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import Colors from '../constants/colors';

const NumberContainer=props=>{
    return (
    <View style={styles.cont}>
    <Text style={styles.num}>
        {props.children}
    </Text>
   </View>
    );
};


const styles=StyleSheet.create({
    cont:{
        borderWidth:2,
        borderColor:Colors.accent,
        padding:10,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        marginVertical:10
    },
    num:{
        color:Colors.accent,
        fontSize:22
    }
});

export default NumberContainer;