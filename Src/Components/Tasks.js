import { View, Text, StyleSheet } from "react-native";
import Task from "./Task";
import { useState } from "react";

const Tasks = ({ tasks, Delete }) => {
  const [CounterDoned, setCounterDoned] = useState(0);
  //   useEffect(() => {
  //       console.warn(tasks);
  //     getCount();
  //   }, [tasks]);

  const getDone = (f) => {
    f ? setCounterDoned(CounterDoned + 1) : setCounterDoned(CounterDoned - 1);
  };
  return (
    <View style={styles.container}>
      <Text style={{ textAlign: "center", fontSize: 20 }}>
        {CounterDoned} done of {tasks.length} tasks
      </Text>
      {tasks.map((oneTask) => (
        <Task
          key={oneTask.id}
          oneTask={oneTask}
          Delete={Delete}
          getD={getDone}
        ></Task>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    margin: 10,
    textAlign: "center",
  },
});

export default Tasks;
