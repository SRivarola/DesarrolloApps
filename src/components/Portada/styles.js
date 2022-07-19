import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    containerPortada: {
        height: 'auto',
    },
    fotoPortada: {
        width: '100%',
        height: 650,
        
    },
    socaloPortada: {
        marginTop: 10,
        marginBottom: 10,
        height: 'auto',
        width: '100%',
        bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    },
    iconsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 10,
    },
    iconosPortada: {
        display: 'flex',
        alignItems: 'center'
    },
    icon: {
        width: 40,
        height: 40,
    },
    textoIcono: {
        color: 'white',
        marginTop: 2,
    },
});