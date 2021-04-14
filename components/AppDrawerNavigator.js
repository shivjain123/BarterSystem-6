import { createDrawerNavigator } from 'react-navigation-drawer';

import SettingScreen from '../screens/SettingScreen';
import {AppTabNavigator} from './AppTabNavigator';
import MyBartersScreen from '../screens/MyBartersScreen';
import CustomSideBarMenu from './CustomSideBarMenu';

export const AppDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: AppTabNavigator
    },
    MyBarters: {
        screen: MyBartersScreen
    },
    Settings: {
        screen: SettingScreen
    }
},
    {
        contentComponent: CustomSideBarMenu
    },
    {
        initialRouteName: 'Home'
    })
