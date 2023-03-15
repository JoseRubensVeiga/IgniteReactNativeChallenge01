import { Task } from "../../@types/Tasks";
import {
  Container,
  RadioButton,
  RadioButtonCheckedIcon,
  Description,
  DeleteButton,
  DeleteButtonContainer,
} from "./styles";

interface Props {
  task: Task;
  onRemove: () => void;
  onToggleChecked: () => void;
}

const TaskItem = ({ onRemove, onToggleChecked, task }: Props) => {
  function handleRemoveClick(): void {
    onRemove();
  }

  function handleToggleChecked(): void {
    onToggleChecked();
  }

  return (
    <Container>
      <RadioButton activated={task.checked} onPress={handleToggleChecked}>
        {task.checked ? <RadioButtonCheckedIcon /> : null}
      </RadioButton>
      <Description activated={task.checked}>{task.descricao}</Description>
      <DeleteButtonContainer onPress={handleRemoveClick}>
        <DeleteButton />
      </DeleteButtonContainer>
    </Container>
  );
};

export default TaskItem;
