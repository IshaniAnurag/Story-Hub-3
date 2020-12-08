import * as React from 'react';
import {View,Button,TouchableOpacity,Stylesheet,Text,TextInput, KeyboardAvoidingView} from 'react-native';
import{Header} from 'react-native-elements';
import firebase from 'firebase';


export default class WriteStoryScreen extends React.Component{
    constructor(){
        super();
        this.state={
AuthorName:'',
StoryTitle:'',
Story:''
        }
    }

    submitStory = async({type,data})=>{
        this.setState({
            AuthorName:data,
            StoryTitle:data,
            buttonState:'normal',
           Story:data
        })
    }
    render(){
        return(
            <KeyboardAvoidingView style={styles.container}>

            
            <View>
                <Header centerComponent={{text:'STORY HUB',style:{color:'Blue',fontSize:'20'}}}/>
           <TouchableOpacity>
               <TextInput style={styles.textinput} onChangeText={(text)=>{
                   this.setState({AuthorName:text});
               }}
               value={this.state.AuthorName}></TextInput>

               </TouchableOpacity>
               <TouchableOpacity>
                   <TextInput style={styles.textInput} onChangeText={(text)=>{
                       this.setState({StoryTitle:text});
                   }}
                   value={this.state.StoryTitle}></TextInput>
               </TouchableOpacity>
               <TouchableOpacity>
                   <TextInput style={styles.textInput} onChangeText={(text)=>{
                       this.setState({Story:text});
                   }}
                   value={this.state.Story}></TextInput>
               </TouchableOpacity>
               <TouchableOpacity>
                   <Button title='SUBMIT' color='Blue' onPress={async()=>{this.submitStory()}}/>
               </TouchableOpacity>
                </View>
                </KeyboardAvoidingView>
        )
    }
}

const styles=Stylesheet.create({
    textinput:{
        color:'black',
        fontSize:20,
        border:'solid'
    },
    header:{
        color:'Blue',
        fontSize:'30'
    }
})