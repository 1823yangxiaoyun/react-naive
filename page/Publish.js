import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ToastAndroid, ActivityIndicator } from "react-native"
import { Icon } from '@ant-design/react-native';
import { Actions } from "react-native-router-flux"
export default class Publish extends Component {
    constructor() {
        super();
        this.state = {
            msg: [],
            page: 1,
            isLoading: true
        }
    }
    componentDidMount() {
        fetch(`https://cnodejs.org/api/v1/topics?limit=12&&page=${this.state.page}`).then(res => res.json())
            .then(res => {
                this.setState({
                    msg: res.data,
                    isLoading: false
                });
            })
    }
    componentDidUpdate() {
        fetch(`https://cnodejs.org/api/v1/topics?limit=12&&page=${this.state.page}`).then(res => res.json())
            .then(res => {
                this.setState({ msg: res.data, a: true });
            })
    }
    //下一页
    addPage = () => {
        this.setState((state) => {
            state.page = state.page + 1;
        })
    }
    //上一页
    cutPage = () => {
        this.setState((state) => {
            state.page = state.page - 1;
            state.a = false
            if (this.state.page == 0) {
                ToastAndroid.show('已经是第一页了!', ToastAndroid.SHORT)
                this.state.page = 1;
            }
        })
    }
    render() {
        return (
            <ScrollView>

                <View>
                    <View style={styles.tou}>
                        <Icon name="left" style={{ paddingLeft: 20, color: "#ffffff" }} onPress={() => Actions.pop()} />
                        <Text style={{ fontSize: 16, color: "#ffffff" }}>我的发布</Text>
                        <Icon name="small-dash" style={{ paddingRight: 20, color: "#ffffff" }} />
                    </View>
                    {
                        this.state.isLoading
                            ? <View style={styles.box00}>
                                <ActivityIndicator color="red" size='large' />
                                <Text style={{ color: "#fff", paddingTop: 10, fontSize: 16 }}>登录中...</Text>
                            </View>
                            : null
                    }
                    <View style={styles.box}>
                        {

                            this.state.msg.map((item) => {
                                return (
                                    <View style={styles.lie}>
                                        <Text style={{ fontSize: 14, color: "#959595", width: 210, paddingLeft: 10 }}>{item.title ? (item.title.length >= 15 ? item.title.substr(0, 15) + "..." : item.title) : ""}</Text>
                                        <Text style={{ fontSize: 13, color: "#959595" }}>{item.create_at.split('T')[0]}</Text>
                                        <Text style={{ fontSize: 13, color: "#959595" }} >已回复</Text>
                                    </View>)
                            })
                        }
                        <View style={styles.box1}>

                            <TouchableOpacity style={styles.btn} onPress={this.cutPage}>
                                <Text style={{ color: "#ffffff", fontSize: 15 }}>上一页</Text>
                            </TouchableOpacity>
                            <Text>第&nbsp;{this.state.page}&nbsp;页</Text>
                            <TouchableOpacity style={styles.btn} onPress={this.addPage}>
                                <Text style={{ color: "#ffffff", fontSize: 15 }} >下一页</Text>
                            </TouchableOpacity>
                        </View>
                    </View >
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    tou: {
        height: 36,
        backgroundColor: "#f23030",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: 'center'
    },
    box: {
        height: 510,
        backgroundColor: "#ffffff",
    },
    box00: {
        height: 420,
        backgroundColor: "#ffffff",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: 'center'
    },
    lie: {
        height: 35,
        backgroundColor: "#ffffff",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        borderColor: "pink"
    },
    btn: {
        height: 30,
        width: "26%",
        borderRadius: 20,
        backgroundColor: "#f23030",
        justifyContent: "center",
        flexDirection: "row",
        alignItems: 'center'
    },
    box1: {
        marginTop: 40,
        backgroundColor: "#ffffff",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: 'center'
    }
})