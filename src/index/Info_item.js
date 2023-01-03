import { StyleSheet, Text, View, Image, TouchableOpacity ,ToastAndroid} from "react-native";
import React, { useState } from "react";
import Main from "./Main";
import AxiosInstance from ".././helper/AxiosHelper";


const Info_item = (props) => {
 const {navigation,route:{params:{id,name,price,img,number1}}} = props; 
  const [number, setnumber] = useState(number1);
  const deleteproduct = async()=>{
    try {
      const product = id;
      const body = {product};
      const result = await AxiosInstance().delete(`/product/${product}`, body);
      if (result) {
        ToastAndroid.show("xóa sản phẩm thành công", ToastAndroid.SHORT);
        navigation.navigate('Main');
    }
    } catch (error) {
      console.error(error);
    }
  };
  const onplus = () => {
    if (number >= 0) {
      setnumber(number + 1);
    }
  };
  const onminus = () => {
    if (number > 0) {
      setnumber(number - 1);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.name_products}>{name}</Text>
      <View style={styles.img_products}>
        <Image
          source={{uri:img}}
          style={styles.imgsize}
        ></Image>
        <View>
          <Text style={styles.text_price}>giá tiền :{price}</Text>
          <View style={styles.viewminmax}>
            <TouchableOpacity onPress={onminus}>
              <Image source={require("../images/minus.png")}></Image>
            </TouchableOpacity>
            <Text>{number}</Text>
            <TouchableOpacity onPress={onplus}>
              <Image source={require("../images/plus.png")}></Image>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.viwe_btn}>
        <TouchableOpacity style={styles.btn_market}>
            <Text style={styles.text_content}>Back to market</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn_market} onPress={deleteproduct}>
            <Text style={styles.text_content}>Delete product</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Info_item;

const styles = StyleSheet.create({
    text_content:{
        textAlign: 'center',
        lineHeight: 68,
        fontSize:18,
        color:"white"
    },
  viwe_btn: {
    paddingTop:100,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  btn_market: {
    borderRadius:50,
    backgroundColor:"#228B22",
    width: "45%",
    height: 68,
  },
  text_price: {
    paddingTop:20,
    textAlign: "center",
    fontSize: 20,
  },
  viewminmax: {
    padding: 30,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  imgsize: {
    resizeMode:'contain',
    borderWidth: 1,
    borderColor: "#3C7363",
    borderRadius: 50,
    width: 325,
    height: 300,
    resizeMode: "contain",
  },
  img_products: {
    paddingTop:50,
    width: "100%",
    height: "100%",
  },
  name_products: {
    fontSize: 24,
    fontWeight: "bold",
  },
  container: {
    paddingTop: 50,
    padding: 30,
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
});
