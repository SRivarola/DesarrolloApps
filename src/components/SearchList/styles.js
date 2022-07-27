import {StyleSheet} from 'react-native';
import { colors } from '../../constants/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
    },
    texto: {
        margin: 10,
        textAlign: 'center',
        color: colors.white,
        fontFamily: 'Lato-Regular'
    },
    searchTxt: {
        fontFamily: 'Lato-Bold',
    },
    card: {
        alignItems: 'center',
        height: 150,
        margin: 10,
    },
    imagen: {
        height: 150,
        width: '90%',
        borderRadius: 5,
    },
    title: {
        position: 'absolute',
        color: colors.white,
        fontFamily: 'Lato-Bold',
        fontSize: 16,
        bottom: 10,
    },
})