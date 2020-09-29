import React from 'react';
import {View,Text,StyleSheet,Image,Dimensions,ScrollView} from 'react-native';
import MainButton from '../components/MainButton';

const GameOverScreen=props=>{
    return (
        <ScrollView>
        <View style={styles.screen}>
            <Text>The Game is over!!</Text>
            <View style={styles.cont}>
            <Image source={require('../assets/success.png')}
            style={styles.img}
            resizeMode="cover"
            />
            </View>
           <Text style={styles.textCont}>Your phone needed{' '} <Text style={styles.highlight}>{props.roundNum}</Text> rounds
            to guess{' '} <Text style={styles.highlight}>{props.userNum}</Text></Text>
           <View style={styles.button1}><MainButton onPress={props.onRestart}>NEW GAME</MainButton></View>
        </View>
        </ScrollView>
    );
};

const styles=StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    cont:{
     width:Dimensions.get('window').width*0.7,
     height:Dimensions.get('window').width*0.7,
     borderRadius:Dimensions.get('window').width*0.7/2,
     borderWidth:2,
     borderColor:'grey',
     overflow:'hidden',
     marginVertical:Dimensions.get('window').height/20
    },
    img:{
        height:'100%',
        width:'100%',
    },
    textCont:{
        fontSize:Dimensions.get('window').height<300?14:18,
        margin:10
    },
    highlight:{
        color:'gray',
        fontFamily:'open-sans-bold',
        fontSize:Dimensions.get('window').height<300?14:18,
        marginHorizontal:20,
    },
    button1:{
        margin:20
    }
});

export default GameOverScreen;