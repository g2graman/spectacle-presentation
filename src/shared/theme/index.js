import createTheme from "spectacle/lib/themes/default";

import colors from "./colors";
import * as typography from "./typography";
import * as helpers from "./helpers";

export const theme = createTheme(
    colors,
    typography.fontFamilies
);

export default {
    theme,
    helpers,
    typography,
    colors
};

