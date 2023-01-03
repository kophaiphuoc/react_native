import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ToastAndroid
} from "react-native";
import AxiosInstance from ".././helper/AxiosHelper";
import React, { useState,useEffect} from "react";


const Login = ({navigation}) => {
  const [user,setuser]= useState([]);
  useEffect(() => {
    const alluser = async () => {
        const result = await AxiosInstance().get('/user/getalluser');
        setuser(result);
    }
    alluser();
    
    
}, []);
const [username1, setUsername] = useState('');
const [password1, setPassword] = useState('');
const checklogin =  () => {
   for(var i = 0; i < user.length; i++) {
    //console.log(user[i].password);
    if(user[i].username.text === username1.text && user[i].password.text === password1.text){
      ToastAndroid.show("đăng nhập thành công", ToastAndroid.SHORT);
      navigation.navigate('Main');
    }
    else{
      ToastAndroid.show("đăng nhập thất bại",ToastAndroid.SHORT);
    }
};
}
//navigation.navigate('Main')}
  
  return (
    <View style={styles.container}>
      <Image
        source={require(".././images/logo_monkey.png")}
        style={styles.imgsize}
      ></Image>
      <Text style={styles.textcontent}>Market Monkey</Text>
      <View style={styles.viewinputuser}>
        <TextInput style={styles.inputuser} placeholder="User Name..."
        onChangeText={(text) => setUsername(text)}
        value={username1}></TextInput>
        <TextInput style={styles.inputuser} placeholder="Pass Word..."
        onChangeText={(text) => setPassword(text)}
        value={password1}></TextInput>
        <View style={styles.viewloginuser}>
          <TouchableOpacity style={styles.buttonlogin} onPress={() => navigation.navigate('Sigin')}>
            <Text style={styles.textcontent}>Sigin</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonlogin} onPress={checklogin}>
            <Text style={styles.textcontent}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  viewloginuser: {
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  textbuttonlogin: {
    color: "#DEF7AC",
    fontWeight: "bold",
    fontSize: 30,
  },
  buttonlogin: {
    paddingTop: 10,
    marginTop: 40,
    alignItems: "center",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#DEF7AC",
    width: "40%",
    height: 68,
  },
  viewinputuser: {
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  inputuser: {
    marginTop: 25,
    paddingLeft: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#DEF7AC",
    width: "100%",
    height: 48,
  },
  textcontent: {
    color: "#DEF7AC",
    fontWeight: "bold",
    fontSize: 30,
  },
  imgsize: {
    width: 300,
    height: 300,
  },
  container: {
    padding: 10,
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#5C821A",
  },
});
