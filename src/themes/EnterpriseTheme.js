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
  },
  ".image_only_section": {
    backgroundColor: "#FFFFFF",
    height: "auto",
    image: "https://cdn.media.amplience.net/i/cebupacificair/Safety measures for contactless flights?w=undefined&amp;h=undefined&amp;sm=c&amp;scaleFit=poi&amp;poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}",
    alignment: "center"
  }
};

export default <GlobalStyles styles={ENTERPRISE_THEME_STYLE} />;