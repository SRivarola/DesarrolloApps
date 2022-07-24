import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        alignItems: 'center',
    },
    preview: {
        width: "80%",
        height: 280,
        marginBottom: 20,
        justifyContent: "center",
        alignItems: "center",
        borderColor: colors.pink,
        backgroundColor: colors.white,
        borderWidth: 1,
        borderRadius: 20,
    },
    text: {
        fontFamily: 'Lato-Regular',
        fontSize: 16,
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 19,
    },
    btnTakePic: {
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: colors.darkPink,
        flexDirection: "row",
    },
    btnText: {
        paddingHorizontal: 5,
        paddingVertical: 10,
        color: colors.black,
        fontFamily: 'Lato-Bold'
    },
  });