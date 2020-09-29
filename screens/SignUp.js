import React from 'react';
import { Text, View, StyleSheet, ScrollView,TouchableOpacity,Dimensions,Platform,TextInput} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {LinearGradient} from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { StatusBar } from 'expo-status-bar';

const SignIn =({navigation}) => {
    const [data, SetData] = React.useState({
        password:'',
        confirmPswd:'',
        email:'',
        check_textInputChange:false,
        secureTextEntry: true,
        confirmsecureTextEntry: true
    });

    const textChangeInput =(val) => {
        if( val.length != 0){
        SetData({
            ...data,
            email:val,
            check_textInputChange:true,
        });
    } else{
        SetData({
            ...data,
            email:val,
            check_textInputChange:false,
        });
    }
    }
    // pswd
    const handleChangePswd =(val) => {
        SetData({
            ...data,
            password:val
        })
    }
    const updateSecurityText = () => {
        SetData({
            ...data,
            secureTextEntry:!data.secureTextEntry
        })
    }
    //confirm
    const handleConfirmPswd =(val) => {
        SetData({
            ...data,
            confirmPswd:val
        })
    }
    const updateConfirmSecurityText = () => {
        SetData({
            ...data,
            confirmsecureTextEntry:!data.confirmsecureTextEntry
        })
    }

    return(
        
      <View style={styles.container}>
          
          <StatusBar backgroundColor="#EEFCF6" barStyle="light-content"/>
       <View style={styles.header}> 
           <Text style={styles.text_header}>Register Now!</Text>
       </View>
       {/* <ScrollView> */}
       <Animatable.View 
       animation="fadeInUpBig"
       style={styles.footer}> 
           <Text style={styles.text_footer}>Email</Text>
           <View style={styles.action}>
               <FontAwesome
               name="user-o"
               color="#05735a"
               size={20}
               /> 
               <TextInput
               placeholder="Enter MailId"
               color={styles.textInput}
               autoCapitalize="none"
               onChangeText={(val) => textChangeInput(val)}
               />
               {data.check_textInputChange ?
               <Animatable.View
               animation="bounceIn"
               >
               <Feather
               name="check-circle"
               color="green"
               size={20}
               />  
                </Animatable.View>
               : null }
              
           </View>
           <Text style={[styles.text_footer, {
               marginTop:35
               }]}>Password</Text>
           <View style={styles.action}>
               <FontAwesome
               name="lock"
               color="#05735a"
               size={20}
               /> 
               <TextInput
               placeholder="Password"
               secureTextEntry={data.secureTextEntry?true : false}
               color={styles.textInput}
               autoCapitalize="none"
               onChangeText={(val) => handleChangePswd(val)}
               />
               <TouchableOpacity 
               onPress={updateSecurityText}
               >
                   {data.secureTextEntry ?
               <Feather
               name="eye-off"
               color="grey"
               size={20}
               /> 
               : 
               <Feather
               name="eye"
               color="grey"
               size={20}
                   /> }
               </TouchableOpacity>
               </View>
               <Text style={[styles.text_footer, {
               marginTop:35
               }]}> Confirm Password</Text>
           <View style={styles.action}>
               <FontAwesome
               name="lock"
               color="#05735a"
               size={20}
               /> 
               <TextInput
               placeholder=" Confirm Password"
               secureTextEntry={data.confirmsecureTextEntry?true : false}
               color={styles.textInput}
               autoCapitalize="none"
               onChangeText={(val) => handleConfirmPswd(val)}
               />
               <TouchableOpacity 
               onPress={updateConfirmSecurityText}
               >
                   {data.secureTextEntry ?
               <Feather
               name="eye-off"
               color="grey"
               size={20}
               /> 
               : 
               <Feather
               name="eye"
               color="grey"
               size={20}
                   /> }
               </TouchableOpacity>
               </View>
               <View style={styles.button}> 
                    <LinearGradient 
                    colors={['#D6F0E4','#6F9785']}
                    style={styles.signIn}
                    >
                    <Text style={[styles.textSign,{ color:'#fff'}]}>Sign Up</Text>
                    </LinearGradient>
                    <TouchableOpacity onPress={() => navigation.navigate('SignIn')}
                    style={[styles.signIn,{
                        borderColor:"#6F9785",
                        borderWidth:1,
                        marginTop:15
                    }]}
                    >
                        <Text style={styles.textSign,{
                            color:"#6F9785"
                        }}>Sign In</Text>
                    </TouchableOpacity>
               </View>
          
       </Animatable.View>
       {/* </ScrollView> */}
      </View>
     
    )
  }

  export default SignIn;

  const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#D9EFE5'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#05375a',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 20,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });