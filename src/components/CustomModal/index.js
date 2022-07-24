import React, { useState, useEffect } from 'react';
import {Modal, View, TouchableHighlight, TouchableOpacity, Image, Text} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { styles } from './styles';
import FeatherIcons from '@expo/vector-icons/Feather';
import { addToMiLista, deleteFromMiList } from '../../store/actions/miLista.actions';

const CustomModal = ({onHandlerModal, navegacion, modalVisible, setModalVisible}) => {
    
    const dispatch = useDispatch();
    const biu = useSelector((state) => state.movieList.baseImageUrl)
    const poster = useSelector((state) => state.movieList.portada)
    const datos = useSelector((state) => state.movieList.selected)
    const miLista  = useSelector((state) => state.miLista.lista)
    const [boton, setBoton] = useState(false)

    const onHandlerInfoModal = () => {
        setModalVisible(!modalVisible)
        navegacion()
    }

    const convertirTiempo = () => {
        let horas = Math.floor(datos.runtime / 60);
        let minutos = datos.runtime % 60;
        return horas + ' h ' + minutos + ' min'
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
        <Modal
            animationType='slide'
            visible={modalVisible}
            onRequestClose={() => null}
            transparent
        >
            <View style={styles.modalContainer}>
                <TouchableHighlight style={styles.cerrarModal} onPress={onHandlerModal}>
                    <FeatherIcons 
                        name='x-circle'
                        size={40}
                        color='white'
                    />
                </TouchableHighlight>
                <View style={styles.infoModal}>
                    <Image style={styles.imagenModal} source={{uri: `${biu}w780${poster.poster_path}`}}/>
                    <View style={styles.detalles}>
                        <Text style={styles.tituloModal} numberOfLines={2} ellipsizeMode='tail'> 
                            {datos.title}
                        </Text>
                        {
                            datos &&
                            <View style={styles.textoContainer}>
                                <Text style={styles.textoDetallesModal}>{datos.release_date}</Text>
                                <Text style={styles.textoDetallesModal}>{convertirTiempo()}</Text>
                            </View>
                        }
                        <Text style={styles.textoOverview} numberOfLines={6} ellipsizeMode='tail'>
                            {datos.overview}
                        </Text>
                    </View>
                </View>
                <View style={styles.btnContainer}>
                    <TouchableOpacity 
                        onPress={boton? onHandleRemoveToMiLista : onHandleAddToMiLista}
                    >
                        <FeatherIcons
                            name={boton? 'check' : 'plus'}
                            size={35}
                            color='white'
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onHandlerInfoModal}>
                        <Text style={styles.verMas}>
                            Ver mas
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
        </>
    );
}

export default CustomModal;