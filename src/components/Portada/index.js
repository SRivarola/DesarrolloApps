import React, { useEffect, useState } from 'react';
import {Image, View, TouchableOpacity, Text} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import FeatherIcons from '@expo/vector-icons/Feather';
import { getBaseImgUrl } from '../../store/actions/movie.actions';
import { styles } from './styles';
import Genres from '../Genres/index';
import CustomModal from '../CustomModal/index';
import { addToMiLista, deleteFromMiList } from '../../store/actions/miLista.actions';

const Portada = ({navegacion}) => {

    const dispatch = useDispatch();
    const biu = useSelector((state) => state.movieList.baseImageUrl)
    const poster = useSelector((state) => state.movieList.portada)
    const datos = useSelector((state) => state.movieList.selected)
    const miLista  = useSelector((state) => state.miLista.lista)
    const [modalVisible, setModalVisible] = useState(false);
    const [boton, setBoton] = useState(false)
    
    useEffect(() => {
        dispatch(getBaseImgUrl())
    }, []);

    const onHandlerModal = () => {
        setModalVisible(!modalVisible)
    }

    const onHandleAddToMiLista = () => {
        dispatch(addToMiLista(datos))
    }
    
    const onHandleRemoveToMiLista = () => {
        const dato = miLista.find(item => item.id === datos.id)
        dispatch(deleteFromMiList(dato.idDB))
    }

    function finderId(item) {
        return (item.id === datos.id)
    }

    useEffect(() => {
        if(miLista){
          const idDup = miLista.find(finderId)
          if(idDup !== undefined) {
            setBoton(true)
          } else {
            setBoton(false)
          }
        }
      }, [poster, miLista]);
    
    return (
        <>
            <View >
                <Image style={styles.fotoPortada} source={{uri: `${biu}w780${poster.poster_path}`}}/>
                <View style={styles.socaloPortada}>
                    <Genres />
                    <View style={styles.iconsContainer}>
                        <TouchableOpacity 
                            style={styles.iconosPortada} 
                            onPress={boton? onHandleRemoveToMiLista : onHandleAddToMiLista}
                        >
                            <FeatherIcons
                                name={ boton? 'check' : 'plus'}
                                size={35}
                                color='white'
                            />
                            <Text style={styles.textoIcono}>Mi lista</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.iconosPortada} 
                            onPress={() => onHandlerModal(datos)}
                        >
                            <FeatherIcons
                                name='info'
                                size={35}
                                color='white'
                            />
                            <Text style={styles.textoIcono}>Mas info</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <CustomModal onHandlerModal={() => onHandlerModal()} navegacion={navegacion} modalVisible={modalVisible} setModalVisible={setModalVisible} />
            </View>
        </>
            
    );
}


export default Portada;