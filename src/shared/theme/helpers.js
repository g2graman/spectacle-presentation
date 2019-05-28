import { mapProps } from 'recompose';
import { typeScale, lineHeights } from './typography';

export const withType = mapProps(({ f, lh, fw = 5, ...props }) => ({
    textSize: typeScale[f],
    style: {
        fontWeight: fw * 100,
        lineHeight: lineHeights[lh] ? lineHeights[lh] : lh,
    },
    ...props,
}));

export default withType;
