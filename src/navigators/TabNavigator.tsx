import React from 'react'
import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { COLORS } from '../theme/theme'
import {BlurView} from '@react-native-community/blur'
import HomeScreen from '../screens/HomeScreen'
import FavouriteScreen from '../screens/FavouriteScreen'
import CartScreen from '../screens/CartScreen'
import OrderHistoryScreen from '../screens/OrderHistoryScreen'
import CustumIcon from '../components/CustumIcon'



const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarBackground: () => (
          <BlurView
            overlayColor=''
            blurAmount={20}
            style={styles.BlurViewStyles }
          />
        ),

      }}>
    
      <Tab.Screen name="Home" 
      component={HomeScreen}
      options={{
        tabBarIcon:({focused,color,size})=>(
          <CustumIcon 
          name="home"
          size={25}
          color={
            focused?COLORS.primaryOrangeHex:COLORS.primaryLightGreyHex
          }
          />
        )
      }}
      
      ></Tab.Screen>
      <Tab.Screen 
      name="Cart"
      component={CartScreen}
      options={{
        tabBarIcon:({focused,color,size})=>(
          <CustumIcon 
          name="cart"
          size={25}
          color={
            focused?COLORS.primaryOrangeHex:COLORS.primaryLightGreyHex
          }
          />
        )
      }}
       ></Tab.Screen>
      <Tab.Screen 
      name="Favourite" 
      component={FavouriteScreen}
      options={{
        tabBarIcon:({focused,color,size})=>(
          <CustumIcon 
          name="like"
          size={25}
          color={
            focused?COLORS.primaryOrangeHex:COLORS.primaryLightGreyHex
          }
          />
        )
      }}
      ></Tab.Screen>
      <Tab.Screen 
      name="History" 
      component={OrderHistoryScreen}
      options={{
        tabBarIcon:({focused,color,size})=>(
          <CustumIcon 
          name="bell"
          size={25}
          color={
            focused?COLORS.primaryOrangeHex:COLORS.primaryLightGreyHex
          }
          />
        )
      }}

      ></Tab.Screen>
    </Tab.Navigator>

  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 80,
    position: 'absolute',
    backgroundColor: COLORS.primaryBlackRGBA,
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: 'transparent'

  },
  BlurViewStyles: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0

  }
})

export default TabNavigator;
