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
    flexGrow: 1,
    alignItems:'center',
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
});

export default styles;
