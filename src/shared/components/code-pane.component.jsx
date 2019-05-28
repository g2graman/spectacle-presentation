import styled from "@emotion/styled";
import { compose, defaultProps } from "recompose";
import * as Spectacle from "spectacle";

import theme from "../theme";
import { defaultTypeProps } from "./primitives";

const { withType } = theme.helpers;


const MyCodePane = styled(Spectacle.CodePane)`
    ${props => props.fill && `
        margin: unset;
        height: 100%;
        
        pre.prism-code {
            height: 100%;
        }
    `}
`;


export const CodePane = compose(
    defaultProps({
        ...defaultTypeProps,
        fw: undefined,
        f: 5
    }),
    withType,
)(MyCodePane);
