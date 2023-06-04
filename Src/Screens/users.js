import React from "react";
import { View, Text, SectionList, Image } from "react-native";
import styles from "../../style";

const Users = () => {
  const sections = [
    {
      id: "0",
      title: "Section A",
      data: [
        {
          id: "0",
          text: "User 1",
          src: require("../../assets/images/avatar-01.png"),
        },
        {
          id: "1",
          text: "User 2",
          src: require("../../assets/images/avatar-02.png"),
        },
        {
          id: "2",
          text: "User 3",
          src: require("../../assets/images/avatar-03.png"),
        },
      ],
    },
    {
      id: "1",
      title: "Section B",
      data: [
        {
          id: "3",
          text: "User 4",
          src: require("../../assets/images/avatar-04.png"),
        },
        {
          id: "4",
          text: "User 5",
          src: require("../../assets/images/avatar-05.png"),
        },
      ],
    },
    {
      id: "2",
      title: "Section C",
      data: [
        {
          id: "5",
          text: "User 6",
          src: require("../../assets/images/avatar-06.png"),
        },
      ],
    },
  ];
  return (
    <View>
      <SectionList
        sections={sections}
        renderSectionHeader={(props) => (
          <Text style={styles.headerStyle}>{props.section.title}</Text>
        )}
        renderItem={(props) => (
          <View style={{ flex: 1, flexDirection: "row", margin: 10 }}>
            <Image
              source={props.item.src}
              style={{ borderRadius: 50, height: 60, width: 60 }}
            ></Image>
            <Text
              style={{
                padding: 15,
                fontSize: 15,
                fontWeight: "bold",
              }}
            >
              {props.item.text}
            </Text>
          </View>
        )}
      ></SectionList>
    </View>
  );
};

export default Users;
