import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, ToastAndroid, AsyncStorage,ActivityIndicator } from 'react-native';
import { Icon } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
import { myFetch } from '../utils'
export default class Register extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            pwd: '',
            pwd0: "",
            phone: '',
            mailbox: '',
            isOk: false
        }
    }
    userhandle = (text) => {
        this.setState({ username: text })
    }
    pwdhandle = (text) => {
        this.setState({ pwd: text })
    }
    pwd0handle = (text) => {
        this.setState({ pwd0: text })
    }
    phonehandle = (text) => {
        this.setState({ phone: text })
    }
    mailhandle = (text) => {
        this.setState({ mailbox: text })
    }
    register = () => {
        if (!this.state.username || !this.state.pwd || !this.state.mailbox || !this.state.phone) {
            ToastAndroid.show('输入内容不能为空', ToastAndroid.SHORT);
        }
        else {
            if (!/^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test(this.state.phone)) {
                ToastAndroid.show('手机号码格式不正确', ToastAndroid.SHORT);
                return false;
            }
            if (!/^[a-zA-Z]\w{5,17}$/.test(this.state.pwd)) {
                ToastAndroid.show('密码必须以字母开头，长度在6~18之间，只能包含字母、数字和下划线', ToastAndroid.SHORT);
                return false;
            }
            if (this.state.pwd != this.state.pwd0) {
                ToastAndroid.show('两次输入密码不一致', ToastAndroid.SHORT);
                return false;
            }
            else {
                this.setState({ isOk: true })
                myFetch.post('/register', {
                    username: this.state.username,
                    pwd: this.state.pwd
                }
                ).then(res => {
                    console.log(res.data);
                    if (res.data.status == '1') {
                        console.log(res.data)
                        ToastAndroid.show('账户已经存在', ToastAndroid.SHORT);
                    }
                    if (res.data.status == '2') {
                        ToastAndroid.show('连接错误', ToastAndroid.SHORT);
                    }
                    else {
                        var user={
                            username:res.data.username,
                            pwd:res.data.pwd
                        }
                        AsyncStorage.setItem('users',JSON.stringify(user))
                        setTimeout(() => {
                            ToastAndroid.show('注册成功！', ToastAndroid.SHORT);
                            Actions.login()
                        }, 1000)
                    }
                })
            }
        }
    }
    render() {
        return (
            <View style={{ height: "100%" }}>
                <View style={{ alignItems: 'center', marginTop: "30%" }}>
                    <View
                        style={{
                            width: '90%',
                            flexDirection: 'row',
                            alignItems: 'center',
                            height: 40,
                            marginBottom: "6%"
                        }}>
                        <Text style={{ width: "20%" }}>用户名：</Text>
                        <TextInput placeholder=""
                            style={{
                                borderColor: '#ccc',
                                borderWidth: 1,
                                width: '80%',
                            }}
                            onChangeText={this.userhandle}
                        />
                    </View>
                    <View
                        style={{
                            width: '90%',
                            flexDirection: 'row',
                            alignItems: 'center',
                            height: 40,
                            marginBottom: "6%"
                        }}>
                        <Text style={{ width: "20%" }}>邮箱：</Text>
                        <TextInput placeholder=""
                            style={{
                                borderColor: '#ccc',
                                borderWidth: 1,
                                width: '80%',
                            }}
                            onChangeText={this.mailhandle}
                        />
                    </View>
                    <View
                        style={{
                            width: '90%',
                            flexDirection: 'row',
                            alignItems: 'center',
                            height: 40,
                            marginBottom: "6%"
                        }}>
                        <Text style={{ width: "20%" }}>手机号：</Text>
                        <TextInput placeholder=""
                            style={{
                                borderColor: '#ccc',
                                borderWidth: 1,
                                width: '80%',
                            }}
                            onChangeText={this.phonehandle}
                        />
                    </View>

                    <View
                        style={{
                            width: '90%',
                            flexDirection: 'row',
                            alignItems: 'center',
                            height: 40,
                            marginBottom: "6%"
                        }}>
                        <Text style={{ width: "20%" }}>密码：</Text>
                        <TextInput placeholder=""
                            style={{
                                borderColor: '#ccc',
                                borderWidth: 1,
                                width: '80%',
                            }}
                            onChangeText={this.pwdhandle}
                            secureTextEntry={true}
                        />
                    </View>
                    <View
                        style={{
                            width: '90%',
                            flexDirection: 'row',
                            alignItems: 'center',
                            height: 40,
                            marginBottom: "6%"
                        }}>
                        <Text style={{ width: "20%" }}>再次确认密码：</Text>
                        <TextInput placeholder=""
                            style={{
                                borderColor: '#ccc',
                                borderWidth: 1,
                                width: '80%',
                            }}
                            onChangeText={this.pwd0handle}
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
                        onPress={this.register}
                    >
                        <Text style={{ color: "white" }}>注册</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ padding: 8, marginTop: 10, borderWidth: 1, borderColor: "black" }}
                        onPress={() => Actions.login()}
                    >
                        <Text style={{ color: "blue" }}>返回登录</Text>
                    </TouchableOpacity>
                </View>
                {
                    this.state.isOk
                        ?
                        <View style={{
                            backgroundColor: 'rgba(50,50,50,.5)',
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
                            <Text style={{ color: "#fff", paddingTop: 10, fontSize: 16 }}>注册中...</Text>
                        </View>
                        : null
                }
            </View>

        )
    }
}
