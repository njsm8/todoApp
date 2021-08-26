import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import TodoInput from "./TodoInput";

export default function App() {
  const [todoItems, setTodoItems] = useState([
    { text: "Buy groceries", completed: true },
    { text: "Make blogpost", completed: false },
  ]);

  function addTodoItem(_text) {
    setTodoItems([...todoItems, { text: _text, completed: false }]);
  }

  function deleteTodoItem(_index) {
    let tempArr = [...todoItems];
    tempArr.splice(_index, 1);
    setTodoItems(tempArr);
  }

  return (
    <>
      <StatusBar barStyle={"light-content"} backgroundColor={"#212121"} />
      <SafeAreaView style={{ padding: 16 }}>
        <Text style={{ fontSize: 36, fontWeight: "bold" }}>Todo</Text>
        <TodoInput onPress={addTodoItem} />
        <FlatList
          data={todoItems}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                style={{ paddingVertical: 8 }}
                onPress={() => {
                  deleteTodoItem(index);
                }}
              >
                <Text style={{ fontSize: 18 }}>{item.text}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
