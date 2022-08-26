import GlobalStyles from '@mui/material/GlobalStyles'

import { WHITE, EERIE_BLACK } from '../utils/constants/colors'

export const BASIC_THEME_STYLE = {
  body: {
    backgroundColor: WHITE,
    fontFamily: `'Roboto', 'Helvetica', 'Arial',sans-serif`,
    fontSize: '0.875rem',
    color: EERIE_BLACK,
  },
  p: {
    alignment: 'left',
    FontWeight: 'normal',
    FontSize: '14px',
    text: 'Welcome',
  },
  '.block_separator': {
    height: '40px',
    backgroundColor: '#F7F7F7',
  },
  '.image_only_section': {
    backgroundColor: '#FFFFFF',
    height: 'auto',
    image: 'https://cdn.media.amplience.net/i/cebupacificair/Safety measures for contactless flights?w=undefined&amp;h=undefined&amp;sm=c&amp;scaleFit=poi&amp;poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}',
    alignment: 'center',
  },
  '.video_only_section': {
    backgroundColor: '#FFFFFF',
    height: 'auto',
    video: 'https://cdn.media.amplience.net/v/cebupacificair/[ONTIVA.COM]-A Message from our Chief Pilot for our 25th Anniversary-720P/mp4_720p',
    alignment: 'center',
  },
  '.image_with_text_section': {
    backgroundColor: '#FFFFFF',
    height: 'auto',
    image: 'https://cdn.media.amplience.net/i/cebupacificair/Safety measures for contactless flights?w=undefined&amp;h=undefined&amp;sm=c&amp;scaleFit=poi&amp;poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}',
    title: 'Title',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis sapien quis lectus elementum laoreet sed sit amet velit. Praesent nec enim est. Nulla blandit bibendum ipsum non gravida. Nam placerat purus quis lacinia consequat. Donec magna dolor, dictum ut tortor auctor, pulvinar ultricies turpis. Sed vulputate nunc sit amet iaculis placerat. Morbi non risus vel ex iaculis bibendum. Cras sit amet eleifend nisi, at mattis tortor. Nunc id ornare nunc. Donec porttitor euismod magna eu fermentum.',
  },
  '.left_image_with_text_and_button_section': {
    backgroundColor: '#FFFFFF',
    height: 'auto',
    image: 'https://cdn.media.amplience.net/i/cebupacificair/Our-Story-About?w=800&amp;sm=c&amp;scaleFit=poi&amp;poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}',
    title: 'Title',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis sapien quis lectus elementum laoreet sed sit amet velit. Praesent nec enim est. Nulla blandit bibendum ipsum non gravida. Nam placerat purus quis lacinia consequat. Donec magna dolor, dictum ut tortor auctor, pulvinar ultricies turpis. Sed vulputate nunc sit amet iaculis placerat. Morbi non risus vel ex iaculis bibendum. Cras sit amet eleifend nisi, at mattis tortor. Nunc id ornare nunc. Donec porttitor euismod magna eu fermentum.',
    url: '/pages/about/our-story/our-fleet',
  },
  '.right_image_with_text_and_button_section': {
    backgroundColor: '#FFFFFF',
    height: 'auto',
    image: 'https://cdn.media.amplience.net/i/cebupacificair/Our-Story-About?w=800&amp;sm=c&amp;scaleFit=poi&amp;poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}',
    title: 'Title',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis sapien quis lectus elementum laoreet sed sit amet velit. Praesent nec enim est. Nulla blandit bibendum ipsum non gravida. Nam placerat purus quis lacinia consequat. Donec magna dolor, dictum ut tortor auctor, pulvinar ultricies turpis. Sed vulputate nunc sit amet iaculis placerat. Morbi non risus vel ex iaculis bibendum. Cras sit amet eleifend nisi, at mattis tortor. Nunc id ornare nunc. Donec porttitor euismod magna eu fermentum.',
    url: '/pages/about/our-story/our-fleet',
  },
  '.accordion_section': {
    backgroundColor: '#FFFFFF',
    height: 'auto',
    title: 'Title',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis sapien quis lectus elementum laoreet sed sit amet velit. Praesent nec enim est. Nulla blandit bibendum ipsum non gravida. Nam placerat purus quis lacinia consequat. Donec magna dolor, dictum ut tortor auctor, pulvinar ultricies turpis. Sed vulputate nunc sit amet iaculis placerat. Morbi non risus vel ex iaculis bibendum. Cras sit amet eleifend nisi, at mattis tortor. Nunc id ornare nunc. Donec porttitor euismod magna eu fermentum.',
  },
  '.breadcrumbs': {
    backgroundColor: '#FFFFFF',
    height: 'auto',
    homepageName: 'Home',
    homepagePath: '/homepage',
    parentcategoryName: 'About',
    parentcategoryPath: '/about',
    currentpostName: 'Our Story',
    currentpostPath: '/pages/about/our-story',
  },
  '.filter_section': {
    backgroundColor: '#FFFFFF',
    height: 'auto',
  },
  '.media_gallery_section': {
    backgroundColor: '#FFFFFF',
    height: 'auto',
  },
  '.search_bar_section': {
    backgroundColor: '#FFFFFF',
    height: 'auto',
  },
  '.slider_wrapper_section': {
    backgroundColor: '#FFFFFF',
    height: 'auto',
  },
  '.guide_banner': {
    backgroundColor: '#fbe700',
    height: 'auto',
    title: 'Looking for more destinations?',
    text: 'We have more destinations to choose from!',
    button: 'View all destinations',
    buttonLink: 'https://www.cebupacificair.com/',
  },
  '.sidebar': {
    backgroundColor: '#F4D03F',
    height: '40px',
  },
  '.footer_simple': {
    backgroundColor: '#fbe700',
    height: 'auto',
  },
  '.header_simple': {
    backgroundColor: '#fbe700',
    height: '160px',
    title: 'Header',
    image: 'https://cdn.media.amplience.net/i/cebupacificair/BKK-Bangkok-Thailand-SightSeeing2-6000x4000?w=1980&amp;sm=c&amp;scaleFit=poi&amp;poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}?&amp;fmt=jpg&amp;fmt.options=interlaced',
  },
  '.cards': {
    backgroundColor: '#FFFFFF',
    height: 'auto',
    card1Title: 'Corporate Profile',
    card1Image: 'https://cdn.media.amplience.net/i/cebupacificair/Corp-Prof?w=600&amp;sm=c&amp;scaleFit=poi&amp;poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}',
    card2Title: 'Corporate Governance',
    card2Image: 'https://cdn.media.amplience.net/i/cebupacificair/Corp-Gov?w=600&amp;sm=c&amp;scaleFit=poi&amp;poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}',
    card3Title: 'Corporate Disclosures',
    card3Image: 'https://cdn.media.amplience.net/i/cebupacificair/Corp-Disclosure?w=600&amp;sm=c&amp;scaleFit=poi&amp;poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}',
  },
  '.campaign_cards': {
    backgroundColor: '#FFFFFF',
    height: 'auto',
    card1Title: 'Corporate Profile',
    card1Image: 'https://cdn.media.amplience.net/i/cebupacificair/Corp-Prof?w=600&amp;sm=c&amp;scaleFit=poi&amp;poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}',
    card2Title: 'Corporate Governance',
    card2Image: 'https://cdn.media.amplience.net/i/cebupacificair/Corp-Gov?w=600&amp;sm=c&amp;scaleFit=poi&amp;poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}',
    card3Title: 'Corporate Disclosures',
    card3Image: 'https://cdn.media.amplience.net/i/cebupacificair/Corp-Disclosure?w=600&amp;sm=c&amp;scaleFit=poi&amp;poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}',
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
    btnColor2: '',
  },
}

export default <GlobalStyles styles={ BASIC_THEME_STYLE }/>