import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
  containerKeyboard: {
    flex: 1,
    backgroundColor: colors.black,
  },
  container: {
    flex: 1,
    margin: 20,
  },
  title: {
    fontFamily: 'Lato-Bold',
    textAlign: 'center',
    fontSize: 18,
    color: colors.white,
  },
  userNameContainer: {
    margin: 10,
    height: 190,
    color: colors.white,
  },
  label: {
    color: colors.white,
    marginTop: 10,
  },
  input: {
    backgroundColor: colors.white,
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 5,
    height: 40,
    padding: 10,
  },
  errorContainer: {
    height: 30,
    marginBottom: 10,
    flexDirection: 'row',
    marginHorizontal: 20,
    alignItems: 'center',
  },
  errorTxt: {
    color: colors.darkPink,
    marginLeft: 5,
  },
  userNameBtn: {
    alignItems: 'center',
    marginHorizontal: '25%',
    borderRadius: 10,
    backgroundColor: colors.darkPink,
    marginBottom: 20,
  },
  textBtn: {
    paddingVertical: 10,
    color: colors.black,
    fontFamily: 'Lato-Bold'
  },
  userImgContainer: {
    margin: 10,
    flex: 1,
  },
});