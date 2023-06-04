import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: { height: "90%", marginTop: Platform.OS === "android" ? 40 : 0 },
  largeViewStyle: { width: 200, height: 200, backgroundColor: "skyblue" },
  miniViewStyle: {
    width: 50,
    height: 50,
    backgroundColor: "rgb(0,0,255)",
    position: "absolute",
    bottom: 0,
    // margin:40
    // marginHorizontal:20
    // marginVertical:20
  },

  headerStyle: {
    fontSize: 20,
    backgroundColor: "gray",
    color: "white",
    padding: 5,
  },
  btnTitleStyle: {
    backgroundColor: "blue",
    borderRadius: 10,
    padding: 10,
    width: 80,
    marginVertical: 10,
    marginRight: 20,
  },
  textStyle: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },
  TextInputStyle: {
    borderRadius: 10,
    backgroundColor: "lightgray",
    padding: 15,
    margin: 10,
    width: 280,
    fontSize: 15,
  },
});
