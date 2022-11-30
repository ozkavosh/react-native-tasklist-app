import styled, {css} from 'styled-components';
import colors from '../../utils/colors';

const StyledButton = styled.TouchableOpacity`
  background-color: ${colors.primary};
  height: 65px;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
`;

const StyledButtonText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 18px;
  text-transform: capitalize;
`;

const Button = (props) => {
  return (
    <StyledButton {...props}>
      <StyledButtonText>{props.title}</StyledButtonText>
    </StyledButton>
  );
};

export default Button;
