import GlobalStyles from '@mui/material/GlobalStyles';

import { WHITE, BLUE_CHARCOAL } from "../utils/constants/colors";

export const OMNIX_THEME_STYLE = {
  body: {
    backgroundColor: WHITE,
    fontFamily: `"FSAlbert", sans-serif`,
    fontSize: "1rem",
    fontColor: BLUE_CHARCOAL
  }
};

export default <GlobalStyles styles={OMNIX_THEME_STYLE} />;