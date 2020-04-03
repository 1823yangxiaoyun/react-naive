import React from 'react';
import { Icon} from '@ant-design/react-native';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TextInput
} from 'react-native';
const List = () => {
  return (
    <>
    <ScrollView >
    <View style={{
      flexDirection:'row',
      justifyContent:"center"
    }}
    >
      <TextInput placeholder="请输入商品名称" placeholderTextColor="#999999" style={styles.sou}/>
      <Icon name="search" style={{position:"absolute",top:18,left:"88%"}} />
    </View>
    <View style={styles.firbox} >
        <Text style={styles.txt0}>综合</Text>
        <Text style={styles.txt}> 销量</Text>
        <Text style={styles.txt}>新品</Text>
        <Text style={styles.txt}>价格</Text>
        <Text style={styles.txt}>信用</Text>
    </View>
    <View style={styles.secbox} >
      <View style={styles.box}>
        <Image  style={{height:"40%",width:"90%",marginTop:60,marginLeft:10}} source={require("../images/11.jpg")}/>
        <Text style={styles.p1}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
        <Text style={styles.p2}>&nbsp;&nbsp;&nbsp;36.00</Text>
      </View>
      <View style={styles.box}>
        <Image   style={{height:"40%",width:"90%",marginTop:60,marginLeft:10}} source={require("../images/22.jpg")}/>
        <Text style={styles.p1}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
        <Text style={styles.p2}>&nbsp;&nbsp;&nbsp;36.00</Text>
      </View>
      <View style={styles.box}>
        <Image   style={{height:"40%",width:"90%",marginTop:60,marginLeft:10}} source={require("../images/11.jpg")}/>
        <Text style={styles.p1}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
        <Text style={styles.p2}>&nbsp;&nbsp;&nbsp;36.00</Text>
      </View>
      <View style={styles.box}>
        <Image   style={{height:"40%",width:"90%",marginTop:60,marginLeft:10}} source={require("../images/22.jpg")}/>
        <Text style={styles.p1}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
        <Text style={styles.p2}>&nbsp;&nbsp;&nbsp;36.00</Text>
      </View>
      <View style={styles.box}>
        <Image   style={{height:"40%",width:"90%",marginTop:60,marginLeft:10}} source={require("../images/11.jpg")}/>
        <Text style={styles.p1}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
        <Text style={styles.p2}>&nbsp;&nbsp;&nbsp;36.00</Text>
      </View>
      <View style={styles.box}>
        <Image   style={{height:"40%",width:"90%",marginTop:60,marginLeft:10}} source={require("../images/22.jpg")}/>
        <Text style={styles.p1}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
        <Text style={styles.p2}>&nbsp;&nbsp;&nbsp;36.00</Text>
      </View>

    </View>
    </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  
  sou:{
    backgroundColor:"#eeeeee",
    borderRadius:4,
    height:40,
    width:"90%",
    margin:10
  },
  firbox:{
    flexDirection:'row',
    justifyContent:"center",
    flexWrap:"wrap",
    borderTopColor:"#e8e8e8",
    borderTopWidth:1,
    borderBottomColor:"#e8e8e8",
    borderBottomWidth:1 ,
  },
  txt:{
    height:40,
    width:"20%",
    fontSize:15,
    color:"#333333",
    textAlign:"center",
    textAlignVertical:"center"
  },
  txt0:{
    height:40,
    width:"20%",
    fontSize:15,
    color:"#f23030",
    textAlign:"center",
    textAlignVertical:"center"
  },
  secbox:{
    flexDirection:'row',
    justifyContent:"space-evenly",
    flexWrap:"wrap",
    backgroundColor:"#f4f4f4"
  },
  box:{
    height:320,
    width:"45%",
    backgroundColor:"#ffffff",
    marginTop:10,
  },
  p1:{
    color:"#666666",
    fontSize:13,
    lineHeight:22,
    marginTop:30
  },
  p2:{
    color:"#f23030",
    marginTop:10
  }


});

export default List;