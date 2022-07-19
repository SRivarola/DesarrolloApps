import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors'

export const styles = StyleSheet.create({
    container: {
        height: 230,
        backgroundColor: colors.black,
      },
    titulo: {
        marginLeft: 10,
        marginTop: 10,
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    },
    flatList: {
        marginLeft: 10,
    },
    // listaVacia: {
    //     backgroundColor: 'pink',
    //     width: 110,
    //     height: 170,
    //     borderRadius: 10,
    //     margin: 10,
    //     justifyContent: 'center',
    //     alignItems: 'center'
    // },
    // iconoLista: {
    //     width: 80,
    //     height: 80,
    // },
});