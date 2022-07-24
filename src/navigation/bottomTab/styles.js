import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    buttomTab: {
        position: 'absolute',
        bottom: 10,
        left: 20,
        right: 20,
        backgroundColor: colors.pink,
        borderRadius: 15,
        height: 80,
    },
    imagen: {
        borderRadius: 25,
        height: 40,
        width: 40,
    },
});