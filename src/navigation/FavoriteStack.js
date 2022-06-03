import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FavoritesScreen from '../screens/FavoritesScreen';
import { screen } from '../utils';

const Stack = createNativeStackNavigator();

export default function FavoriteStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={screen.favorires.favorites}
                component={FavoritesScreen}
                options={{ title: 'Favoritos' }}
            />
        </Stack.Navigator>
    )
}