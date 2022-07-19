import React from 'react';
import { useSelector } from 'react-redux';
import {View, Text, Image} from 'react-native';
import { styles } from './styles'
import FeatherIcons from '@expo/vector-icons/Ionicons';

const Cast = ({name, profile_path, character}) => {

    const biu = useSelector((state) => state.movieList.baseImageUrl)
    
    return (
        <View>
            <Text style={styles.name} numberOfLines={1}>{name}</Text>
            {
                profile_path ?
                <Image 
                    style={styles.stretch}
                    source={{uri: `${biu}w185${profile_path}`}}
                />
                :
                <View style={styles.sinFoto}>
                    <FeatherIcons name='md-person-outline' size={80} color='gray'/>
                </View>
            }
            <Text style={styles.name} numberOfLines={2}>{character}</Text>
        </View>

    );
}

export default Cast;