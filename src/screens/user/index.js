import React, { useState } from 'react';
import { TextInput, View, Text, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { styles } from './styles';
import IonicsIcons from '@expo/vector-icons/Ionicons'
import { setUserName, setUserImage } from '../../store/actions/user.actions';
import ImageSelector from '../../components/ImageSelector/index';
import { colors } from '../../constants/colors';

const UserScreen = () => {

    const dispatch = useDispatch();
    const [image, setImage] = useState("");
    const [formData, setFormData] = useState({userName: '', error: false});

    const onHandleChange = (text) => {
        setFormData({
            ...formData,
            userName: text,
        }) 
    }    

    const onHandlerUserName = () => {
        if(formData.userName.length < 4 || formData.userName.length > 8) {
            return (
                setFormData({
                    ...formData,
                    error: 'Debe tener entre 4 y 8 caracteres'
                })
            )
        } 
        dispatch(setUserName(formData.userName))
        setFormData({
            userName: '',
            error: false
        })
    }

    const onHandleImageSelect = (imageUrl) => setImage(imageUrl);

    const onHandlerImgName = () => {
        if(image){
            dispatch(setUserImage(image))
        }
    }

    return (
        <KeyboardAvoidingView style={styles.containerKeyboard} behavior='height'>
            <View style={styles.container}>
                <Text style={styles.title}>USER SETTINGS</Text>
                <View style={styles.userNameContainer}>
                    <Text style={styles.label}>Nombre de Usuario</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder='Ingrese nomre de usuario'
                        autoCapitalize='none'
                        autoCorrect={false}
                        onChangeText={(text) => onHandleChange(text)}
                        value={formData.userName}
                    />
                    <View style={styles.errorContainer}>
                        {
                            formData.error &&
                            <>
                            <IonicsIcons name='alert-circle' size={23} color={ colors.darkPink } />
                            <Text style={styles.errorTxt}>{formData.error}</Text>
                            </>
                        }
                    </View>
                    <TouchableOpacity onPress={onHandlerUserName} style={styles.userNameBtn}>
                        <Text style={styles.textBtn}>SET USER NAME</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.userImgContainer}>
                    <ImageSelector onImage={onHandleImageSelect} />
                    <TouchableOpacity onPress={onHandlerImgName} style={styles.userNameBtn}>
                        <Text style={styles.textBtn}>SET USER IMAGE</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default UserScreen;