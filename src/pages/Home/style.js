import { StyleSheet } from "react-native";

// https://www.color-hex.com/color/5c9ffb
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
  topRowContainer:{
    display:'flex',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between',
    width:'100%',
    overflow:'hidden',
    marginTop: 10,
    marginBottom: 20,
  },
  currentLocationIcon:{
    width: 60,
    height:60,
  },  
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    display: "inline-block",
    boxSizing: "border-box",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
  },
  searchBar: {
    display: "inline-block",
    boxSizing: "border-box",
    height: 50,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    width: "85%",
  },
  searchIcon: {
    right: 1,
    alignItems: "center",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 20,
    marginBottom: 30,
    backgroundColor: colors.tileColor,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 0,
  },
  locationRow: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    width: "60%",
  },
  locationName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: colors.textColor,
  },
  weatherImg: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },

  // 2nd tile

  weatherContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 20,
    paddingVertical: 20,
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
  column1: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    width: "50%",

    imageConatiner: {
      width: 100,
      height: 100,
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
    weatherConditonLabel: {
      fontSize: 16,
      fontWeight: "bold",
      color: colors.textColor2,
    },
  },

  column2: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",

    temperatureLabel: {
      fontSize: 55,
      fontWeight: "800",
      color: colors.textColor2,
      marginBottom: 10,
    },
    feelslikeLabel: {
      fontSize: 16,
      fontWeight: "bold",
      color: colors.textColor2,
    },
  },

  itemsRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 30,

    item: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      borderRadius: 15,
      shadowColor: "#000",
      shadowOffset: { width: 1, height: 5 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      elevation: 5,
      backgroundColor: colors.tileColor,
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    image: {
      width: 50,
      height: 50,
      shadowColor: "#000",
      shadowOffset: { width: 1, height: 1 },
      shadowOpacity: 0.3,
      shadowRadius: 2,
      elevation: 5,
      marginBottom: 5,
    },
    itemText: {
      fontSize: 16,
      fontWeight: "bold",
    },
  },


  forecastContainer:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'space-around',
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 30,
    borderRadius: 20,
    backgroundColor: colors.tileColor2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 0,
    width:'100%',
  },

  forecatTitle:{
    color:colors.textColor2,
    fontSize:25,
    fontWeight:'800',
    marginBottom:20,
  },
  rowForecast:{
    display:'flex',
    flexDirection:'row',
    width:'100%',
    alignItems:'center',
    justifyContent:'space-between',
    paddingVertical: 20
  },
  forecastLabel:{
    fontSize: 14,
    fontWeight: '500',
    color:colors.textColor2,
    // width: '26%',
    textAlign:'left'
  }
});

export default styles;
