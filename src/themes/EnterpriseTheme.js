import GlobalStyles from '@mui/material/GlobalStyles'

import { WHITE, NIGHT_RIDER } from '../utils/constants/colors'

export const ENTERPRISE_THEME_STYLE = {
  body: {
    backgroundColor: WHITE,
    fontFamily: `"Calibri", Fallback, Arial, sans-serif`,
    fontSize: '0.875rem',
    color: NIGHT_RIDER,
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
  ".list_section": {
    backgroundColor: "#fff",
    height: "auto",
    count: 3,
    cellPadding: "4px 16px"
  },
  ".wide_button": {
    backgroundColor: "#fff",
    height: "auto",
    button_height: "48px",
    button_background: "linear-gradient(134.96deg, #00A4E5 17.86%, #006FC1 87.93%)",
    padding: "0",
    margin: "0",
    label: "Start"
  },
  ".header_simple": {
    backgroundColor: "#ffffff",
    height: "260px",
    title: "Header",
    HeaderTitleAlignment: "center",
    HeaderTitleColor: "#0060a7",
    HeaderTitleSize: "41px",
    backButton: "block",
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
  ".toggle-nav-tab-component": {
    background_color: "#f9eec0",
    button_text_color: "#000000",
    button_background_color: "#fee014",
    first_tab_name: "First",
    first_tab_panel_id: "first_tab_panel",
    second_tab_name: "Second",
    second_tab_panel_id: "second_tab_panel",
    active_tab_index: 0
  },
  ".splash-screen-component": {
    position: "relative",
    background_color: "#f7f7f7",
    logo_url: "https://i8.amplience.net/i/cebupacificair/ceb-it-logo",
    logo_width: "240px",
    logo_height: "100%",
    alt_text: "splash screen IT logo",
    brandname_title: "App Name",
    text_color: "#006EBF",
    font_size: "32px"
  },
    '.form_blocks': {
    backgroundColor: '#FFFFFF',
    height: 'auto',
  },
  '.PinCode_Input': {
    backgroundColor: '#FFFFFF',
    height: 'auto',
    width: 'auto',
    fontFamily: '\'Source Sans Pro\', sans-serif',
    placeholder: 'Enter your Pin Code',
  },
  '.Signup_Form': {
    placeholder: 'Enter your CEB Email',
    placeholder2: '92xx xxx xxx',
    label1: 'Email',
    label2: 'Mobile Number',
    label3: 'Target Location',
    label4: 'No Landmark',
    text1: 'Your preferred pickup or drop off used in carpool matching',
    text2: 'Region, province, municipality, Barangay',
    fontSize1: '',
    fontFamily1: '',
    fontWeight1: '',
    color1: '',

    fontSize: '',
    fontFamily: '',
    fontWeight: '',
    color: '',
    borderRadius: '',

    fontSize2: '',
    fontFamily2: '',
    fontWeight2: '',
    color2: '',

    fontSize3: '',
    fontFamily3: '',
    fontWeight3: '',
    color3: '',

    btnHeight: '',
    btnWidth: '',
    btnColor: '',
    btnRadius: '',

    imgHeight: '',
    imgWidth: '',

    textSize1: '',
    textFamily1: '',
    textWeight1: '',
    textcolor1: '',

    textSize2: '',
    textFamily2: '',
    textWeight2: '',
    textcolor2: '',

    btnradius2: '',
    btnHeight2: '',
    btnWidth2: '',
    btnColor2: ''
  },
  ".bottom_navbar": {
    height: "60px",
    backgroundColor: "#F7F7F7",
    fontColor: "#373737",
    BottomNavbarItem1Name: "Carpool",
    BottomNavbarItem1URL: "https://cebupacificair-dev.apigee.net/ceb-poc-juander_dev/app/carpool",
    BottomNavbarItem1Icon: "car",
    BottomNavbarItem2Name: "Shuttle",
    BottomNavbarItem2URL: "https://cebupacificair-dev.apigee.net/ceb-poc-juander_dev/app/shuttle",
    BottomNavbarItem2Icon: "airport_shuttle",
    BottomNavbarItem3Name: "Account",
    BottomNavbarItem3URL: "https://cebupacificair-dev.apigee.net/ceb-poc-juander_dev/app/account",
    BottomNavbarItem3Icon: "person",
    BottomNavbarItem4Name: "#",
    BottomNavbarItem4URL: "#",
    BottomNavbarItem4Icon: "#",
  },
  '.date-picker-component': {
    width: 'auto',
    background_color: '#FFFFFF',
    input_background_color: '#FFFFFF',
    input_color: '#212529',
    input_font_size: '1rem',
    input_placeholder: 'mm/dd/yyyy',
    input_label: 'Date Label',
  },
  '.time-picker-component': {
    width: 'auto',
    background_color: '#FFFFFF',
    input_background_color: '#FFFFFF',
    input_color: '#212529',
    input_font_size: '1rem',
    input_placeholder: 'hh:mm a',
    input_label: 'Time Label',
  },
  '.datetime-picker-component': {
    width: 'auto',
    background_color: '#FFFFFF',
    input_background_color: '#FFFFFF',
    input_color: '#212529',
    input_font_size: '1rem',
    input_placeholder: 'mm/dd/yyyy hh:mm a',
    input_label: 'DateTime Label',
  }
};

export default <GlobalStyles styles={ ENTERPRISE_THEME_STYLE }/>