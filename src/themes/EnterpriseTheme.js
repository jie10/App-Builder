import GlobalStyles from '@mui/material/GlobalStyles';

import { WHITE, NIGHT_RIDER } from "../utils/constants/colors";

export const ENTERPRISE_THEME_STYLE = {
  body: {
    backgroundColor: WHITE,
    fontFamily: `"Calibri", Fallback, Arial, sans-serif`,
    fontSize: "0.875rem",
    color: NIGHT_RIDER
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

export default <GlobalStyles styles={ENTERPRISE_THEME_STYLE} />;