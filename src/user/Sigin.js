import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity,ToastAndroid } from 'react-native';
import AxiosInstance from ".././helper/AxiosHelper";
import React, { useState} from "react";

const Sigin = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [numberphone, setnumberphone] = useState('');
  const register = async () => {
    try {
      const body = {username,password,numberphone} ;
      const result = await AxiosInstance().post('/user/adduser', body);
      if (result){
        ToastAndroid.show("đăng ký thành công", ToastAndroid.SHORT);
        navigation.navigate('Login');
      }
      else{
        ToastAndroid.show("đăng ký thất bại");
      } 
    } catch (error) {
      console.error(error);
    }
  };
  const login = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <Image source={require(".././images/sigin.png")} style={styles.imgsize}></Image>
      <Text style={styles.textcontent}>Market Monkey</Text>
      <View style={styles.viewinputuser}>
        <TextInput style={styles.inputuser} placeholder="User Name..."
         onChangeText={(text) => setUsername(text)}
         value={username}>
        </TextInput>
        <TextInput style={styles.inputuser} placeholder="PassWord..."
         onChangeText={(text) => setPassword(text)}
         value={password}>
        </TextInput>
        <TextInput style={styles.inputuser} placeholder="numberphone"
        onChangeText={(text) => setnumberphone(text)}
        value={numberphone}>
        </TextInput>
        <TouchableOpacity style={styles.buttonlogin} onPress={register}>
        <Text style={styles.textcontent}>Sigin</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonlogin} onPress={login}>
        <Text style={styles.textcontent}>Login</Text>
      </TouchableOpacity>
      </View>
      
    </View>
  )
}

export default Sigin

const styles = StyleSheet.create({
  textbuttonlogin:{
    color: "#DEF7AC",
    fontWeight: "bold",
    fontSize: 30,
  },
  buttonlogin: {
    paddingTop: 10,
    marginTop: 40,
    alignItems: 'center',
    borderRadius: 30,
    borderWidth:1,
    borderColor: '#DEF7AC',
    width: '40%',
    height: 68,
  },
  viewinputuser:{
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  inputuser:{
    marginTop:25,
    paddingLeft: 10,
    borderRadius: 20,
    borderWidth:1,
    borderColor: '#DEF7AC',
    width: '100%',
    height: 48,
  },
  textcontent: {
    color: "#DEF7AC",
    fontWeight: "bold",
    fontSize: 30,
  },
  imgsize: {
    width: 300,
    height:300,
  },
  container:{
    padding: 10,
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor:'#5C821A',
  },
})