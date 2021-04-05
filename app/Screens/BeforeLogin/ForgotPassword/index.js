import React, { Component } from 'react';
import { SafeAreaView,Text,Alert,TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import {Login,Logout} from '../../../Redux/Actions/login_action'

 class ForgotScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
          hideProgress:true
        }
    }


// Email/Password Signin
_signIn=()=>{

  this.props.Login("Test")
}


    render() {
      return  (
        <SafeAreaView style={{flex:1, alignItems:'center',justifyContent:'center'}}>
          <TouchableOpacity style={{marginVertical:20}}>
              <Text>
              ForgotScreen
              </Text>
          </TouchableOpacity>
        </SafeAreaView>
                          
      )
    }
}



function mapStateToProps(state) {
    const { hideProgress } = state.loginReducer;
    return { hideProgress}
}

export default connect(mapStateToProps, {Login,Logout})(ForgotScreen)