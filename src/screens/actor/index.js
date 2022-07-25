import React from 'react';
import {ScrollView, View, Text, Image, TouchableOpacity} from 'react-native';
import { useSelector } from 'react-redux';
import FeatherIcons from '@expo/vector-icons/Feather';
import { styles } from './styles';
import MovieList from '../../components/MovieList/index';

const ActorScreen = ({navigation}) => {

    const actor = useSelector((state) => state.actor.actor);
    const biu = useSelector((state) => state.movieList.baseImageUrl);
    const { profile_path, name, biography } = actor;
    
    const onHandleNavigation = ()=> {
        navigation.navigate('Home')
    }

    return (
        <>
        {
            actor &&
                <ScrollView style={styles.container}>
                    <TouchableOpacity style={styles.iconsContainer} onPress={() => navigation.goBack()}>
                        <FeatherIcons
                            name='chevron-left'
                            size={35}
                            color='white'
                        />
                    </TouchableOpacity>
                    <View style={styles.headerContainer}>
                        <Text style={styles.name}>{name}</Text>
                        <Image 
                            style={styles.imagen}
                            source={{uri: `${biu}w185${profile_path}`}}
                        />
                        <View style={styles.bioContainer}>
                            <Text style={styles.bioTitle}>Biografía</Text>
                            <Text style={styles.bio}>{biography}</Text>
                        </View>
                    </View>
                    <MovieList lista={(state) => state.actor.credits} titulo={'Filmografía'} navegacion={onHandleNavigation}/>
                    <View style={{height: 90, width: 100}}></View>
                </ScrollView>
        }
        </>
    );
}

export default ActorScreen;