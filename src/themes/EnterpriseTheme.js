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
    alignment: "center",
    borderRadius: "12px",
    boxShadow: "3px 3px 3px 3px #efefef",
  },
  ".video_only_section": {
    backgroundColor: "#FFFFFF",
    height: "auto",
    video: "https://cdn.media.amplience.net/v/cebupacificair/[ONTIVA.COM]-A Message from our Chief Pilot for our 25th Anniversary-720P/mp4_720p",
    alignment: "center",
    borderRadius: "12px",
    videoSize: "600px",
    boxShadow: "3px 3px 3px 3px #efefef",
  },
  ".image_with_text_section": {
    backgroundColor: "#FFFFFF",
    height: "auto",
    image: "https://cdn.media.amplience.net/i/cebupacificair/Safety measures for contactless flights?w=undefined&amp;h=undefined&amp;sm=c&amp;scaleFit=poi&amp;poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}",
    title: "Title",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis sapien quis lectus elementum laoreet sed sit amet velit. Praesent nec enim est. Nulla blandit bibendum ipsum non gravida. Nam placerat purus quis lacinia consequat. Donec magna dolor, dictum ut tortor auctor, pulvinar ultricies turpis. Sed vulputate nunc sit amet iaculis placerat. Morbi non risus vel ex iaculis bibendum. Cras sit amet eleifend nisi, at mattis tortor. Nunc id ornare nunc. Donec porttitor euismod magna eu fermentum.",
    borderRadius: "12px",
    boxShadow: "3px 3px 3px 3px #efefef",
    titleColors: "#0074c9",
    paddingContent: "0 15px"
  },
  ".left_image_with_text_and_button_section": {
    backgroundColor: "#FFFFFF",
    height: "auto",
    image: "https://cdn.media.amplience.net/i/cebupacificair/Our-Story-About?w=800&amp;sm=c&amp;scaleFit=poi&amp;poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}",
    title: "Title",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis sapien quis lectus elementum laoreet sed sit amet velit. Praesent nec enim est. Nulla blandit bibendum ipsum non gravida. Nam placerat purus quis lacinia consequat. Donec magna dolor, dictum ut tortor auctor, pulvinar ultricies turpis. Sed vulputate nunc sit amet iaculis placerat. Morbi non risus vel ex iaculis bibendum. Cras sit amet eleifend nisi, at mattis tortor. Nunc id ornare nunc. Donec porttitor euismod magna eu fermentum.",
    borderRadius: "12px",
    boxShadow: "3px 3px 3px 3px #efefef",
    titleColors: "#0074c9",
    flexBasisLeft: "30%",
    flexBasisRight: "70%",
    url: "/pages/about/our-story/our-fleet",
    buttonColor: "#0077c8"
  },
  ".right_image_with_text_and_button_section": {
    backgroundColor: "#FFFFFF",
    height: "auto",
    image: "https://cdn.media.amplience.net/i/cebupacificair/Our-Story-About?w=800&amp;sm=c&amp;scaleFit=poi&amp;poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}",
    title: "Title",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis sapien quis lectus elementum laoreet sed sit amet velit. Praesent nec enim est. Nulla blandit bibendum ipsum non gravida. Nam placerat purus quis lacinia consequat. Donec magna dolor, dictum ut tortor auctor, pulvinar ultricies turpis. Sed vulputate nunc sit amet iaculis placerat. Morbi non risus vel ex iaculis bibendum. Cras sit amet eleifend nisi, at mattis tortor. Nunc id ornare nunc. Donec porttitor euismod magna eu fermentum.",
    borderRadius: "12px",
    boxShadow: "3px 3px 3px 3px #efefef",
    titleColors: "#0074c9",
    flexBasisLeft: "70%",
    flexBasisRight: "30%",
    url: "/pages/about/our-story/our-fleet",
    buttonColor: "#0077c8"
  },
  ".accordion_section": {
    backgroundColor: "#FFFFFF",
    height: "auto",
    title: "Title",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis sapien quis lectus elementum laoreet sed sit amet velit. Praesent nec enim est. Nulla blandit bibendum ipsum non gravida. Nam placerat purus quis lacinia consequat. Donec magna dolor, dictum ut tortor auctor, pulvinar ultricies turpis. Sed vulputate nunc sit amet iaculis placerat. Morbi non risus vel ex iaculis bibendum. Cras sit amet eleifend nisi, at mattis tortor. Nunc id ornare nunc. Donec porttitor euismod magna eu fermentum."
  },
  ".breadcrumbs": {
    backgroundColor: "",
    height: "auto",
    homepageName: "Home",
    homepagePath: "/homepage",
    parentcategoryName: "About",
    parentcategoryPath: "/about",
    currentpostName: "Our Story",
    currentpostPath: "/pages/about/our-story"
  },
  ".filter_section": {
    backgroundColor: "#FFFFFF",
    height: "auto",
  },
  ".media_gallery_section": {
    backgroundColor: "#FFFFFF",
    height: "auto",
    borderRadius: "12px",
    boxShadow: "3px 3px 3px 3px #efefef",
  },
  ".search_bar_section": {
    backgroundColor: "#FFFFFF",
    height: "auto",
    buttonColor: "#0077c8"
  },
  ".slider_wrapper_section": {
    backgroundColor: "#FFFFFF",
    height: "auto",
  },
  ".guide_banner": {
    backgroundColor: "#FFFFFF",
    height: "auto",
    title: "Looking for more destinations?",
    text: "We have more destinations to choose from!",
    button: "View all destinations",
    buttonLink: "https://www.cebupacificair.com/",
    borderRadius: "12px",
    boxShadow: "3px 3px 3px 3px #efefef"
  },
  ".sidebar": {
    backgroundColor: "#F4D03F",
    height: "40px"
  },
  ".footer_simple": {
    backgroundColor: "#ffffff",
    height: "auto",
    borderTop: "1px solid #efefef"
  },
  ".header_simple": {
    backgroundColor: "#ffffff",
    height: "260px",
    title: "Header",
    image: "https://images.jgsummit.com.ph/2018/05/23/2cfee4f98eb5e32d09abbc04dd5e18b777492fae.jpg",
    bannerImageWidth: "50%",
    bannerImagePosition: "right",
    borderBottom: "1px solid #efefef",
    borderRadius: "0"
  },
  ".cards": {
    backgroundColor: "#FFFFFF",
    height: "auto",
    card1Title: "Corporate Profile",
    card1Image: "https://cdn.media.amplience.net/i/cebupacificair/Corp-Prof?w=600&amp;sm=c&amp;scaleFit=poi&amp;poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}",
    card2Title: "Corporate Governance",
    card2Image: "https://cdn.media.amplience.net/i/cebupacificair/Corp-Gov?w=600&amp;sm=c&amp;scaleFit=poi&amp;poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}",
    card3Title: "Corporate Disclosures",
    card3Image: "https://cdn.media.amplience.net/i/cebupacificair/Corp-Disclosure?w=600&amp;sm=c&amp;scaleFit=poi&amp;poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}"
  },
  ".campaign_cards": {
    backgroundColor: "#FFFFFF",
    height: "auto",
    card1Title: "Corporate Profile",
    card1Image: "https://cdn.media.amplience.net/i/cebupacificair/Corp-Prof?w=600&amp;sm=c&amp;scaleFit=poi&amp;poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}",
    card2Title: "Corporate Governance",
    card2Image: "https://cdn.media.amplience.net/i/cebupacificair/Corp-Gov?w=600&amp;sm=c&amp;scaleFit=poi&amp;poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}",
    card3Title: "Corporate Disclosures",
    card3Image: "https://cdn.media.amplience.net/i/cebupacificair/Corp-Disclosure?w=600&amp;sm=c&amp;scaleFit=poi&amp;poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}",
    buttonColor: "#0077c8"
  },
  ".form_blocks":{
    backgroundColor: "#FFFFFF",
    height: "auto",
  },
};

export default <GlobalStyles styles={ENTERPRISE_THEME_STYLE} />;