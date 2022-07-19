import React from 'react';
import { useSelector } from 'react-redux';
import {Text, FlatList} from 'react-native';
import { styles } from './styles';
import Cast from '../Cast/index';

const CastList = () => {

    const castList = useSelector((state) => state.movieList.cast)
    console.log(castList)
    const renderItem = ({item}) => (
        <Cast {...item} datos={item} />
    );
    const keyExtractor = (item) => item.id.toString();

    return (
        <>
            <Text style={styles.titulo}>Protagonistas</Text>
            <FlatList
                style={styles.container}
                data={castList.slice(0,20)}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                horizontal
            />  
        </>
    );
}

export default CastList;