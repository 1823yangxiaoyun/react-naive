import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, Image, FlatList, StatusBar, AsyncStorage, TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { Actions } from "react-native-router-flux"
const { width, scale, height } = Dimensions.get('window');
const s = width / 640;
const h = height / 1409;
const n = "";
const goods = [
    {
        title: '账户管理',
        img: require('../images/z1.jpg')
    },
    {
        title: '收货地址',
        img: require('../images/z2.jpg')
    },
    {
        title: '我的信息',
        img: require('../images/z3.jpg')
    },
    {
        title: '我的订单',
        img: require('../images/z4.jpg')
    },
    {
        title: '我的二维码',
        img: require('../images/z5.jpg')
    },
    {
        title: '我的积分',
        img: require('../images/z6.jpg')
    },
    {
        title: '我的收藏',
        img: require('../images/z7.jpg')
    },
];
const arr = [
    {
        title: '居家维修保养',
        img: require('../images/e1.jpg')
    },
    {
        title: '出行接送',
        img: require('../images/e2.jpg')
    }, {
        title: '我的受赠人',
        img: require('../images/e3.jpg')
    }, {
        title: '我的住宿优惠',
        img: require('../images/e4.jpg')
    }, {
        title: '我的活动',
        img: require('../images/e5.jpg')
    }, {
        title: '我的发布',
        img: require('../images/e6.jpg')
    }
];
const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};
export default class Our extends Component {
    constructor() {
        super();
        this.state = {
            imageUrl: ""
        }
        AsyncStorage.getItem('key', (error, result) => {
            if (result == "" || result == null) {
                this.setState({
                    imageUrl: require("../images/7.jpg"),
                })
            }
            else {
                this.setState({
                    imageUrl: JSON.parse(result)
                })
            }
        })
    }
    takephoto = () => {
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                return;
            } else if (response.error) {
                console.log('Error:', response.error);
            } else if (response.customButton) {
                console.log('custom:', response.customButton);
            } else {
                const source = { uri: response.uri };
                this.setState({
                    imageUrl: source,
                }, async () => {
                    await AsyncStorage.setItem("key", JSON.stringify(this.state.imageUrl),
                        () => { console.log('store success') })
                });
            }
        });
    }
    cut =()=>{
        AsyncStorage.removeItem("user");
        Actions.login();
    }
    render() {
        return (
            <View>
                <StatusBar backgroundColor="#f23030" />
                <View style={styles.tou}>
                    <TouchableOpacity activeOpacity={0.6} style={{ height: 168 * h, width: 150 * s, borderRadius: 50 }} onPress={() => { this.takephoto() }}>
                        <Image source={this.state.imageUrl} style={{ height: 168 * h, width: 150 * s, borderRadius: 50 }} />
                    </TouchableOpacity>
                    <Text style={{ color: "white", marginTop: "3%" }} >BINNU&nbsp;&nbsp;DHILION</Text>
                </View>
                <View style={styles.per}>
                    <Image source={require("../images/8.jpg")} style={styles.our} />
                    <Text style={styles.txt} onPress={() => { this.getData() }}>我的个人中心</Text>
                </View>
                <View style={{ height: 382 * h, backgroundColor: "#ffffff" }}>
                    <FlatList
                        data={goods}
                        numColumns={3}
                        renderItem={({ item }) => (
                            <View style={[styles.hx, { height: 127 * h }]} >
                                <Image
                                    source={item.img}
                                    style={{ height: 44 * h, width: 44 * s }}
                                />
                                <Text style={{ marginTop: "8%", color: "#959595" }}>{item.title}</Text>
                            </View>
                        )}
                    />
                </View>
                <View style={[styles.per, , { marginTop: "2%" }]}>
                    <Image source={require("../images/9.jpg")} style={styles.our} />
                    <Text style={styles.txt}>E族活动</Text>
                </View>
                <View style={{ height: 280 * h, backgroundColor: "#ffffff" }}>
                    <FlatList
                        data={arr}
                        numColumns={3}
                        renderItem={({ item }) => {
                            if (item.title == "我的发布") {
                                return (
                                    <TouchableOpacity activeOpacity={1} style={[styles.hx, { height: 140 * h }]} onPress={() => Actions.pub()}>
                                        <Image
                                            source={item.img}
                                            style={{ height: 44 * h, width: 44 * s }}
                                        />
                                        <Text style={{ marginTop: "8%", color: "#959595" }} >{item.title}</Text>
                                    </TouchableOpacity>)

                            }
                            else {
                                return (
                                    <View style={[styles.hx, { height: 140 * h }]}>
                                        <Image
                                            source={item.img}
                                            style={{ height: 44 * h, width: 44 * s }}
                                        />
                                        <Text style={{ marginTop: "8%", color: "#959595" }} >{item.title}</Text>
                                    </View>
                                )
                            }
                        }}
                    />
                </View>
                <TouchableOpacity style={{
                     height:40,
                     width: "60%",
                     backgroundColor: "#f23030",
                     borderRadius: 10,
                     alignItems: "center",
                     marginLeft:"20%",
                     marginTop:4
                }}
                onPress={this.cut}
                >
                    <Text style={{color: "#fff",marginTop:10}}  >退出登录</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    tou: {
        height: 320 * h,
        backgroundColor: "#f23030",
        flexDirection: "column",
        justifyContent: "center",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: 'center'
    },
    per: {
        height: 80 * h,
        borderBottomColor: "#e8e8e8",
        borderBottomWidth: 1,
        backgroundColor: "#ffffff"
    },
    our: {
        width: 30 * s,
        height: 36 * h,
        position: "absolute",
        top: "25%",
        left: "5%"
    },
    txt: {
        color: "#959595",
        position: "absolute",
        top: "28%",
        left: "14%"
    },
    hx: {
        width: "33.3%",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: 'center'
    }
})
