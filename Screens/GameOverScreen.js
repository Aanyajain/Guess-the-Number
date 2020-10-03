import React,{useState,useEffect} from 'react';
import {View,Text,StyleSheet,Image,Dimensions,ScrollView,SafeAreaView} from 'react-native';
import MainButton from '../components/MainButton';

const GameOverScreen=props=>{
    const [deviceWidth, setDeviceWidth] = useState(Dimensions.get('window').width);
    const [deviceHeight, setDeviceHeight] = useState(Dimensions.get('window').height);

    useEffect(() => {
        const updateLayout = () => {
            setDeviceWidth(Dimensions.get('window').width);
            setDeviceHeight(Dimensions.get('window').height);
    };

    Dimensions.addEventListener('change', updateLayout);

    return () => {
            Dimensions.removeEventListener('change', updateLayout);
        };
    });

    return (
        <ScrollView>
        <View style={styles.screen}>
            <Text>The Game is over!!</Text>
            <View style={{
                 width:deviceWidth<500?deviceWidth*0.6:deviceWidth*0.2,
                 height:deviceHeight?deviceHeight*0.4:deviceWidth*0.2,
                 borderRadius:deviceWidth*0.7/2,
                 borderWidth:1,
                 borderColor:'grey',
                 overflow:'hidden',
                 marginVertical:deviceHeight/30,
            }}>
            <Image source={require('../assets/success.png')}
            style={styles.img}
            resizeMode="cover"
            />
            </View>
           <Text style={{...styles.textCont,...{
               fontSize:deviceHeight<300?14:18,
           }}}>Your phone needed{' '} <Text style={styles.highlight}>{props.roundNum}</Text> rounds
            to guess{' '} <Text style={{...{
                  color:'gray',
                  fontFamily:'open-sans-bold',
                  fontSize:deviceHeight<300?14:18,
                  marginHorizontal:20,
            }}}>{props.userNum}</Text></Text>
           <View style={{...styles.button1,...{
               marginVertical:deviceHeight/60
           }}}>
            <MainButton onPress={props.onRestart}>NEW GAME</MainButton></View>
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
    img:{
        height:'100%',
        width:'100%',
    },
    textCont:{
        margin:10
    },   
});

export default GameOverScreen;