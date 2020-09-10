import React,{useState,useRef,useEffect} from 'react';
import {View,StyleSheet,Text, Button,Alert,ScrollView,FlatList} from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import MainButton from '../components/MainButton';
import {Ionicons} from '@expo/vector-icons';

const generateRandomNum=(min,max,exclude)=>{
    min=Math.ceil(min);
    max=Math.floor(max);
    const randNum=Math.floor(Math.random()*(max-min))+min;
    if(randNum==exclude)
    return generateRandomNum(min,max,exclude)
    else
    return randNum;
};

const renderList=(numOfRound,itemData)=>(
    <View style={styles.list}>
        <Text>#{numOfRound-itemData.index}</Text>
        <Text>{itemData.item}</Text>
    </View>
);
const GameScreen=props=>{
    const initialGuess=generateRandomNum(1,100,props.userChoice);
    const [currentGuess,setCurrentGuess]=useState(initialGuess);
    // const [rounds,setRounds]=useState(0);
    const [pastGuesses,setPastGuesses]=useState([initialGuess.toString()]);
    const currentLow=useRef(1);
    const currentHigh=useRef(100);
    const {userChoice,onGameOver}=props;
    
    useEffect(()=>{
        if(currentGuess===userChoice)
        {
            onGameOver(pastGuesses.length);
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
            currentLow.current=currentGuess+1;
        }
        const nextNum=generateRandomNum(currentLow.current,currentHigh.current,currentGuess);
        setCurrentGuess(nextNum);
        // setRounds(curRounds=>curRounds+1);
        setPastGuesses(curPastGuess=>[nextNum.toString(),...curPastGuess])
    };

    return(
    <View style={styles.screen}>
        <Text>Opponent's guess</Text>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card style={styles.buttonCont}>
            <MainButton onPress={nextGuessHandler.bind(this,'lower')}>
                <Ionicons name="md-remove" size={24} color="white" />
            </MainButton>
            <MainButton onPress={nextGuessHandler.bind(this,'greater')}>
            <Ionicons name="md-add" size={24} color="white" />
            </MainButton>
        </Card>
        <View style={styles.item}>
        <FlatList keyExtractor={(item)=>{item}} 
        data={pastGuesses} 
        renderItem={renderList.bind(this,pastGuesses.length)}
        contentContainerStyle={styles.itemValue}
        />
      {/* <ScrollView contentContainerStyle={styles.itemValue}>
          {pastGuesses.map((guess,index)=>(renderList(guess,pastGuesses.length-index)))}
      </ScrollView> */}
      </View>
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
    },
    item:{
        width:'60%',
        flex:1,
    },
    itemValue:{
        flexGrow:1,
        alignItems:'center',
        justifyContent:'flex-end'
    },
    list:{
        borderColor:'#ccc',
        padding:15,
        marginVertical:10,
        borderWidth:1,
        backgroundColor:'white',
        flexDirection:'row',
        justifyContent:'space-between',
        width:'60%'
    },
});

export default GameScreen;