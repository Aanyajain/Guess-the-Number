import React,{useState,useRef,useEffect} from 'react';
import {View,StyleSheet,Text, Button,Alert} from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import MainButton from '../components/MainButton';

const generateRandomNum=(min,max,exclude)=>{
    min=Math.ceil(min);
    max=Math.floor(max);
    const randNum=Math.floor(Math.random()*(max-min))+min;
    if(randNum==exclude)
    return generateRandomNum(min,max,exclude)
    else
    return randNum;
}
const GameScreen=props=>{
    const [currentGuess,setCurrentGuess]=useState(generateRandomNum(1,100,props.userChoice));
    const [rounds,setRounds]=useState(0);

    const currentLow=useRef(1);
    const currentHigh=useRef(100);
    const {userChoice,onGameOver}=props;
    
    useEffect(()=>{
        if(currentGuess===userChoice)
        {
            onGameOver(rounds);
        }
    },[currentGuess,userChoice,onGameOver]);
    
    const nextGuessHandler=dir=>{
        if((dir==='lower' && currentGuess<props.userChoice) || (dir==='greater' && currentGuess>props.userChoice))
        {
            Alert.alert('Don\'t lie!','Please enter a valid option',[{text:'Sorry!',
        style:'cancel'}]);
        return;
        }
        if(dir==='lower')
        {
            currentHigh.current=currentGuess;
        }
        else{
            currentLow.current=currentGuess;
        }
        const nextNum=generateRandomNum(currentLow.current,currentHigh.current,currentGuess);
        setCurrentGuess(nextNum);
        setRounds(curRounds=>curRounds+1);
    };

    return(
    <View style={styles.screen}>
        <Text>Opponent's guess</Text>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card style={styles.buttonCont}>
            <MainButton onPress={nextGuessHandler.bind(this,'lower')}>LOWER</MainButton>
            <MainButton onPress={nextGuessHandler.bind(this,'greater')}>GREATER</MainButton>
        </Card>

    </View>
    );
};

const styles=StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center'
    },
    buttonCont:{
        flexDirection:'row',
        justifyContent:'space-around',
        width:300,
        maxWidth:'80%',
        marginTop:20
    }
});

export default GameScreen;