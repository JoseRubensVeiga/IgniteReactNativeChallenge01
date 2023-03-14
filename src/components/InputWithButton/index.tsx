import {
  Container,
  Input,
  AddButton,
  AddButtonText,
  AddButtonTextContainer,
} from "./styles";

const InputWithButton = () => {
  return (
    <Container>
      <Input />
      <AddButton>
        <AddButtonTextContainer>
          <AddButtonText>+</AddButtonText>
        </AddButtonTextContainer>
      </AddButton>
    </Container>
  );
};

export default InputWithButton;
