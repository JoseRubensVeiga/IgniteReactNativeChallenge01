import { Container, EmptyIcon, Title, Subtitle } from "./styles";

const EmptyTasks = () => {
  return (
    <Container>
      <EmptyIcon source={require("../../assets/empty.png")} />
      <Title>Você ainda não tem tarefas cadastradas</Title>
      <Subtitle>Crie tarefas e organize seus itens a fazer</Subtitle>
    </Container>
  );
};

export default EmptyTasks;
