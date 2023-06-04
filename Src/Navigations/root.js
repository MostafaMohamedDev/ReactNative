// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import routes from "../Common/routes";
import Users from "../Screens/users";
import Todo from "../Screens/todo";
import Icon from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

// const stack = createNativeStackNavigator();
const Root = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={routes.users}
        component={Users}
        options={{
          tabBarLabel: "Users",
          tabBarActiveTintColor: "blue",
          tabBarLabelStyle: {
            fontSize: 14,
          },
          tabBarIcon: () => (
            <Icon name="people-outline" size={25} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name={routes.todo}
        component={Todo}
        options={{
          tabBarLabel: "Todo",
          tabBarActiveTintColor: "blue",
          tabBarLabelStyle: {
            fontSize: 14,
          },

          tabBarIcon: () => <Icon name="checkmark-done-outline" size={25} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default Root;
