import React, { useEffect } from 'react';
import {ScrollView, View, Text} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getMovies } from '../../store/actions/movie.actions';
import { getMiListaFromAction } from '../../store/actions/miLista.actions';
import FeatherIcons from '@expo/vector-icons/Feather';
import Portada from '../../components/Portada';
import MovieList from '../../components/MovieList/index';
import { styles } from './styles';

const HomeScreen = ({navigation}) => {

    const miLista  = useSelector((state) => state.miLista.lista)
    const dispatch = useDispatch();
    // console.log(miLista)
    useEffect(() => {
        dispatch(getMovies())
        dispatch(getMiListaFromAction())
     }, []);

    const onHandleNavigation = ()=> {
        navigation.navigate('Details')
    }

    return (
        <ScrollView style={styles.container}>
            <Portada navegacion={onHandleNavigation}/>
            {
                miLista.length > 0 ?
                    <MovieList lista={(state) => state.miLista.lista} titulo={'Mi lista'}/>
                :
                <>
                    <Text style={styles.titulo}>Mi lista</Text>
                    <View style={styles.listaVacia}>
                        <FeatherIcons 
                            name='plus'
                            color={'#df5c7e'}
                            size={60}
                        />
                    </View>
                </>
            }
            <MovieList lista={(state) => state.movieList.movies} titulo={'Peliculas populares'}/>
        </ScrollView>
    );
}

export default HomeScreen;