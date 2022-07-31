import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import { useSelector } from 'react-redux';
import { styles } from './styles';

const SearchList = ({search}) => {

    const searchList = useSelector((state) => state.search.searchList);
    const biu = useSelector((state) => state.movieList.baseImageUrl)
  
    const renderItem = ({item}) => (
        <View style={styles.card}>
            <Image
                source={{uri: `${biu}w780${item.backdrop_path ? item.backdrop_path : item.poster_path}`}}
                style={styles.imagen}
            />
            <Text style={styles.title}>{item.title}</Text>
        </View>
    );

    const keyExtractor = (item) => item.id.toString();

    return (
        <>
        {
            searchList.length > 0 &&
            <>
                <Text style={styles.texto}>Peliculas encontradas con <Text style={styles.searchTxt}>"{search}"</Text></Text>
                <FlatList
                    style={styles.container}
                    data={searchList}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                />
                <View style={{height: 90, width: 100}}></View>
            </>
        }
        </>
    )
} 

export default SearchList;