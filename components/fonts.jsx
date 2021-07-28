import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
        font-family: 'Heading Font Name';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('./fonts/Montserrat-Bold.ttf ') format('opentype');
      }
      /* latin */
      @font-face {
        font-family: 'Body Font Name';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('./fonts/Montserrat-regular.ttf') format('opentype');
      }
      `}
  />
);

export default Fonts;
