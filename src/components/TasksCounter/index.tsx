import { Task } from "../../@types/Tasks";
import { blue, purple } from "../../assets/styles/variables";
import {
  TasksCounterContainer,
  TaskCounter,
  TaskCounterTitle,
  TaskCounterValue,
} from "./styles";

interface Props {
  tasks: Task[];
}

const TasksCounter = ({ tasks }: Props) => {
  return (
    <TasksCounterContainer>
      <TaskCounter>
        <TaskCounterTitle style={{ color: blue }}>Criadas</TaskCounterTitle>
        <TaskCounterValue>{tasks.length}</TaskCounterValue>
      </TaskCounter>

      <TaskCounter>
        <TaskCounterTitle style={{ color: purple }}>
          Concluídas
        </TaskCounterTitle>
        <TaskCounterValue>
          {tasks.filter((t) => t.checked).length}
        </TaskCounterValue>
      </TaskCounter>
    </TasksCounterContainer>
  );
};

export default TasksCounter;
