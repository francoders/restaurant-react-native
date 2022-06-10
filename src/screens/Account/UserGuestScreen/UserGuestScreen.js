import React from 'react'
import { View, ScrollView, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { screen } from '../../../utils'
import { Text, Image } from '@rneui/base'
import { styles } from './UserGuestScreen.styles'

export function UserGuestScreen() {
    const navigation = useNavigation();

    const goToLogin = () => {
        navigation.navigate(screen.account.login)
    }

    return (
        <View style={styles.container}>
            <ScrollView centerContent={true} style={styles.content}>
                <Image source={require('../../../../assets/user-guest.jpg')} style={styles.img} />
                <Text style={styles.text}>Usuario Invitado: Crea tu perfil!</Text>
                <Text style={styles.description}>
                    ¿Como descibirias tu mejor restaurante?
                    Busca y visualiza mejores restaurantes de una forma sencilla, vota cual te ah gustado más y comenta como ha sido tu experiencia.
                </Text>
                <View>
                    <TouchableOpacity style={styles.btn} onPress={goToLogin}>
                        <Text style={styles.textBtn}>Ir al Perfil</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}