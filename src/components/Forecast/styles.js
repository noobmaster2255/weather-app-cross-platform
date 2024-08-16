import { StyleSheet } from "react-native";

const colors = {
  textColor: "#000",
  textColor2: "#fff",
    backgroundColor: "#fff",
  tileColor: "#deebfe",
  tileColor2: "#375f96",
};

const styles = StyleSheet.create({
  rowForecast: {
    display: "flex",
    flexDirection: "row",
    gap: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
  },

  forecastContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 100,
    borderRadius: 20,
    backgroundColor: colors.tileColor2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
    width: "100%",
  },

  forecatTitle: {
    color: colors.textColor2,
    fontSize: 25,
    fontWeight: "800",
    marginBottom: 20,
  },
  forecastLabel: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.textColor2,
    // width: '26%',
    textAlign: "left",
  },
});
export default styles;
