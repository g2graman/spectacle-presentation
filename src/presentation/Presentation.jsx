import * as React from "react";
import { Deck } from "spectacle";


import { theme } from "../shared/theme";

import IntroSlide from "./slides/intro-slide";

export const Presentation = () => (
    <Deck
        transition={['slide', 'fade']}
        transitionDuration={500}
        theme={theme}
        progress="pacman"
    >
        <IntroSlide/>
    </Deck>
);

export default Presentation;
