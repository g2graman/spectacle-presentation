import styled from "@emotion/styled";

export const CodeCompare = styled.div`
    ${(props) => !!props.tracks && `
        display: grid;
        grid-template-columns: repeat(${props.tracks}, 1fr);
        column-gap: 10px;
        grid-auto-flow: row;
    `}
`;


