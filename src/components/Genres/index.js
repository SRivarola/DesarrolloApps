import React from 'react';
import {View, Text} from 'react-native';
import { useSelector } from 'react-redux';
import { styles } from './styles';

const Genres = () => {

    const selected = useSelector((state) => state.movieList.selected)
    const genres = selected.genres

    return (
        <>
        {
            genres &&
            <View style={styles.generoContainer}>
            {
                genres.map((gen) => (
                    <Text style={styles.genero} key={gen.id}>
                        {gen.name}
                    </Text>
                ))
            }
            </View>
        }
        </>
    );
}

export default Genres;