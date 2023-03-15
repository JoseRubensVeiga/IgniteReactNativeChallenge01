import styled from "styled-components/native";
import { gray400 } from "../../assets/styles/variables";

export const TasksCounterContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 24px;
`;

export const TaskCounter = styled.View`
  flex-direction: row;
  gap: 8px;
`;

export const TaskCounterTitle = styled.Text`
  font-weight: bold;
  font-size: 14px;
`;

export const TaskCounterValue = styled.Text`
  font-weight: bold;
  font-size: 14px;
  background-color: ${gray400};
  min-width: 25px;
  border-radius: 99px;
  text-align: center;
  color: #fff;
  padding: 0 5px;
`;
