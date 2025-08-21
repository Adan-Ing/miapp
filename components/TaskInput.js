import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

export default function TaskInput({ onAddTask }) {
  const [enteredTask, setEnteredTask] = useState("");

  const addTaskHandler = () => {
    onAddTask(enteredTask);
    setEnteredTask(""); // limpiar campo
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Escribe una tarea..."
        style={styles.input}
        value={enteredTask}
        onChangeText={setEnteredTask}
      />
      <Button title="Agregar" onPress={addTaskHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row", // Flexbox en fila
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    flex: 1, // ocupa todo el espacio disponible
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginRight: 10,
    padding: 5,
  },
});
