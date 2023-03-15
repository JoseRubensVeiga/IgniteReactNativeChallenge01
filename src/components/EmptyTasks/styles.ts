import styled from "styled-components/native";
import { gray300 } from "../../assets/styles/variables";

export const Container = styled.View`
  padding: 48px 24px;
`;

export const EmptyIcon = styled.Image`
  height: 56px;
  width: 56px;
  align-self: center;
  margin-bottom: 16px;
`;

export const Title = styled.Text`
  text-align: center;
  color: ${gray300};
  font-weight: bold;
  font-size: 14px;
`;

export const Subtitle = styled.Text`
  text-align: center;
  color: ${gray300};
  font-size: 14px;
`;
