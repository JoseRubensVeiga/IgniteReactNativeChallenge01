import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { Task } from "./src/@types/Tasks";
import Header from "./src/components/Header";
import InputWithButton from "./src/components/InputWithButton";
import Tasks from "./src/components/Tasks";
import uuid from "react-native-uuid";

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function addTask(description: string): void {
    const task: Task = {
      id: uuid.v4().toString(),
      descricao: description,
      checked: false,
    };

    setTasks((tasks) => [task, ...tasks]);
  }

  function removeTask(taskId: string): void {
    setTasks((tasks) => tasks.filter((t) => t.id !== taskId));
  }

  function toggleCheckedTask(taskId: string): void {
    setTasks((tasks) =>
      tasks.map((t) => (t.id === taskId ? { ...t, checked: !t.checked } : t))
    );
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={{ flex: 1, backgroundColor: "#191919" }}>
        <Header />
        <InputWithButton
          onAdd={(description: string) => addTask(description)}
        />
        <Tasks
          tasks={tasks}
          onRemove={(taskId: string) => removeTask(taskId)}
          onToggleChecked={(taskId: string) => toggleCheckedTask(taskId)}
        />
      </View>
    </>
  );
}
