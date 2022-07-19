import React from 'react';
import { useSelector } from 'react-redux';
import {View, Text, FlatList} from 'react-native';
import Movie from '../Movie/index';
import { styles } from './styles'


const MovieList = ({lista, titulo}) => {

    const movies = useSelector(lista)

    const renderItem = ({item}) => (
        <Movie {...item} datos={item} />
    );
    
    const keyExtractor = (item) => item.id.toString();

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