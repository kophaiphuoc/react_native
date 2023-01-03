import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import AxiosInstance from ".././helper/AxiosHelper";
import React, { useState,useEffect} from "react";

////
const Main = ({navigation}) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const loadProducts = async () => {
        const result = await AxiosInstance().get('student/allstudent');
        setProducts(result);
        console.log(result);
    }
    loadProducts();
}, []);
const buyproducts = async () => {
  try {
    const id_cart = products.id;
   
    const idcart = await AxiosInstance().post('/product/allproducts/cart');
  } catch (error) {
    console.error(error);
  }
};
  const renderItem = ({ item }) => {
    return (
      <Item
        id={item._id}
        name={item.hoten}
        price={item.diemjava}
        quantity={item.diemhtml}
      />
    );
  };
  const Item = ({ id, name, price, quantity }) => {
    const [number1, setnumber] = useState(0);
    const onplus = () => {
      if(number1 >= 0){
        setnumber(number1 + 1);
      } 
    };
    const onminus = () => {
      if(number1 >0){
        setnumber(number1 - 1);
      } 
    };
    const test =() => {
      console.log(id);
    };

    return (
      <View style={styles.containerflashlist}>
        <Text> {id}</Text>
        <Text> {name}</Text>
        <Text> {price}</Text>
        <Text> {quantity}</Text>
        {/* <View style={styles.imgsize}>
          <TouchableOpacity  onPress={() => {navigation.navigate('info_item',{id:id,name:name,price:price,img:img,number1:number1})}}>
          <Image source={{uri: img}} style={{width: 150, height: 200,borderRadius:20}} />
          </TouchableOpacity>
        </View> */}
        <View style={styles.viewminmax}>
          <TouchableOpacity onPress={onminus}>
            <Image source={require("../images/minus.png")}></Image>
          </TouchableOpacity>
          <Text>{number1}</Text>
          <TouchableOpacity onPress={onplus}>
            <Image source={require("../images/plus.png")}></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.viewbuttonn}>
          <TouchableOpacity style={styles.butotonbuy}>
            <Text style={styles.textbuy}>mua hàng</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.butotonbuy}>
            <Text style={styles.textbuy}>thêm vào giỏ hàng</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textcontent}>Monkey Market</Text>
      <FlatList
        numColumns={2}
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  viewbuttonn: {},
  viewminmax: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  textbuy: {
    lineHeight: 31,
    fontSize: 14,
  },
  butotonbuy: {
    backgroundColor: "#E8F1FD",
    borderRadius: 10,
    alignItems: "center",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#3C7363",
    width: 155,
    height: 35,
    marginTop: 6,
  },
  textcontent: {
    color: "#5C821A",
    fontWeight: "bold",
    fontSize: 30,
  },
  imgsize: {
    paddingTop: 5,
    alignItems: "center",
  },
  containerflashlist: {
    borderRadius: 20,
    margin: 8,
    borderWidth: 1,
    backgroundColor: "#DEF7AC",
    padding: 10,
    width: 180,
  },
  container: {
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#DEF7AC",
    paddingTop: 65,
  },
});
