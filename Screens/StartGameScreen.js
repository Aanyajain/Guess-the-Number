import React,{useState,useEffect} from 'react';
import {View,Text,StyleSheet, TextInput, Button,TouchableWithoutFeedback,Keyboard,Alert,Dimensions,ScrollView,KeyboardAvoidingView} from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import Colors from '../constants/colors';
import NumberContainer from '../components/NumberContainer';
import MainButton from '../components/MainButton';

const StartGameScreen=props=>{
    const [enteredValue,setEnteredValue]=useState('');
    const [confirmed,setConfirmed]=useState(false);
    const [selectedNumber,setSelectedNumber]=useState();
    const [buttonWidth,setButtonWidth]=useState(Dimensions.get('window').width/4);

    
    const numberHandler=inputText=>{
        setEnteredValue(inputText.replace(/[^0-9]/g,''));
    }

    const resetHandler=()=>{
        setEnteredValue('');
        setConfirmed(false);
    };
     
    useEffect(() => {
    
        const updateLayout=()=>{
            setButtonWidth(Dimensions.get('window').width/4);
        };
    
        Dimensions.addEventListener('change' ,updateLayout);
        return ()=>{
            Dimensions.removeEventListener('change' ,updateLayout);
        };
    });

    const confirmHandler=()=>{
        const chosenNum=parseInt(enteredValue);
        if(isNaN(chosenNum) || chosenNum<=0 || chosenNum>99)
        {
            Alert.alert('Invalid Number!','Number should lie in range of 1-99',
            [{text:'Okay',style:'destructive',onPress:resetHandler}])
            return;
        }
        setConfirmed(true);
        setSelectedNumber(chosenNum);
        setEnteredValue('');
        Keyboard.dismiss();
    };

    let confirmedOutput;
    if(confirmed)
    {
    confirmedOutput=(
    <Card style={styles.confirmCont}>
    <Text>You Selected:</Text>
     <NumberContainer>{selectedNumber}</NumberContainer>
     <MainButton onPress={()=>props.onStartGame(selectedNumber)}>START GAME
     </MainButton>
    </Card>
    );
    }
    return(
        <ScrollView>
        <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30}>
        <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
        <View style={styles.screen}>
        <Text style={styles.title}>Game Mode ON!!</Text>
        <Card style={styles.inputContainer}>
            <Text>Select a number</Text>
            <Input style={styles.input} 
            blurOnSubmit 
            autoCapitalize='none' 
            autoCorrect={false}
            keyboardType='numeric' 
            maxLength={2}
            onChangeText={numberHandler}
            value={enteredValue}
            />
            <View style={styles.buttonCont}>
            <View style={{width:buttonWidth}}><Button title="Reset" onPress={resetHandler} color={Colors.accent} /></View>
            <View style={{width:buttonWidth}}><Button title="Confirm" onPress={confirmHandler} color={Colors.primary} /></View>
            </View>     
        </Card>
        {confirmedOutput}
        </View>
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
        </ScrollView>
    );
};

const styles=StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center',
    },
    title:{
        fontSize:20,
        marginVertical:10,
        fontFamily:'open-sans-bold',
    },
    inputContainer:{
        width:'80%',
        minWidth:300,
        maxWidth:'95%',
        alignItems:'center'
    },
    buttonCont:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        paddingHorizontal:10,
    },
    // button:{
    //     // width:100
    //     width:Dimensions.get('window').width/4
    // },
    input:{
        width:30,
        textAlign:'center'
    },
    confirmCont:{
        marginTop:20,
        alignItems:'center'
    }
});

export default StartGameScreen;