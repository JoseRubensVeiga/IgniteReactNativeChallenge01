import { useState } from "react";
import { gray300 } from "../../assets/styles/variables";
import {
  Container,
  Input,
  AddButton,
  AddButtonText,
  AddButtonTextContainer,
} from "./styles";

interface Props {
  onAdd: (description: string) => void;
}

const InputWithButton = ({ onAdd }: Props) => {
  const [description, setDescription] = useState("");

  function handleAdd(): void {
    onAdd(description);
    setDescription("");
  }

  return (
    <Container>
      <Input
        value={description}
        onChangeText={setDescription}
        placeholder="Adicione uma nova tarefa"
      />
      <AddButton onPress={handleAdd}>
        <AddButtonTextContainer>
          <AddButtonText>+</AddButtonText>
        </AddButtonTextContainer>
      </AddButton>
    </Container>
  );
};

export default InputWithButton;
