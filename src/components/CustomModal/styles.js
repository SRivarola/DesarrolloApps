import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    modalContainer: {
        marginTop: '120%',
        height: '50%',
        backgroundColor: '#161616',
        borderRadius: 15,
        flex: 1,
    },
    infoModal: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: 200,
    },
    imagenModal: {
        height: 180,
        width: 120,
        margin: 10,
        borderRadius: 5,
    },
    detalles: {
        marginTop: 10,
        marginRight: 10,
        position: 'relative',
        flex: 1,
    },
    tituloModal: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 19,
        position: 'relative',
        width: '86%',
        maxHeight: 50,
    },
    textoContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    textoDetallesModal: {
        color: 'grey',
        marginRight: 40,
    },
    textoOverview: {
        color: 'white',
        textAlign: 'justify',
        flex: 1,
        marginBottom: 9,
        marginRight: 5,
    },
    btnContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        margin: 15,
    },
    verMas: {
        color: '#000',
        backgroundColor: '#fff',
        fontWeight: 'bold',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 5,
    },
    cerrarModal: {
        position: 'absolute',
        right: 10,
        top: 10,
        backgroundColor: '#2b2b2b',
        borderRadius: 50,
        width: 40,
        height: 40,
    },
    imagenCerrar: {
        position: 'relative',
        width: 38,
        height: 38,
        margin: 1,
    },
    textoModal: {
        margin: 10,
        textAlign: 'center',
        color: 'white',
    },
    icon: {
        width: 40,
        height: 40,
    },
});