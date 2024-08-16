import { StyleSheet } from "react-native";

const colors = {
  textColor: "#000",
  textColor2: "#fff",
  backgroundColor: "#fff",
  tileColor: "#deebfe",
  tileColor2: "#375f96",
  loginBtncolor: '#4185F4',
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    width: 300,
    // backgroundColor: colors.backgroundColor,
    backgroundColor:'#FAF9F6',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    width: "100%",
    height: 40,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#c8c7c4",
    borderRadius: 5,
    backgroundColor: colors.tileColor,

  },
  buttonContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#f44336",
  },
  button2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom:10,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
  buttonLogin: {
    backgroundColor: colors.loginBtncolor,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
  profileIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 75,
    backgroundColor: colors.tileColor,
    borderColor: '#FAF9F6',
    borderWidth: 5,
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  profileImg: {
    width: 85,
    height: 85,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default styles;
