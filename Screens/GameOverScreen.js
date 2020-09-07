import React from 'react';
import {View,Text,StyleSheet,Button,Image} from 'react-native';

const GameOverScreen=props=>{
    return (
        <View style={styles.screen}>
            <Text>The Game is over!!</Text>
            <View style={styles.cont}>
            {/* <Image source={require('../assets/gameover.png')} */}
            <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQWUGhDXkgolW8CVthSMpAxo3UmrOw3OrJuzA&usqp=CAU'}}
            style={styles.img}
            resizeMode="cover"
            />
            </View>
           <Text>The Number of Rounds: {props.roundNum}</Text>
           <Text>Number was : {props.userNum}</Text>
           <Button title="NEW GAME" onPress={props.onRestart} />
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

    }
   
});

export default GameOverScreen;