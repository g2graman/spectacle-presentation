import * as React from "react";
import { Heading, Slide } from "../../shared/components/primitives";

export const IntroSlide = props => (
    <Slide {...props}>
        <Heading
            size={2}
            bold={true}
        >
            Introduction
        </Heading>
    </Slide>
);

export default IntroSlide;
