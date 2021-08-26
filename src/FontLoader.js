import * as React from "react";
import GoogleFontLoader from "react-google-font-loader";

export const FontLoader = () => (
  <GoogleFontLoader
    fonts={[
      {
        font: "Alegreya",
        weights: [400, 500, 700],
      },
      {
        font: "Nunito",
      },
    ]}
    subsets={["cyrillic-ext", "greek"]}
  />
);
