import React, { useState } from "react";
import { View, Image, Text, Alert, TouchableOpacity } from "react-native";
import IonicsIcons from '@expo/vector-icons/Ionicons';
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { styles } from './styles';
import { colors } from "../../constants/colors";

const ImageSelector = ({ onImage }) => {

    const [pickedUrl, setPickedUrl] = useState("");

    const verifyPermissions = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();

        if(status !== "granted") {
            Alert.alert("Permisos insuficientes", "Necesitas permisos para usar la cámara", [{ text: "Ok" }]);
            return false;
        }
        return true;
    }

    const handleTakeImage = async () => {
        const isCameraPermissionGranted = await verifyPermissions();

        if(!isCameraPermissionGranted) return

        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.7,
        });

        setPickedUrl(image.uri);
        onImage(image.uri);

    }

    return (
        <View style={styles.container}>
            <View style={styles.preview}>
                {!pickedUrl ? (
                    <Text style={styles.text}>No image selected!</Text>
                ) : (
                    <Image source={{ uri: pickedUrl }} style={styles.image} />
                )}
            </View>
            <TouchableOpacity onPress={handleTakeImage} style={styles.btnTakePic} >
                <Text style={styles.btnText} >TAKE PHOTO</Text>
                <IonicsIcons 
                    name='md-camera-outline' 
                    size={22}
                    color={ colors.black }
                />  
            </TouchableOpacity>
        </View>
    )
}

export default ImageSelector;