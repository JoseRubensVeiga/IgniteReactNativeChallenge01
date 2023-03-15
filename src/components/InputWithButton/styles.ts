import styled from "styled-components/native";
import { blueDark, gray300, gray500 } from "../../assets/styles/variables";

export const Container = styled.View`
  height: 54px;
  margin-top: -27px;
  padding: 0 24px;
  flex-direction: row;
  gap: 4px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: gray300,
})`
  background-color: ${gray500};
  height: 54px;
  border-radius: 6px;
  flex-grow: 1;
  padding: 16px;
  color: #ffffff;
  font-size: 16px;
  text-decoration: none;
`;

export const AddButton = styled.TouchableOpacity`
  background-color: ${blueDark};
  border-radius: 6px;
  height: 54px;
  width: 54px;

  justify-content: center;
  align-items: center;
`;

export const AddButtonTextContainer = styled.View`
  height: 16px;
  width: 16px;
  border: 2px solid #fff;
  border-radius: 8px;

  justify-content: center;
  align-items: center;
`;

export const AddButtonText = styled.Text`
  color: #fff;
  line-height: 14px;
`;
