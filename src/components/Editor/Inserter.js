import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux'

import ListSubheader from '@mui/material/ListSubheader'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import DraftsIcon from '@mui/icons-material/Drafts'
import SendIcon from '@mui/icons-material/Send'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import StarBorder from '@mui/icons-material/StarBorder'

import {
  sendBlocks,
} from '../../stores/actions'

const Inserter = (props) => {
  const {isInserterVisible, sendBlocks} = props
  const [ open, setOpen ] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  const componentList = (
    <List
      sx={ {width: '100%', maxWidth: 360, bgcolor: 'background.paper'} }
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Blocks
        </ListSubheader>
      }>
      <ListItemButton onClick={ () => sendBlocks({
        type: 'HEADER', parameters: {
          backgroundColor: '#fbe700',
          height: '160px',
          title: 'Header',
        },
      }) }>
        <ListItemIcon>
          <SendIcon/>
        </ListItemIcon>
        <ListItemText primary="Header"/>
      </ListItemButton>
      <ListItemButton onClick={ handleClick }>
        <ListItemIcon>
          <InboxIcon/>
        </ListItemIcon>
        <ListItemText primary="Sections"/>
        { open ? <ExpandLess/> : <ExpandMore/> }
      </ListItemButton>
      <Collapse in={ open } timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={ {pl: 4} } onClick={ () => sendBlocks({type: 'SECTION_SSO', parameters: {}}) }>
            <ListItemIcon>
              <StarBorder/>
            </ListItemIcon>
            <ListItemText primary="SSO Login"/>
          </ListItemButton>
          <ListItemButton sx={ {pl: 4} } onClick={ () => sendBlocks({type: 'SECTION_CARDS', parameters: {}}) }>
            <ListItemIcon>
              <StarBorder/>
            </ListItemIcon>
            <ListItemText primary="Cards"/>
          </ListItemButton>
          <ListItemButton sx={ {pl: 4} } onClick={ () => sendBlocks({type: 'SECTION_CAROUSEL', parameters: {}}) }>
            <ListItemIcon>
              <StarBorder/>
            </ListItemIcon>
            <ListItemText primary="Carousel"/>
          </ListItemButton>
          <ListItemButton sx={ {pl: 4} } onClick={ () => sendBlocks({
            type: 'SECTION_ONE', parameters: {
              backgroundColor: '#FFFFF',
              height: 'auto',
              title: 'Title',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis sapien quis lectus elementum laoreet sed sit amet velit. Praesent nec enim est. Nulla blandit bibendum ipsum non gravida. Nam placerat purus quis lacinia consequat. Donec magna dolor, dictum ut tortor auctor, pulvinar ultricies turpis. Sed vulputate nunc sit amet iaculis placerat. Morbi non risus vel ex iaculis bibendum. Cras sit amet eleifend nisi, at mattis tortor. Nunc id ornare nunc. Donec porttitor euismod magna eu fermentum.',
              image: 'https://cdn.media.amplience.net/i/cebupacificair/Safety measures for contactless flights?w=undefined&amp;h=undefined&amp;sm=c&amp;scaleFit=poi&amp;poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}',
            },
          }) }>
            <ListItemIcon>
              <SendIcon/>
            </ListItemIcon>
            <ListItemText primary="Section One"/>
          </ListItemButton>
          <ListItemButton sx={ {pl: 4} } onClick={ () => sendBlocks({
            type: 'SECTION_TWO_LEFT', parameters: {
              backgroundColor: '#FFFFF',
              height: 'auto',
              title: 'Title',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis sapien quis lectus elementum laoreet sed sit amet velit. Praesent nec enim est. Nulla blandit bibendum ipsum non gravida. Nam placerat purus quis lacinia consequat. Donec magna dolor, dictum ut tortor auctor, pulvinar ultricies turpis. Sed vulputate nunc sit amet iaculis placerat. Morbi non risus vel ex iaculis bibendum. Cras sit amet eleifend nisi, at mattis tortor. Nunc id ornare nunc. Donec porttitor euismod magna eu fermentum.',
              image: 'https://cdn.media.amplience.net/i/cebupacificair/Our-Story-About?w=800&amp;sm=c&amp;scaleFit=poi&amp;poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}',
              url: '/pages/about/our-story/our-fleet',
            },
          }) }>
            <ListItemIcon>
              <SendIcon/>
            </ListItemIcon>
            <ListItemText primary="Section Two Left"/>
          </ListItemButton>
          <ListItemButton sx={ {pl: 4} } onClick={ () => sendBlocks({
            type: 'SECTION_TWO_RIGHT', parameters: {
              backgroundColor: '#FFFFF',
              height: 'auto',
              title: 'Title',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis sapien quis lectus elementum laoreet sed sit amet velit. Praesent nec enim est. Nulla blandit bibendum ipsum non gravida. Nam placerat purus quis lacinia consequat. Donec magna dolor, dictum ut tortor auctor, pulvinar ultricies turpis. Sed vulputate nunc sit amet iaculis placerat. Morbi non risus vel ex iaculis bibendum. Cras sit amet eleifend nisi, at mattis tortor. Nunc id ornare nunc. Donec porttitor euismod magna eu fermentum.',
              image: 'https://cdn.media.amplience.net/i/cebupacificair/Our-Story-About?w=800&amp;sm=c&amp;scaleFit=poi&amp;poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}',
              url: '/pages/about/our-story/our-fleet',
            },
          }) }>
            <ListItemIcon>
              <SendIcon/>
            </ListItemIcon>
            <ListItemText primary="Section Two Right"/>
          </ListItemButton>
          <ListItemButton sx={ {pl: 4} } onClick={ () => sendBlocks({
            type: 'IMAGE_SECTION', parameters: {
              backgroundColor: '#FFFFF',
              height: 'auto',
              image: 'https://cdn.media.amplience.net/i/cebupacificair/Safety measures for contactless flights?w=undefined&amp;h=undefined&amp;sm=c&amp;scaleFit=poi&amp;poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}',
              alignment: 'center',
            },
          }) }>
            <ListItemIcon>
              <SendIcon/>
            </ListItemIcon>
            <ListItemText primary="Image"/>
          </ListItemButton>
          <ListItemButton sx={ {pl: 4} } onClick={ () => sendBlocks({
            type: 'VIDEO_SECTION', parameters: {
              backgroundColor: '#FFFFF',
              height: 'auto',
              image: 'https://cdn.media.amplience.net/i/cebupacificair/Safety measures for contactless flights?w=undefined&amp;h=undefined&amp;sm=c&amp;scaleFit=poi&amp;poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}',
              alignment: 'center',
            },
          }) }>
            <ListItemIcon>
              <SendIcon/>
            </ListItemIcon>
            <ListItemText primary="Video"/>
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={ handleClick }>
        <ListItemIcon>
          <InboxIcon/>
        </ListItemIcon>
        <ListItemText primary="Banners"/>
        { open ? <ExpandLess/> : <ExpandMore/> }
      </ListItemButton>
      <Collapse in={ open } timeout="auto" unmountOnExit>
        <List component="div" disablePadding>

          <ListItemButton sx={ {pl: 4} } onClick={ () => sendBlocks({
            type: 'GUIDE_BANNER', parameters: {
              backgroundColor: '#FFFFF',
              height: 'auto',
              title: 'Looking for more destinations?',
              text: 'We have more destinations to choose from!',
              button: 'View all destinations',
              buttonLink: 'https://www.cebupacificair.com/',
            },
          }) }>
            <ListItemIcon>
              <SendIcon/>
            </ListItemIcon>
            <ListItemText primary="Guide Banner"/>
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={ () => sendBlocks({
        type: 'BREADCRUMBS', parameters: {
          backgroundColor: '#FFFFFF',
          height: 'auto',
          homepageName: 'Home',
          homepagePath: '/homepage',
          parentcategoryName: 'About',
          parentcategoryPath: '/about',
          currentpostName: 'Our Story',
          currentpostPath: '/pages/about/our-story',
        },
      }) }>
        <ListItemIcon>
          <DraftsIcon/>
        </ListItemIcon>
        <ListItemText primary="Breadcrumbs"/>
      </ListItemButton>
      <ListItemButton onClick={ () => sendBlocks({
        type: 'FOOTER', parameters: {
          backgroundColor: '#fbe700',
          height: 'auto',
        },
      }) }>
        <ListItemIcon>
          <DraftsIcon/>
        </ListItemIcon>
        <ListItemText primary="Footer"/>
      </ListItemButton>
      <ListItemButton onClick={ () => sendBlocks({
        type: 'BLOCKSEPERATOR', parameters: {
          backgroundColor: '#F7F7F7',
          height: '40px',
        },
      }) }>
        <ListItemIcon>
          <DraftsIcon/>
        </ListItemIcon>
        <ListItemText primary="Block Seperator"/>
      </ListItemButton>
      <ListItemButton onClick={ () => sendBlocks({
        type: 'CARDS', parameters: {
          backgroundColor: '#FFFFFF',
          height: 'auto',
          card1Title: 'Corporate Profile',
          card1Image: 'https://cdn.media.amplience.net/i/cebupacificair/Corp-Prof?w=600&amp;sm=c&amp;scaleFit=poi&amp;poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}',
          card2Title: 'Corporate Governance',
          card2Image: 'https://cdn.media.amplience.net/i/cebupacificair/Corp-Gov?w=600&amp;sm=c&amp;scaleFit=poi&amp;poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}',
          card3Title: 'Corporate Disclosures',
          card3Image: 'https://cdn.media.amplience.net/i/cebupacificair/Corp-Disclosure?w=600&amp;sm=c&amp;scaleFit=poi&amp;poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}',
        },
      }) }>
        <ListItemIcon>
          <DraftsIcon/>
        </ListItemIcon>
        <ListItemText primary="Cards"/>
      </ListItemButton>
      <ListItemButton onClick={ () => sendBlocks({
        type: 'ACCORDION', parameters: {
          backgroundColor: '#FFFFFF',
          height: 'auto',
          title: 'About Cebu Pacific',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis sapien quis lectus elementum laoreet sed sit amet velit. Praesent nec enim est. Nulla blandit bibendum ipsum non gravida. Nam placerat purus quis lacinia consequat. Donec magna dolor, dictum ut tortor auctor, pulvinar ultricies turpis. Sed vulputate nunc sit amet iaculis placerat. Morbi non risus vel ex iaculis bibendum. Cras sit amet eleifend nisi, at mattis tortor. Nunc id ornare nunc. Donec porttitor euismod magna eu fermentum.',
        },
      }) }>
        <ListItemIcon>
          <DraftsIcon/>
        </ListItemIcon>
        <ListItemText primary="Accordion"/>
      </ListItemButton>
      <ListItemButton onClick={ () => sendBlocks({
        type: 'SIDEBAR', parameters: {
          backgroundColor: '#F4D03F',
          height: '40px',
        },
      }) }>
        <ListItemIcon>
          <DraftsIcon/>
        </ListItemIcon>
        <ListItemText primary="Sidebar"/>
      </ListItemButton>
      <ListItemButton onClick={ () => sendBlocks({
        type: 'SECTION', parameters: {
          backgroundColor: '#F4D03F',
          height: '40px',
        },
      }) }>
        <ListItemIcon>
          <DraftsIcon/>
        </ListItemIcon>
        <ListItemText primary="Section"/>
      </ListItemButton>
      <ListItemButton onClick={ () => sendBlocks({
        type: 'FORM_BLOCKS', parameters: {
          backgroundColor: '#F4D03F',
          height: '40px',
        },
      }) }>
        <ListItemIcon>
          <DraftsIcon/>
        </ListItemIcon>
        <ListItemText primary="form blocks"/>
      </ListItemButton>
      <ListItemButton onClick={ () => sendBlocks({
        type: 'PINCODE_INPUT', parameters: {
          label_text: '',
          label_color: '',
          label_size: '',
          label_weight: '',
          input_placeholder: 'Enter your Pin Code',
          input_bgcolor: '',
        },
      }) }>
        <ListItemIcon>
          <DraftsIcon/>
        </ListItemIcon>
        <ListItemText primary="PinCode_Input"/>
      </ListItemButton>
      <ListItemButton onClick={ () => sendBlocks({
        type: 'Signup_Form', parameters: {

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
      }) }>
        <ListItemIcon>
          <DraftsIcon/>
        </ListItemIcon>
        <ListItemText primary="Signup_Form"/>
      </ListItemButton>
      <ListItemButton onClick={ () => sendBlocks({
        type: 'FORGOTPINCODE_INPUT', parameters: {
          label_text: 'Pin Code',
          input_placeholder: '',
          label_weight: '',
          label_size: '',
          label_family: '',
        },
      }) }>
        <ListItemIcon>
          <DraftsIcon/>
        </ListItemIcon>
        <ListItemText primary="forgot pin code"/>
      </ListItemButton>
    </List>

  )

  return (
    <Fragment>
      { isInserterVisible && componentList }
    </Fragment>
  )
}

const mapStateToProps = state => {
  return {
    isInserterVisible: state.isInserterVisible,
  }
}

export default connect(mapStateToProps, {
  sendBlocks,
})(Inserter)