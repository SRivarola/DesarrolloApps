import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
    },
    iconsContainer: {
        position: 'absolute',
        top: 10,
        left: 10,
    },
    headerContainer: {
        alignItems: 'center',
        margin: 10,
    },
    name: {
        fontFamily: 'Lato-Bold',
        fontSize: 24,
        margin: 20,
        color: colors.white,
    },
    imagen: {
        width: 200,
        height: 300,
        borderRadius: 10,
    },
    bioContainer: {
        margin: 5,
    },
    bioTitle: {
        marginVertical: 15,
        fontFamily: 'Lato-Bold',
        fontSize: 18,
        color: colors.white,
    },
    bio: {
        fontFamily: 'Lato-Regular',
        textAlign: 'justify',
        color: colors.white,
    },
})
