import { StyleSheet } from "react-native";

const colors = {
  textColor: "#000",
  textColor2: "#fff",
  backgroundColor: "#fff",
  tileColor: "#deebfe",
  tileColor2: "#375f96",
};
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  contentContainer:{
    flexGrow: 1
  },
  container: {
    backgroundColor: colors.backgroundColor,
    display:'flex',
    flexDirection:'column',
    alignItems: "center",
    paddingHorizontal: 25,
    paddingVertical: 10,
  },
  titile:{
    marginTop: 10,
    fontSize: 25,
    fontWeight:'bold',
    marginBottom: 30,
  },
  profileIcon:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 75,
    backgroundColor:colors.tileColor,
    borderColor: colors.tileColor2,
    borderWidth:5,
    width:120,
    height:120,
  },
  profileImg:{
    width:100,
    height:100,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 0,
  },
});

export default styles;
