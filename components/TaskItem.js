import { Pressable, StyleSheet, Text, View } from "react-native";

export default function TaskItem({ task, onDelete }) {
  return (
    <Pressable onPress={() => onDelete(task.id)}>
      <View style={styles.taskItem}>
        <Text style={styles.taskText}>{task.text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  taskItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#fff",
    borderRadius: 5,
    flexDirection: "row", // Flexbox en fila
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 2, // sombra en Android
  },
  taskText: {
    fontSize: 16,
  },
});
