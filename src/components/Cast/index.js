import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import { styles } from './styles'
import FeatherIcons from '@expo/vector-icons/Ionicons';
import { getActor } from '../../store/actions/actor.actions';

const Cast = ({name, profile_path, character, id, datos, navegacion}) => {

    const dispatch = useDispatch();
    const biu = useSelector((state) => state.movieList.baseImageUrl)
    
    const onHandlePress = () => {
        dispatch(getActor(id))
        navegacion()
    }
    
    return (
        <View>
            <Text style={styles.name} numberOfLines={1}>{name}</Text>
            {
                profile_path ?
                <TouchableOpacity onPress={onHandlePress}>
                    <Image 
                        style={styles.stretch}
                        source={{uri: `${biu}w185${profile_path}`}}
                    />
                </TouchableOpacity>
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