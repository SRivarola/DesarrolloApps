import React from 'react';
import { useSelector } from 'react-redux';
import {View, Text, FlatList} from 'react-native';
import Movie from '../Movie/index';
import { styles } from './styles'


const MovieList = ({lista, titulo, navegacion}) => {

    const movies = useSelector(lista)

    const renderItem = ({item}) => (
        <Movie {...item} datos={item} navegacion={navegacion}/>
    );
    
    const keyExtractor = (item) => item.idDB ? item.idDB.toString() : item.id.toString();

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>{titulo}</Text>
            <FlatList
                style={styles.flatList}
                data={movies}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                horizontal
            />  
        </View>
    );
}

export default MovieList;