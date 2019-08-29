import React from 'react';
import { Image } from 'react-native';
import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import Dashboard from '~/pages/Dashboard';
import Subscriptions from '~/pages/Subscriptions';
import Profile from '~/pages/Profile';

import logo from '~/assets/images/logo.png';

export default (isSigned = false) =>
  createAppContainer(
    createStackNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
          SignUp,
        }),
        App: createBottomTabNavigator(
          {
            Dashboard,
            Subscriptions,
            Profile,
          },
          {
            tabBarOptions: {
              keyboardHidesTabBar: true,
              labelStyle: {
                fontFamily: 'Montserrat-Regular',
              },
              activeTintColor: '#fff',
              inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
              style: {
                backgroundColor: '#2b1a2f',
                borderTopColor: '#2b1a2f',
              },
            },
          }
        ),
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
        headerLayoutPreset: 'center',
        headerMode: isSigned ? 'float' : 'none',
        defaultNavigationOptions: {
          headerStyle: { backgroundColor: '#18161f' },
          headerTitle: (
            <Image source={logo} style={{ height: 24, width: 23 }} />
          ),
        },
      }
    )
  );
