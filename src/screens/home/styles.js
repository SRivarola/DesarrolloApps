import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
    },
    titulo: {
        color: colors.white,
        marginLeft: 5,
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 25,
    },
    listaVacia: {
        backgroundColor: colors.pink,
        width: 110,
        height: 170,
        borderRadius: 10,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
})