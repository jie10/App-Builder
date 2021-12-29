import { dividerClasses } from '@mui/material';
import GlobalStyles from '@mui/material/GlobalStyles';

import { WHITE, BLUE_CHARCOAL, BLACK } from "../utils/constants/colors";

export const OMNIX_THEME_STYLE = {
  body: {
    backgroundColor: WHITE,
    fontFamily: `"FSAlbert", sans-serif`,
    fontSize: "1rem",
    color: BLUE_CHARCOAL
  },
  p: {
    alignment: "left",
    FontWeight: "normal",
    FontSize: "14px",
    text: "Welcome"
  },
  ".block_separator": {
    height: "40px",
    backgroundColor: "#F7F7F7"
  }
};

export default <GlobalStyles styles={OMNIX_THEME_STYLE} />;