import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, Dimensions, Image, TouchableOpacity ,StatusBar} from 'react-native';
import { Grid, Icon, Carousel } from '@ant-design/react-native';
const { width, scale, height } = Dimensions.get('window');
const s = width / 640;
const h = height / 1186;

const Shouye = () => {
    return (
        <View>
            <StatusBar backgroundColor="#f23030" />
            <View style={styles.tou}>
                <View style={styles.sou}>
                    <Icon name="search" color="#ffffff" style={{ position: "absolute", left: "4%", top: "15%" }} />
                    <TextInput placeholder="请输入您要搜索的关键字" placeholderTextColor="#fff" style={{ height: "100%", width: "85%", marginLeft: "15%" }} />
                </View>
                <Icon name="shopping-cart" color="#ffffff" style={{ position: "absolute", left: "90%", top: "25%" }} />
            </View>
            <View>
                <View >
                    <Carousel
                        style={styles.wrapper}
                        selectedIndex={2}
                        autoplay
                        infinite
                    >
                        <View
                            style={styles.containerHorizontal}
                        >
                            <Image source={require("../images/1.jpg")} style={{ height: "100%", width: "100%" }} />
                        </View>
                        <View
                            style={styles.containerHorizontal}
                        >
                            <Image source={require("../images/2.jpg")} style={{ height: "100%", width: "100%" }} />
                        </View>
                        <View
                            style={styles.containerHorizontal}
                        >
                            <Image source={require("../images/1.jpg")} style={{ height: "100%", width: "100%" }} />
                        </View>
                    </Carousel>
                </View>
            </View>
            <View style={styles.lie}>
                <View style={styles.ju}>
                    <Image source={require("../images/3.jpg")} style={styles.img} />
                    <Text style={styles.txt}>居家维修保养</Text>
                    <Text style={styles.txt1}>></Text>
                </View>
                <View style={styles.ju}>
                    <Image source={require("../images/4.jpg")} style={styles.img} />
                    <Text style={styles.txt}>住宿优惠</Text>
                    <Text style={styles.txt1}>></Text>
                </View>
                <View style={styles.ju}>
                    <Image source={require("../images/5.jpg")} style={styles.img} />
                    <Text style={styles.txt}>出行接送</Text>
                    <Text style={styles.txt1}>></Text>
                </View>
                <View style={styles.ju}>
                    <Image source={require("../images/6.jpg")} style={styles.img} />
                    <Text style={styles.txt}>E族优惠</Text>
                    <Text style={styles.txt1}>></Text>
                </View>
                <TouchableOpacity style={styles.btn}>
                    <Text style={{ color: "#ffffff", fontSize: 15, marginTop: "2%" }}>发布需求</Text>
                </TouchableOpacity>
            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    tou: {
        height: 82 * h,
        backgroundColor: "#f23030"
    },
    sou: {
        height: 63 * h,
        backgroundColor: "#fbb8b8",
        borderRadius: 60,
        width: "80%",
        marginTop: 9 * h,
        marginLeft: "5%"
    },
    wrapper: {
        backgroundColor: '#fff',
    },
    containerHorizontal: {
        height: 276 * h
    },
    lie: {
        height: 729 * h,
        backgroundColor: "#f5f5f5",
    },
    ju: {
        height: 129 * h,
        backgroundColor: "#ffffff",
        margin: 6 * h
    },
    img: {
        height: 99 * h,
        width: 99 * s,
        marginLeft: 28 * s,
        marginTop: 12 * h
    },
    txt: {
        position: "absolute",
        left: 170 * s,
        top: 50 * h
    },
    txt1: {
        position: "absolute",
        left: "90%",
        top: "29%",
        color: "#dddddd",
        fontSize: 24
    },
    btn: {
        height: 65 * h,
        width: 538 * s,
        backgroundColor: "#f23030",
        borderRadius: 10,
        alignItems: "center",
        marginLeft: "8%",
        marginTop: "2%"
    }
});
export default Shouye;