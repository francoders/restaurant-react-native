import { StyleSheet } from "react-native"
import { colors } from "../../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: 700,
    },
    content: {
        marginHorizontal: 30,
        backgroundColor: 'white'
    },

    img: {
        resizeMode: "contain",
        height: 350,
        width: '100%',
    },

    text: {
        fontWeight: 'bold',
        fontSize: 19,
        marginBottom: 8,
        textAlign: 'center',
        color: colors.PRIMARY_COLOR
    },

    description: {
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 10,
        textAlign: 'auto',
        color: colors.PRIMARY_COLOR,
        backgroundColor: '#e1e3e4',
        padding: 25,
        borderRadius: 10,
        borderColor: '#c6cbcc',
        borderWidth: 3,
        marginBottom: 16
    },

    btn: {
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.PRIMARY_DARK_COLOR,
        borderRadius: 13
    },

    textBtn: {
        color: colors.SECUNDARY_COLOR,
        fontWeight: 'bold',
        fontSize: 17
    }
});