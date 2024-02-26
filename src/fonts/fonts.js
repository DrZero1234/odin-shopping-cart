import { createGlobalStyle } from "styled-components";

import OswaldRegularWoff from "./OswaldRegular/Oswald/Oswald.woff";
import OswaldRegularWoff2 from "./OswaldRegular/Oswald/Oswald.woff2";

import OswaldMediumWoff from "./OswaldMedium/OswaldMedium/OswaldMedium.woff";
import OswaldMediumWoff2 from "./OswaldMedium/OswaldMedium/OswaldMedium.woff2";

import OswaldBoldWoff from "./OswaldBold/OswaldBold/OswaldBold.woff";
import OswaldBoldWoff2 from "./OswaldBold/OswaldBold/OswaldBold.woff2";

export const GlobalFonts =  createGlobalStyle`
    @font-face {
        font-family: "OswaldRegular";
        src: url(${OswaldRegularWoff}) format("woff"),
        url(${OswaldRegularWoff2}) format("woff2");
        font-weight: 400
    };

    @font-face {
        font-family: "OswaldMedium";
        src: url(${OswaldMediumWoff}) format("woff"),
        url(${OswaldMediumWoff2}) format("woff2");
        font-weight: 500
    };

    @font-face {
        font-family: "OswaldBold";
        src: url(${OswaldBoldWoff}) format("woff"),
        url(${OswaldBoldWoff2}) format("woff2");
        font-weight: 700
    }
`;