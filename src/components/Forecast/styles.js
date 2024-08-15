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

  forecastLabel: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.textColor2,
    // width: '26%',
    textAlign: "left",
  },
});
export default styles;
