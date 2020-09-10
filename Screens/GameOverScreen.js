import React from 'react';
import {View,Text,StyleSheet,Button,Image} from 'react-native';
import MainButton from '../components/MainButton';

const GameOverScreen=props=>{
    return (
        <View style={styles.screen}>
            <Text>The Game is over!!</Text>
            <View style={styles.cont}>
            <Image source={require('../assets/success.png')}
            style={styles.img}
            resizeMode="cover"
            />
            </View>
           <Text>Your phone needed{' '} <Text style={styles.highlight}>{props.roundNum}</Text>
            to guess{' '} <Text style={styles.highlight}>{props.userNum}</Text> </Text>
           <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
        </View>
    );
};

const styles=StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    cont:{
     borderRadius:150,
     borderWidth:2,
     borderColor:'grey',
     width:300,
     height:300,
     overflow:'hidden',
     marginVertical:10
    },
    img:{
        height:'100%',
        width:'100%',

    },
    highlight:{
        color:'gray',
        fontFamily:'open-sans-bold',
        marginHorizontal:20
    }
   
});

export default GameOverScreen;