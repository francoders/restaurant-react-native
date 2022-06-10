import React from 'react'
import { styles } from './LoginScreen.style'
import { useNavigation } from '@react-navigation/native'
import { View, ScrollView } from 'react-native'
import { Image, Text } from '@rneui/base'
import { screen } from '../../../utils'

export function LoginScreen() {
    const navigation = useNavigation();

    const goToRegister = () => {
        navigation.navigate(screen.account.register)
    }

    return (
        <ScrollView>
            <Image source={require('../../../../assets/icon.png')} style={styles.img} />

            <View style={styles.content}>
                <Text>Desde Login</Text>

                <Text onPress={goToRegister}>REGISTRARSE</Text>
            </View>
        </ScrollView>
    )
}