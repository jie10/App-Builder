import GlobalStyles from '@mui/material/GlobalStyles';

import { WHITE, BLUE_CHARCOAL } from "../utils/constants/colors";

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
  },
  ".image_only_section": {
    backgroundColor: "#FFFFFF",
    height: "auto",
    image: "https://cdn.media.amplience.net/i/cebupacificair/Safety measures for contactless flights?w=undefined&amp;h=undefined&amp;sm=c&amp;scaleFit=poi&amp;poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}",
    alignment: "center"
  },
  ".video_only_section": {
    backgroundColor: "#FFFFFF",
    height: "auto",
    video: "https://cdn.media.amplience.net/v/cebupacificair/[ONTIVA.COM]-A Message from our Chief Pilot for our 25th Anniversary-720P/mp4_720p",
    alignment: "center"
  }
};

export default <GlobalStyles styles={OMNIX_THEME_STYLE} />;