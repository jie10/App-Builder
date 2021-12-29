import GlobalStyles from '@mui/material/GlobalStyles';

import { WHITE, EERIE_BLACK } from "../utils/constants/colors";

export const BASIC_THEME_STYLE = {
  body: {
    backgroundColor: WHITE,
    fontFamily: `'Roboto', 'Helvetica', 'Arial',sans-serif`,
    fontSize: "0.875rem",
    color: EERIE_BLACK
  },
  p: {
    alignment: "left",
    FontWeight: "normal",
    FontSize: "14px",
    text: "Welcome"
  }
};

export default <GlobalStyles styles={BASIC_THEME_STYLE} />;