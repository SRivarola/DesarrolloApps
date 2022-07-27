import React, { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { styles } from './styles';
import { getSearch } from '../../store/actions/search.actions';
import SearchList from '../../components/SearchList';

const SearchScreen = () => {

    const dispatch = useDispatch();
    const [search, setSearch] = useState('');
    const [isSearch, setIsSearch] = useState(false)
    const searchList = useSelector((state) => state.search.searchList);
    console.log('hay busqueda? ',isSearch, 'cual es la busqueda? ', searchList)
    const onHandleChange = (valor) => {
        setSearch(valor)
    }

    const onHandleSubmit = async () => {
        if(search != ''){
            setIsSearch(true)
            dispatch(getSearch(search))
        } else (
            setIsSearch(false)
        )
    }

    return (
        <View style={styles.container}>
            <Text>Search screen</Text>
            <TextInput 
                style={styles.input}
                onChangeText={(text) => onHandleChange(text)}
                value={search}
                placeholder='Buscar...'
            />
            <TouchableOpacity 
                onPress={onHandleSubmit}
                style={styles.btnContainer}
            >
                <Text style={styles.btnTxt}>BUSCAR</Text>
            </TouchableOpacity>
            {
                search === '' && searchList.length === 0 &&
                    <Text style={styles.texto}>Aún no ah realizado ninguna busqueda!</Text>
            }
            {
                ((isSearch === true) && (searchList.length === 0) && (search !== '')) && 
                <Text style={styles.texto}>No hay coincidencias!</Text>
            }
            <SearchList search={search}/>
        </View>
    );
}


export default SearchScreen;