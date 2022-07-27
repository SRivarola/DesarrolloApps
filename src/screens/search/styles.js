import {StyleSheet} from 'react-native';
import { colors } from '../../constants/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
    },
    input: {
        backgroundColor: colors.white,
        height: 40,
        marginHorizontal: 20,
        borderRadius: 5,
        padding: 10,
    },
    btnContainer: {
        justifyContent: 'center',
        backgroundColor: colors.darkPink,
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 5,
        height: 40,
    },
    btnTxt: {
        textAlign: 'center',
        fontFamily: 'Lato-Bold',
        fontSize: 18,
    }, 
    texto: {
        margin: 10,
        textAlign: 'center',
        color: colors.white,
        fontFamily: 'Lato-Regular'
    },
})