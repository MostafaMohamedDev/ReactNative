import { View, Text, StyleSheet } from "react-native";
import Checkbox from "expo-checkbox";
import React, { useState } from "react";

const Task = ({ oneTask, Delete, getD }) => {
  const [isDone, setDone] = useState(false);
  const [isDeleted, setDelted] = useState(false);

  const deleteFunc = (newValue, id) => {
    setDelted(newValue);
    Delete(id);
    oneTask.isDone ? getD(false) : null;
    oneTask.isDone = false;
  };
  const getCount = (newValue) => {
    setDone(newValue);
    oneTask.isDone = newValue;
    getD(newValue);
  };

  return (
    <View key={oneTask.id} style={styles.Card}>
      <Text
        style={{
          textAlign: "center",
          fontSize: 20,
          width: 100,
          backgroundColor: "blue",
          color: "white",
          borderRadius: 10,
          textDecorationLine: isDone ? "line-through" : "none",
        }}
      >
        {oneTask.taskName}
      </Text>
      <View style={{ flexDirection: "row" }}>
        <Checkbox
          color={"blue"}
          value={isDone}
          onValueChange={(newValue) => getCount(newValue)}
        />
        <Text style={{ marginHorizontal: 5, fontSize: 15 }}>Done</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Checkbox
          color={"blue"}
          value={isDeleted}
          onValueChange={(newValue) => deleteFunc(newValue, oneTask.id)}
        />
        <Text style={{ marginHorizontal: 5, fontSize: 15 }}>Delete</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Card: {
    backgroundColor: "lightgray",
    margin: 10,
    padding: 10,
    borderRadius: 10,
    textAlign: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default Task;
