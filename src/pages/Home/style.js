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
  container: {
    backgroundColor: colors.backgroundColor,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
    width: "100%",
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
    marginBottom: 20,
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
    marginBottom: 20,
    borderRadius: 20,
    backgroundColor: colors.tileColor2,
    width: "100%",
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
    alignItems: "center",

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
    justifyContent: "space-around",
    alignItems: "center",
    width: '100%',

    item: {
      display: "flex",
      flexDirection: "column",
    },
    image: {
      // backgroundColor: colors.tileColor,
      borderRadius: 5,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 5,
      width: 50,
      height: 50,
    },
  },
});

export default styles;
