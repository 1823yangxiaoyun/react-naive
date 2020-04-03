import React, { Component } from 'react';
import { View, Text, Image, TextInput, AsyncStorage, TouchableOpacity, ToastAndroid, ActivityIndicator } from 'react-native';
import { Icon } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
import { myFetch } from '../utils'
export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      pwd: '',
      isloading: false
    }
    AsyncStorage.getItem('users', (error, result) => {
      if (result == "" || result == null) {
        this.setState({
          username0: '',
        })
      }
      else {
        var a = JSON.parse(result)
        this.setState({
          username0: a.username,
          pwd0: a.pwd
        })
      }
    })
  }
  userhandle = (text) => {
    this.setState({ username: text })
  }
  pwdhandle = (text) => {
    this.setState({ pwd: text })
  }
  login = () => {
    if (!this.state.username || !this.state.pwd) {
      ToastAndroid.show('输入不能为空', ToastAndroid.SHORT);
      return false;
    }
    else {
      if (this.state.username0 == '') {
        ToastAndroid.show('请先去注册属于自己的账号', ToastAndroid.SHORT);
        return false;
      }
      else if (this.state.username0 == this.state.username && this.state.pwd0 == this.state.pwd) {
        var user = {
          username: this.state.username,
          pwd: this.state.pwd
        }
        AsyncStorage.setItem('user', JSON.stringify(user));
        this.setState({ isloading: true })
        setTimeout(() => {
          Actions.home()
          console.log("你好")
        }, 1000)
      }
      else {
        ToastAndroid.show('账号或密码不正确', ToastAndroid.SHORT);
        return false;
      }
    }
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <View
          style={{ alignItems: 'center' }}>
          <View
            style={{
              width: '80%',
              marginRight: 10,
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 20,
            }}>
            <Icon name="user" color="red" />
            <TextInput placeholder="用户名"
              onChangeText={this.userhandle}
            />
          </View>
          <View
            style={{
              width: '80%',
              marginRight: 10,
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 20,
            }}>
            <Icon name="key" color="red" />
            <TextInput
              onChangeText={this.pwdhandle}
              placeholder="密码"
              secureTextEntry={true}
            />
          </View>
          <TouchableOpacity
            style={{
              width: '80%',
              height: 40,
              backgroundColor: '#ccc',
              marginTop: 30,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: "red"
            }}
            onPress={this.login}>
            <Text style={{ color: "white" }}>登录</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ padding: 8, marginTop: 10, borderWidth: 1, borderColor: "black" }}
            onPress={() => Actions.register()}
          >
            <Text style={{ color: "blue" }}>未有账号？立即注册</Text>
          </TouchableOpacity>
        </View>
        {
          this.state.isloading
            ?
            <View style={{
              backgroundColor: 'rgba(50,50,50,0.8)',
              position: "absolute",
              height: "100%",
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <ActivityIndicator color="red" size='large' />
              <Text style={{ color: "#fff", paddingTop: 10, fontSize: 16 }}>登录中...</Text>
            </View>
            : null
        }
      </View>
    );
  }
}