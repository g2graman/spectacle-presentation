import * as Spectacle from 'spectacle';
import styled from '@emotion/styled';
import { compose, defaultProps, withProps } from 'recompose';

import theme from "../theme";
const [{ withType }, { colors} ] = [theme.helpers, theme.colors];

export const defaultTypeProps = {
    lh: 'copy',
    textColor: 'secondary',
    textAlign: 'left',
    fw: 5
};

export const Heading = compose(
    defaultProps({
        ...defaultTypeProps,
        fw: undefined,
        lh: 'title',
        margin: '0 0 2rem 0',
        size: 3
    }),
    withType,
)(Spectacle.Heading);

export const Text = compose(
    defaultProps(defaultTypeProps),
    withType,
)(Spectacle.Text);

export const Inline = compose(
    defaultProps({
        ...defaultTypeProps,
        style: { display: 'inline-block' },
    }),
    withProps(props => {
        const textColor = Object.keys(props).find(p => colors[p]);
        return textColor ? { textColor } : {};
    }),
    withType,
)(Spectacle.Text);

export const Link = compose(
    defaultProps(defaultTypeProps),
    withType,
)(Spectacle.Link);

export const List = styled(Spectacle.List)`
  list-style: none;

  & li:before {
    content: ${props => (typeof props.marker !== 'undefined' ? `'${props.marker} '` : '"— "')};
    font-weight: 500;
  }`;

export const ListItem = compose(
    defaultProps({
        ...defaultTypeProps,
        fw: 4,
        style: { paddingLeft: '50px' }
    }),
    withType,
)(Spectacle.ListItem);

export const S = compose(
    defaultProps(defaultTypeProps),
    withType,
)(Spectacle.S);

export const Quote = compose(
    defaultProps(defaultTypeProps),
    withType,
)(Spectacle.Quote);

export const Code = compose(
    defaultProps(defaultTypeProps),
    withType,
)(Spectacle.Code);

export const Slide = styled(Spectacle.Slide)`
    ${({wide}) => wide && `
     &.spectacle-content {
            max-width: unset !important;
            padding: 0 75px !important;
     }`}
`;

export const CodePaneTitle = compose(
    defaultProps({
        ...defaultTypeProps,
        f: 3,
        style: {
            position: 'sticky',
            top: 0
        },
    }),
    withType
)(Text);
