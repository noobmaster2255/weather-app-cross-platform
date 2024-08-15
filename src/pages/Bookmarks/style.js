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
  bookmarkContainer:{
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 20,
    paddingVertical: 30,
    marginBottom: 30,
    borderRadius: 20,
    backgroundColor: colors.tileColor2,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 0,
  },
  column1:{
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    // width: "50%",

    imageConatiner: {
      width: 90,
      height: 90,
      marginBottom: 20,
    },
    img: {
      width: 100,
      height: 100,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 5,
    },
    label1: {
      fontSize: 20,
      fontWeight: "bold",
      color: colors.textColor2,
    },
  },
  column2: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",

    label2: {
      fontSize: 40,
      fontWeight: "800",
      color: colors.textColor2,
      marginBottom: 10,
    },
  },
});

export default styles;
