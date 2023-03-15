import { Task } from "../../@types/Tasks";
import EmptyTasks from "../EmptyTasks";
import TaskItem from "../TaskItem";
import TasksCounter from "../TasksCounter";

import { Container, TasksList } from "./styles";

interface Props {
  tasks: Task[];
  onRemove: (taskId: string) => void;
  onToggleChecked: (taskId: string) => void;
}

const Tasks = ({ tasks, onRemove, onToggleChecked }: Props) => {
  function handleRemoveTask(task: Task): void {
    onRemove(task.id);
  }

  function handleToggleChecked(task: Task): void {
    onToggleChecked(task.id);
  }

  return (
    <Container>
      <TasksCounter tasks={tasks} />

      <TasksList
        key={"id"}
        data={tasks}
        ListEmptyComponent={EmptyTasks}
        renderItem={(item: any) => (
          <TaskItem
            task={item.item}
            onRemove={() => handleRemoveTask(item.item)}
            onToggleChecked={() => handleToggleChecked(item.item)}
          />
        )}
      />
    </Container>
  );
};

export default Tasks;
