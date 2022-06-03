import React from 'react'
import { View, Text } from 'react-native'
import { Icon } from '@rneui/base';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import RestaurantStack from './RestaurantStack';
import FavoriteStack from './FavoriteStack';
import RankingStack from './RankingStack';
import SearchStack from './SearchStack';
import AccountStack from './AccountStack';
import { screen, colors } from '../utils';

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            tabBarActiveTintColor: colors.PRIMARY_COLOR,
            tabBarInactiveTintColor: colors.PRIMARY_DARK_COLOR,
            tabBarIcon: ({ color, size }) => ScreenOption(route, color, size)
        })}>
            <Tab.Screen name={screen.restaurant.tab} component={RestaurantStack} options={{ title: 'Restaurantes' }} />
            <Tab.Screen name={screen.favorires.tab} component={FavoriteStack} options={{ title: 'Favoritos' }} />
            <Tab.Screen name={screen.ranking.tab} component={RankingStack} options={{ title: 'Clasificación' }} />
            <Tab.Screen name={screen.search.tab} component={SearchStack} options={{ title: 'Buscar' }} />
            <Tab.Screen name={screen.account.tab} component={AccountStack} options={{ title: 'Cuenta' }} />
        </Tab.Navigator>
    )
}

function ScreenOption(route, color, size) {
    let iconName;

    if (route.name === screen.restaurant.tab) {
        iconName = "compass";
    }

    if (route.name === screen.favorires.tab) {
        iconName = 'heart';
    }

    if (route.name === screen.ranking.tab) {
        iconName = 'star';
    }

    if (route.name === screen.search.tab) {
        iconName = 'magnify';
    }

    if (route.name === screen.account.tab) {
        iconName = 'account';
    }

    return (
        <Icon type='material-community' name={iconName} color={color} size={size} />
    )
}