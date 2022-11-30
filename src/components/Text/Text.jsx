import styled, {css} from "styled-components/native";
import colors from '../../utils/colors';

export const H1 = styled.Text`
    font-weight: bold;
    color: black;
    font-size: 19px;
    ${props => {
        let styles = ``;
        if(props.mb) styles+=`margin-bottom: ${props.mb}px;`;
        if(props.mt) styles+=`margin-top: ${props.mt}px;`;
        if(props.me) styles+=`margin-right: ${props.me}px;`;
        if(props.ms) styles+=`margin-left: ${props.ms}px;`;
        if(props.mv) styles+=`margin-top: ${props.mv}px; margin-bottom: ${props.mv}px;`;
        if(props.mh) styles+=`margin-left: ${props.mh}px; margin-right: ${props.mh}px;`;
        if(props.fs) styles+=`font-size: ${props.fs}px;`;
        if(props.light) styles+=`color: white;`
        return css`${styles}`;
    }}
`;

export const P = styled.Text`
    ${props => {
        let styles = ``;
        if(props.mb) styles+=`margin-bottom: ${props.mb}px;`;
        if(props.mt) styles+=`margin-top: ${props.mt}px;`;
        if(props.me) styles+=`margin-right: ${props.me}px;`;
        if(props.ms) styles+=`margin-left: ${props.ms}px;`;
        if(props.mv) styles+=`margin-top: ${props.mv}px; margin-bottom: ${props.mv}px;`;
        if(props.mh) styles+=`margin-left: ${props.mh}px; margin-right: ${props.mh}px;`;
        if(props.fs) styles+=`font-size: ${props.fs}px;`;
        if(props.dark) styles+=`color: black;`
        if(props.light) styles+=`color: white;`
        if(props.primary) styles+=`color: ${colors.primary};`;
        if(props.center) styles+=`text-align: center;`;
        if(props.right) styles+=`text-align: right;`;
        if(props.bold) styles+=`font-weight: bold;`;
        return css`${styles}`;
    }}
`;

export const Span = styled.Text`
    ${props => {
        let styles = ``;
        if(props.mb) styles+=`margin-bottom: ${props.mb}px;`;
        if(props.mt) styles+=`margin-top: ${props.mt}px;`;
        if(props.me) styles+=`margin-right: ${props.me}px;`;
        if(props.ms) styles+=`margin-left: ${props.ms}px;`;
        if(props.mv) styles+=`margin-top: ${props.mv}px; margin-bottom: ${props.mv}px;`;
        if(props.mh) styles+=`margin-left: ${props.mh}px; margin-right: ${props.mh}px;`;
        if(props.fs) styles+=`font-size: ${props.fs}px;`;
        if(props.dark) styles+=`color: black;`
        if(props.light) styles+=`color: white;`
        if(props.primary) styles+=`color: ${colors.primary};`;
        if(props.center) styles+=`text-align: center;`;
        if(props.right) styles+=`text-align: right;`;
        if(props.bold) styles+=`font-weight: bold;`;
        return css`${styles}`;
    }}
`;