import React from 'react'
import { View, Text } from 'react-native'
import { Button } from '@rneui/base'
import { screen } from '../../utils'

export default function RestaurantsScreen(props) {
    const { navigation } = props;

    const goToAddRestaurant = () => {
        navigation.navigate(screen.restaurant.addRestaurant);
    }

    return (
        <View style={{ backgroundColor: 'purple' }}>
            <Text>Restaurant Screen</Text>
            <Text>Restaurant Screen</Text>
            <Text>Restaurant Screen</Text>
            <Button title='Crear Restaurante' onPress={goToAddRestaurant} />
        </View>
    )
}