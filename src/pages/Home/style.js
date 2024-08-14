import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
    padding: 10,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
    // backgroundColor: "yellow",
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
  weatherContainer: {
    backgroundColor: "yellow",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 40,
    paddingVertical: 20,
    width: "100%",
    borderRadius: 15,
  },
  locationContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  weatherImg: {
    width: 70,
    height: 70,
    resizeMode: "contain",
  },
});

export default styles;
