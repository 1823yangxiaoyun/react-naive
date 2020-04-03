import React, { useState, useEffect } from 'react';
import { View,BackHandler, ToastAndroid, AsyncStorage} from 'react-native';
import { Router, Overlay, Scene, Tabs, Drawer, Lightbox, Modal, Actions } from 'react-native-router-flux';
import { Icon } from '@ant-design/react-native';
import SplashScreen from 'react-native-splash-screen';
import Login from './src/common/Login'
import SwiperPage from './src/common/SwiperPage';
import Register from "./src/common/Register"
import shouye from "./src/page/Shouye"
import list from "./src/page/List"
import our from "./src/page/Our"
import pub from "./src/page/Publish"
console.disableYellowBox = true;
const App = () => {
	let [isLogin, setLogin] = useState(false);
	let [isInstall, setInstall] = useState(true);
	let now = 0;
	useEffect(() => {
		AsyncStorage.getItem('isInstall')
			.then(res => {
				if (res) {
					setInstall(false);
				}
			})
		AsyncStorage.getItem('user')
			.then(res => {
				let user = JSON.parse(res)
				if (!user) {
					SplashScreen.hide();
				}
				if (user) {
					setLogin(true);
					SplashScreen.hide();
				}
			})
	}, [])
	let afterInstall = () => {
		// console.log('after install')
		setInstall(false)
	}
	if (isInstall) {
		return <View style={{ flex: 1 }}>
			<SwiperPage afterInstall={afterInstall} />
		</View>
	}

	return (
		<Router
			backAndroidHandler={() => {
				if (Actions.currentScene != 'shouye' && Actions.currentScene!='login') {
					Actions.pop();
					return true;
				} else {
					if (new Date().getTime() - now < 2000) {
						BackHandler.exitApp();
					} else {
						ToastAndroid.show('确定要退出吗', 100);
						now = new Date().getTime();
						return true;
					}
				}

			}}
		>
<Overlay>
        <Modal key='modal' hideNavBar>
          <Lightbox key='lightbox'>
			<Scene key="root">
				<Tabs key='tabbar'
					hideNavBar
					activeTintColor="#f23030"
					inactiveTintColor="#949494"
					tabBarStyle={{ backgroundColor: '#fff' }}
				>
					<Scene title='首页' key="home" hideNavBar
						icon={
							({ focused }) => <Icon
								color={focused ? '#f23030' : '#949494'}
								name="home"
							/>
						}
					>
						<Scene key="shouye" component={shouye} />
					</Scene>
					<Scene title='商品分类' key="goods" hideNavBar
						icon={
							({ focused }) => <Icon
								color={focused ? '#f23030' : '#949494'}
								name="appstore"
							/>
						}
					>
						<Scene key="list" component={list} />
					</Scene>
					<Scene title='个人中心' key="our" hideNavBar
						icon={
							({ focused }) => <Icon
								color={focused ? '#f23030' : '#949494'}
								name="user"
							/>
						}
					>
						<Scene key="ours" component={our} />
						<Scene key="pub" component={pub} />
					</Scene>
				</Tabs>
			</Scene>
			</Lightbox>
			   <Scene initial={!isLogin} key="login" component={Login} />
			   <Scene key='register' component={Register} />
			</Modal>
			</Overlay>
		</Router>
	);
};

export default App;