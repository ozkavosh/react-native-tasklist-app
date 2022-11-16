import styled, {css} from "styled-components/native";

const Checkbox = styled.View`
    width: 18px;
    height: 18px;
    border: 1.3px solid black;
    ${props => props.checked && css`background-color: #50C2C9`}
`;

export default Checkbox;