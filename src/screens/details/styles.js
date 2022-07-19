import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    verMasContainer: {
        backgroundColor: 'black',
        flex: 1,
        paddingTop: 10,
    },
    headerContainer: {
        height: 70,
        width: '100%'
    },
    iconsContainer:{
        height: 70,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    iconoCerrar: {
        width: 40,
        height: 40,
    },
    imagen:{
        position: 'relative',
        width: '100%',
        height: 250,
    },
    titulo: {
        color: 'white',
        marginHorizontal: 10,
        fontSize: 40,
        fontWeight: 'bold',
    },
    textoContainer:{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        marginVertical: 3,
    },
    protagonistas:{
        marginLeft: 10,
        color: 'grey',
    },
    texto:{
        color: 'grey',
        marginHorizontal: 10,
    },
    overview:{
        marginHorizontal: 10,
        color: 'white',
    },
    lista:{
        flex: 1,
    }
});