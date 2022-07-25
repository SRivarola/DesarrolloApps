import React, { useEffect } from 'react';
import {ScrollView, View, Text} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getMovies } from '../../store/actions/movie.actions';
import { getMiLista } from '../../store/actions/miLista.actions';
import FeatherIcons from '@expo/vector-icons/Feather';
import Portada from '../../components/Portada';
import MovieList from '../../components/MovieList/index';
import { styles } from './styles';
import { colors } from '../../constants/colors';

const HomeScreen = ({navigation}) => {

    const miLista  = useSelector((state) => state.miLista.lista)
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getMovies())
        dispatch(getMiLista())
     }, []);

    const onHandleNavigation = (ruta)=> {
        navigation.navigate(ruta)
    }


    return (
        <ScrollView style={styles.container}>
            <Portada navegacion={() => onHandleNavigation('Details')}/>
            {
                miLista.length > 0 ?
                    <MovieList lista={(state) => state.miLista.lista} titulo={'Mi lista'}/>
                :
                <>
                    <Text style={styles.titulo}>Mi lista</Text>
                    <View style={styles.listaVacia}>
                        <FeatherIcons 
                            name='plus'
                            color={colors.darkPink}
                            size={60}
                        />
                    </View>
                </>
            }
            <MovieList lista={(state) => state.movieList.movies} titulo={'Peliculas populares'} navegacion={null}/>
            <View style={{height: 90, width: 100}}></View>
        </ScrollView>
    );
}

export default HomeScreen;