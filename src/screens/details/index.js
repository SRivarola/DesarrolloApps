import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {View, ScrollView, TouchableHighlight, Text} from 'react-native';
import { getCast, getVideo } from '../../store/actions/movie.actions';
import FeatherIcons from '@expo/vector-icons/Feather';
import { styles } from './styles';
import CastList from '../../components/CastList/index';
import VideoTrailer from '../../components/Video';

const DetailsScreen = ({navigation}) => {
   
    const dispatch = useDispatch();
    const datos = useSelector((state) => state.movieList.selected)
    
    useEffect(() => {
        dispatch(getCast(datos.id))
        dispatch(getVideo(datos.id))
     }, []);

    const convertirTiempo = () => {
        let horas = Math.floor(datos.runtime / 60);
        let minutos = datos.runtime % 60;
        return horas + ' h ' + minutos + ' min'
    }

    const onHandleNavigation = ()=> {
        navigation.navigate('Actor')
    }

    return (
        <ScrollView style={styles.verMasContainer}>
            <View style={styles.headerContainer}>
                <TouchableHighlight style={styles.iconsContainer} onPress={() => navigation.navigate('Home')}>
                    <FeatherIcons
                        name='chevron-left'
                        size={35}
                        color='white'
                    />
                </TouchableHighlight>
            </View>
            <VideoTrailer />
            <View>
                <Text numberOfLines={2} adjustsFontSizeToFit={true} style={styles.titulo}>
                    {datos.title}
                </Text>
                <View style={styles.textoContainer}>
                    <Text style={styles.texto}>{datos.release_date}</Text>
                    <Text style={styles.texto}>{convertirTiempo()}</Text>
                    <Text style={styles.hd}>HD</Text>
                    {/* {
                        initMovie.number_of_seasons &&
                        <Text style={styles.texto}>{initMovie.number_of_seasons} {initMovie.number_of_seasons > 1 ? 'temporadas' : 'temporada'}</Text>
                    } */}
                </View>
                <View style={styles.textoContainer}>
                    <Text style={styles.overview}>{datos.overview}</Text>
                </View>              
                <View>
                    <CastList navegacion={onHandleNavigation}/>
                </View>
            </View>
            <View style={{height: 90, width: 100}}></View>
        </ScrollView>
    )
}

export default DetailsScreen;