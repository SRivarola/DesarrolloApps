import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {TouchableOpacity, Image} from 'react-native';
import { selectMovie } from '../../store/actions/movie.actions';
import { styles } from './styles'

const Movie = ({poster_path, datos}) => {

    const dispatch = useDispatch();
    const biu = useSelector((state) => state.movieList.baseImageUrl)

    const onHandleSelectMovie = (id) => {
        dispatch(selectMovie(id))
    }

    return (
        <>
            <TouchableOpacity
                onPress={() => onHandleSelectMovie(datos.id)}
            >
                <Image 
                    style={styles.stretch}
                    source={{
                        uri: `${biu}w185${poster_path}`
                    }}
                />
            </TouchableOpacity>
        </>
    );
}

export default Movie;