import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,TouchableNativeFeedback,Platform} from 'react-native';
import Colors from '../constants/colors';

const MainButton=props=>{
    let ButtonComponent=TouchableOpacity;

    if(Platform.Version>=21)
    {
        ButtonComponent=TouchableNativeFeedback;
    }
    return(
        <View style={styles.mainCont}>
        <ButtonComponent onPress={props.onPress}>
            <View style={styles.buttonCont}>
                <Text style={styles.button}>
                    {props.children}
                </Text>
            </View>
        </ButtonComponent>
        </View>
    );
};

const styles=StyleSheet.create({
mainCont:{
    borderRadius:20,
    overflow:'hidden'
},
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