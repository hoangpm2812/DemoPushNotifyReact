import React from 'react'
import { Scene, ActionConst, Stack, Router, Tabs } from 'react-native-router-flux';
import { ToastAndroid,BackHandler } from "react-native";
import { Actions } from 'react-native-router-flux';
import HomeContainer from '../containers/HomeContainer'
import AContainer from '../containers/AContainer'
import BContainer from '../containers/BContainer'
import BasicFlatList from '../containers/BasicFlatList'
import ListDetailContainer from '../containers/ListDetailContainer'

const AppRouter = () =>
  <Router 
    backAndroidHandler={() => {
      if (Actions.currentScene == "home") {
        return false;
      }
    }
  }>
    <Stack key='root'>
        {/* <Scene key='splash' component={SplashContainer} initial title='Splash' hideNavBar={true} /> */}
        <Scene key='home' component={HomeContainer} initial title='Home'  hideNavBar={true}  />
        <Scene key='a' component={AContainer} title='A'  hideNavBar={true}  />
        <Scene key='b' component={BContainer} title='B'  hideNavBar={true}  />
        <Scene key='flatList' component={BasicFlatList} title='Basic Flat List'  hideNavBar={true}  />
        <Scene key='flatListDetail' component={ListDetailContainer} title='Details' />
    </Stack>
  </Router>

export default AppRouter;