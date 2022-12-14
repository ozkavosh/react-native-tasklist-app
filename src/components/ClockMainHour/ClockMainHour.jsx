import styled, { css } from "styled-components/native";
import colors from '../../utils/colors';

const MainHour = styled.Text`
  position: absolute;
  font-weight: bold;
  font-size: 15px;
  color: ${colors.primary};
  ${props => {
    switch (props.position) {
      case 'bottom':
        return css`
          bottom: 0;
          left: 47%;
        `;
      case 'left':
        return css`
          top: 42%;
          left: 5%;
        `;
      case 'right':
        return css`
          top: 42%;
          right: 5%;
        `;
      default:
        return css`
          top: 0;
          left: 44%;
        `;
    }
  }}
`;

export default MainHour;