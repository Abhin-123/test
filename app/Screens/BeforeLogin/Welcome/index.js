import React, { Component, useState, useRef  } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import ProgressBar from '../../../../app/service/ProgressBar';
import { connect } from 'react-redux';
import { useNavigation,useRoute } from '@react-navigation/native';

const Welcome = (props) => {

    const navigation = useNavigation();
    const pass = useRef()
    const [email, setEmail]= useState("");
  
    React.useEffect( ()=>{
      
    },[])
   
    return (
        <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
            <Text>This is a welcome screen, click on get started to start</Text>
            <TouchableOpacity style={{marginVertical:20}} onPress={()=>{props.navigation.navigate("Login")}}>
                <Text> Get started </Text>
            </TouchableOpacity>             
        </View>
    )
    
}

function mapStateToProps(state) {
    const { hideProgress } = state.loginReducer;
    return { hideProgress }
}

export default connect(mapStateToProps, { })(Welcome)