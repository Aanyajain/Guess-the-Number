import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import Colors from '../constants/colors';

const MainButton=props=>{
    return(
        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.buttonCont}>
                <Text style={styles.button}>
                    {props.children}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles=StyleSheet.create({
buttonCont:{
    backgroundColor:Colors.primary,
    paddingHorizontal:20,
    paddingVertical:10,
    borderRadius:20
},
button:{
    color:'white',
    fontFamily:'open-sans',
    fontSize:18
}
});

export default MainButton;