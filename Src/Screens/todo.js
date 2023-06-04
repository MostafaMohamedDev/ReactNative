import React from "react";
import { ScrollView } from "react-native";
import { useState } from "react";
import AddTask from "../Components/AddTask";
import Tasks from "../Components/Tasks";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const Add = (vale) => {
    setTasks([...tasks, vale]);
  };
  const Delete = (id) => {
    let newTasks = tasks.filter((t) => {
      return t.id !== id;
    });
    setTasks(newTasks);
  };
  return (
    <ScrollView>
      <AddTask Add={Add}></AddTask>
      <Tasks tasks={tasks} Delete={Delete}></Tasks>
    </ScrollView>
  );
};

export default Todo;
