import styled from "styled-components/native";
import {
  blue,
  gray100,
  gray300,
  gray400,
  purple,
} from "../../assets/styles/variables";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCheck, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export const Container = styled.View`
  height: 64px;
  background-color: ${gray400};
  margin-bottom: 8px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  border: 1px solid ${gray300};
`;

interface RadioButtonProps {
  activated?: boolean;
}

export const RadioButton = styled.TouchableOpacity`
  height: 18px;
  width: 18px;
  ${(props: RadioButtonProps) =>
    props.activated ? `` : `border: 2px solid ${blue}`}
  border-radius: 20px;
  background-color: ${(props: RadioButtonProps) =>
    props.activated ? purple : `transparent`};
  justify-content: center;
  align-items: center;
`;

export const RadioButtonCheckedIcon = styled(FontAwesomeIcon).attrs({
  icon: faCheck,
  size: 12,
})`
  color: #fff;
`;

interface DescriptionProps {
  activated?: boolean;
}
export const Description = styled.Text`
  margin: 0 8px;
  flex-grow: 1;
  color: ${(props: DescriptionProps) => (props.activated ? gray300 : gray100)}
  font-size: 14px;
  ${(props: DescriptionProps) =>
    props.activated ? `text-decoration: line-through` : ""}
`;

export const DeleteButtonContainer = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
`;

export const DeleteButton = styled(FontAwesomeIcon).attrs({
  icon: faTrashAlt,
})`
  color: ${gray300};
`;
