import GlobalStyles from "@mui/material/GlobalStyles"

import { WHITE, EERIE_BLACK } from "../utils/constants/colors"

export const BASIC_THEME_STYLE = {
  body: {
    backgroundColor: WHITE,
    fontFamily: `'Roboto', 'Helvetica', 'Arial',sans-serif`,
    fontSize: "0.875rem",
    color: EERIE_BLACK,
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
  },
  ".image_with_text_section": {
    backgroundColor: "#FFFFFF",
    height: "auto",
    image: "https://cdn.media.amplience.net/i/cebupacificair/Safety measures for contactless flights?w=undefined&amp;h=undefined&amp;sm=c&amp;scaleFit=poi&amp;poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}",
    title: "Title",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis sapien quis lectus elementum laoreet sed sit amet velit. Praesent nec enim est. Nulla blandit bibendum ipsum non gravida. Nam placerat purus quis lacinia consequat. Donec magna dolor, dictum ut tortor auctor, pulvinar ultricies turpis. Sed vulputate nunc sit amet iaculis placerat. Morbi non risus vel ex iaculis bibendum. Cras sit amet eleifend nisi, at mattis tortor. Nunc id ornare nunc. Donec porttitor euismod magna eu fermentum."
  },
  ".left_image_with_text_and_button_section": {
    backgroundColor: "#FFFFFF",
    height: "auto",
    image: "https://cdn.media.amplience.net/i/cebupacificair/Our-Story-About?w=800&amp;sm=c&amp;scaleFit=poi&amp;poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}",
    title: "Title",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis sapien quis lectus elementum laoreet sed sit amet velit. Praesent nec enim est. Nulla blandit bibendum ipsum non gravida. Nam placerat purus quis lacinia consequat. Donec magna dolor, dictum ut tortor auctor, pulvinar ultricies turpis. Sed vulputate nunc sit amet iaculis placerat. Morbi non risus vel ex iaculis bibendum. Cras sit amet eleifend nisi, at mattis tortor. Nunc id ornare nunc. Donec porttitor euismod magna eu fermentum.",
    url: "/pages/about/our-story/our-fleet"
  },
  ".right_image_with_text_and_button_section": {
    backgroundColor: "#FFFFFF",
    height: "auto",
    image: "https://cdn.media.amplience.net/i/cebupacificair/Our-Story-About?w=800&amp;sm=c&amp;scaleFit=poi&amp;poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}",
    title: "Title",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis sapien quis lectus elementum laoreet sed sit amet velit. Praesent nec enim est. Nulla blandit bibendum ipsum non gravida. Nam placerat purus quis lacinia consequat. Donec magna dolor, dictum ut tortor auctor, pulvinar ultricies turpis. Sed vulputate nunc sit amet iaculis placerat. Morbi non risus vel ex iaculis bibendum. Cras sit amet eleifend nisi, at mattis tortor. Nunc id ornare nunc. Donec porttitor euismod magna eu fermentum.",
    url: "/pages/about/our-story/our-fleet"
  },
  ".accordion_section": {
    backgroundColor: "#FFFFFF",
    height: "auto",
    title: "Title",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis sapien quis lectus elementum laoreet sed sit amet velit. Praesent nec enim est. Nulla blandit bibendum ipsum non gravida. Nam placerat purus quis lacinia consequat. Donec magna dolor, dictum ut tortor auctor, pulvinar ultricies turpis. Sed vulputate nunc sit amet iaculis placerat. Morbi non risus vel ex iaculis bibendum. Cras sit amet eleifend nisi, at mattis tortor. Nunc id ornare nunc. Donec porttitor euismod magna eu fermentum."
  },
  ".breadcrumbs": {
    backgroundColor: "#FFFFFF",
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
    height: "auto"
  },
  ".media_gallery_section": {
    backgroundColor: "#FFFFFF",
    height: "auto"
  },
  ".search_bar_section": {
    backgroundColor: "#FFFFFF",
    height: "auto"
  },
  ".slider_wrapper_section": {
    backgroundColor: "#FFFFFF",
    height: "auto"
  },
  ".guide_banner": {
    backgroundColor: "#fbe700",
    height: "auto",
    title: "Looking for more destinations?",
    text: "We have more destinations to choose from!",
    button: "View all destinations",
    buttonLink: "https://www.cebupacificair.com/"
  },
  ".sidebar": {
    backgroundColor: "#F4D03F",
    height: "40px"
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
    backgroundColor: "#fbe700",
    height: "160px",
    title: "Header",
    image: "https://cdn.media.amplience.net/i/cebupacificair/BKK-Bangkok-Thailand-SightSeeing2-6000x4000?w=1980&amp;sm=c&amp;scaleFit=poi&amp;poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}?&amp;fmt=jpg&amp;fmt.options=interlaced"
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
    card3Image: "https://cdn.media.amplience.net/i/cebupacificair/Corp-Disclosure?w=600&amp;sm=c&amp;scaleFit=poi&amp;poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}"
  },
  ".toggle-nav-tab-component": {
    background_color: "#f9eec0",
    button_text_color: "#000000",
    button_background_color: "#fee014",
    first_tab_name: "First",
    first_tab_panel_id: "first_tab_panel",
    second_tab_name: "Second",
    second_tab_panel_id: "second_tab_panel",
    active_tab_index: 0,
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
    font_size: "32px",
  },
  ".form_blocks": {
    backgroundColor: "#FFFFFF",
    height: "auto",
  },
  ".pincode_input": {
    action: "#",
    method: "",
    form_id: "login_pin_code_form",
    label_text: "PIN Code",
    input_placeholder: "Enter your PIN Code",
    input_max_length: 6,
    background_color: "#FFFFFF",
    form_fields_padding: "2rem",
    label_font_size: "1rem",
    button_border_radius: "24px",
  },
  ".signup_form": {
    action: "#",
    method: "",
    form_id: "sign_up_form",
    background_color: "#FFFFFF",
    form_fields_padding: "2rem",
    label_font_size: "1rem",
    button_background_color: "rgb(13, 110, 253)",
    button_text_color: "#ffffff",
    button_border_radius: "24px",
  },
  ".date-picker-component": {
    width: "auto",
    background_color: "#FFFFFF",
    input_background_color: "#FFFFFF",
    input_color: "#212529",
    input_font_size: "1rem",
    input_placeholder: "mm/dd/yyyy",
    input_label: "Date Label",
  },
  ".time-picker-component": {
    width: "auto",
    background_color: "#FFFFFF",
    input_background_color: "#FFFFFF",
    input_color: "#212529",
    input_font_size: "1rem",
    input_placeholder: "hh:mm a",
    input_label: "Time Label",
  },
  ".datetime-picker-component": {
    width: "auto",
    background_color: "#FFFFFF",
    input_background_color: "#FFFFFF",
    input_color: "#212529",
    input_font_size: "1rem",
    input_placeholder: "mm/dd/yyyy hh:mm a",
    input_label: "DateTime Label",
  },
  ".single-select-component": {
    width: "auto",
    background_color: "#FFFFFF",
    input_background_color: "#FFFFFF",
    input_color: "#212529",
    input_font_size: "1rem",
    input_label: "Single Select Label",
    input_placeholder: "Select an option",
    options: "red, green, blue",
  },
  ".multi-select-component": {
    width: "auto",
    height: "auto",
    background_color: "#FFFFFF",
    input_background_color: "#FFFFFF",
    input_color: "#212529",
    input_font_size: "1rem",
    input_label: "Multi Select Label",
    input_placeholder: "Select an option",
    options: "red, green, blue",
  },
  ".text-input-field-component": {
    width: "auto",
    background_color: "#FFFFFF",
    input_type: "text",
    input_background_color: "#FFFFFF",
    input_color: "#212529",
    input_font_size: "1rem",
    input_label: "Text Label",
    input_placeholder: "Text goes here",
    input_max_length: 150,
    input_num_max: 10,
    input_num_min: 0,
    input_num_step: 1,
    input_regex_pattern: "",
    input_default_value: "Default Value",
  },
  ".text-area-field-component": {
    width: "auto",
    height: "auto",
    background_color: "#FFFFFF",
    input_background_color: "#FFFFFF",
    input_color: "#212529",
    input_font_size: "1rem",
    input_label: "Text Label",
    input_placeholder: "Text goes here",
    input_max_length: 150,
    input_default_value: "Default Value",
    input_resize: "none",
  },
  ".button-with-text-component": {
    background_color: "transparent",
    width: "auto",
    padding: "0.375rem 0.75rem",
    button_type: "button",
    button_background_color: "#0d6efd",
    button_color: "#ffffff",
    button_font_size: "1rem",
    button_border_radius: "50rem",
    button_border_width: "1px",
    button_border_color: "transparent",
    button_border_style: "solid",
    button_is_disabled: "false",
    button_text_label: "Button",
    button_src_url: "",
  },
  ".button-with-icon-component": {
    background_color: "#FFFFFF",
    width: "auto",
    padding: "1rem",
    button_type: "button",
    button_background_color: "#cccccc",
    button_color: "#000000",
    button_font_size: "1rem",
    button_border_radius: "50rem",
    button_border_width: "1px",
    button_border_color: "transparent",
    button_border_style: "solid",
    button_is_disabled: "false",
    button_text_label: "Button",
    button_src_url: "",
    button_icon_url: "https://i8.amplience.net/i/cebupacificair/brown-bag-icon",
  },
  ".clickable-text-input-field-component": {
    width: "auto",
    background_color: "#FFFFFF",
    input_background_color: "#FFFFFF",
    input_color: "#212529",
    input_font_size: "1rem",
    input_placeholder: "Where to?",
  },
  ".address-button-component": {
    background_color: "#f7f7f7",
    width: "80%",
  },
  ".button-text-input-field-component": {
    width: "auto",
    background_color: "#FFFFFF",
    input_type: "text",
    input_background_color: "#FFFFFF",
    input_color: "#212529",
    input_font_size: "1rem",
    input_label: "Text Label",
    input_placeholder: "Text goes here",
    input_max_length: 150,
    input_default_value: "Default Value",
    button_background_color: "#6c757d",
    button_color: "#ffffff",
  },
  ".forgotpincode_input": {
    label1_text: "Forgot PIN Code",
    label1_fontStyle: "",
    label1_fontSize: "",
    label1_weight: "",

    backgroundColor: "",
    label2_text: "Forgot PIN Code",
    label2_fontStyle: "",
    label2_fontSize: "1.5rem",
    label2_weight: "900",

    input_placeholder: "Your Email",
    input_bgcolor: "",

    btn1_bgColor: "",
    btn2_bgColor: "",
  },
  ".profilestats": {
    backgroundColor: "white",
    label_weight: "",
    label_size: "",
    label1_text: "Points",
    label2_text: "DTP",
    label3_text: "Badges",
    label4_text: "Items",

    icon_color: "#006fc1",

    points_fontWeight: "",
    points_fontSize: "",
    points_fontColor: "#006fc1",
  },
  ".top-navbar-component": {
    background_color: "#fee014",
    brand_title_font_color: "#2472ba",
    brand_title: "App Name",
    visible_button_1: "true",
    button_1_image_url: "https://i8.amplience.net/i/cebupacificair/brown-bag-icon",
    visible_button_2: "false",
    button_2_image_url: "https://i8.amplience.net/i/cebupacificair/brown-bag-icon"
  },
  ".header-nav-component": {
    background_color: "#fee014",
    nav_button_color: "#373737",
    page_title_color: "#373737",
    page_title: "Page Title"
  },
  ".paragraph-component": {
    background_color: "transparent",
    font_color: "#000000",
    font_size: "0.875rem",
    p_content: "Text goes here",
    padding: "0"
  },
  ".profile-header-component": {
    backgroundColor: "#fee014",
    user_name: "Employee Full Name",
    nameSize: "",
    user_role: "Employee Role",
    roleSize: "",
    user_company: "Company Name",
    companySize: "",
  },
  ".profile-menu-component": {
    backgroundColor: "white",
    title1: "My Bookings",
    description1: "View your carpool/shuttle bookings",
    title2: "My Trips",
    description2: "View your share carpool rides",
    title3: "Feedback",
    description3: "Send us a feedback",
    title4: "FAQ",
    description4: "Read frequently asked questions",
    title5: "Settings",
    description5: "Update your account info",
    title6: "Log out",
    description6: "Log out your account",

    iconColor: "#fee014",
    headerSize: "",
    headerColor: "#0060a7",
    descriptionSize: "",
    descriptionColor: "",
  },
  ".find-pool-tab-panel-component": {
    backgroundColor: "#FFFFFF",
    borderTop: "1px solid #C0CED8",
    height: "60vh",
    marginTop: "0px",
    inputBorder: "1px solid #ced4da",
    inputContainerWidth: "60%",
    inputPlaceholder: "Where to?"
  }
}

export default <GlobalStyles styles={BASIC_THEME_STYLE}/>
