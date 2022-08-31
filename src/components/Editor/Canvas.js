import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  getBlocks,
} from '../../stores/actions'

// import all blocks - should be put in another class
import HeaderSimple from '../Blocks/Headers/HeaderSimple'
import FooterSimple from '../Blocks/Footers/FooterSimple'
import SectionOne from '../Blocks/Sections/SectionOne'
import SectionTwoLeft from '../Blocks/Sections/SectionTwoLeft'
import SectionTwoRight from '../Blocks/Sections/SectionTwoRight'
import ImageSection from '../Blocks/Sections/Image'
import VideoSection from '../Blocks/Sections/Video'
import ParagraphSection from '../Blocks/Sections/Paragraph'
import Breadcrumbs from '../Blocks/Breadcrumbs/BreadcrumbsSimple'
import GuideBanner from '../Blocks/Banner/GuideBanner'
import Cards from '../Blocks/Cards/Cards'
import CampaignCards from '../Blocks/Cards/CampaignCards'
import Accordion from '../Blocks/Sections/Accordion'
import BlockSeperator from '../Blocks/BlockSeperator/BlockSeperator'
import Sidebar from '../Blocks/Sidebar/Sidebar'
import MediaGallery from '../Blocks/Sections/MediaGallery'
import SliderWrapperSection from '../Blocks/Sections/SliderWrapper'
import SearchBarSection from '../Blocks/Sections/Search'
import FilterSection from '../Blocks/Sections/Filter'
import SeatSaleSection from '../Blocks/Sections/SeatSale'
import ColumnSection from '../Blocks/Column/Column'
<<<<<<< Updated upstream
=======
import ToggleNavTab from '../Blocks/ToggleNavTab'
import SplashScreen from '../Blocks/SplashScreen'
import ListSection from '../Blocks/Sections/ListSection'
import WideButton from '../Blocks/Sections/WideButton'
>>>>>>> Stashed changes
import Forms from '../Blocks/Forms'
import './Canvas.css'
import PinCodeInput from '../Blocks/Forms/PinCodeInput'
import SignupForm from '../Blocks/Forms/SignupForm'
<<<<<<< Updated upstream

=======
import BottomNavbar from '../Blocks/Navbar/Bottom-Navbar'
import DatePicker from '../Blocks/DatePicker'
import TimePicker from '../Blocks/TimePicker'
import DateTimePicker from '../Blocks/DateTimePicker'
import SingleSelectField from '../Blocks/SingleSelectField'
import MultiSelectField from '../Blocks/MultiSelectField'
import TextInputField from '../Blocks/TextInputField'
import TextAreaField from '../Blocks/TextAreaField'
import ButtonText from '../Blocks/ButtonText'
import ButtonIcon from '../Blocks/ButtonIcon'
import ClickableTextInputField from '../Blocks/ClickableTextInputField'
import AddressButton from '../Blocks/AddressButton'
import ButtonTextInputField from '../Blocks/ButtonTextInputField'
>>>>>>> Stashed changes

class Canvas extends Component {
  async componentDidMount() {
    this.props.getBlocks()
  }

  render() {
    const {blocks, themeStyle, selectedPreviewMenu, isSettingsEnabled, isInserterEnabled} = this.props

    let canvasSize = () => {
      if (isSettingsEnabled && isInserterEnabled) {
        return {width: '57%', margin: '0 18% 0 25%'}
      } else if (isSettingsEnabled && !isInserterEnabled) {
        return {width: '82%', margin: '0 18% 0 0'}
      } else if (!isSettingsEnabled && isInserterEnabled) {
        return {width: '75%', margin: '0 0 0 25%'}
      } else {
        return {width: '100%'}
      }
    }

    return (
      <div className="canvas-container" style={ canvasSize() }>
        <div
          className={ `content-container ${ selectedPreviewMenu === 'tablet' ? 'content-container-tablet' : selectedPreviewMenu === 'mobile' ? 'content-container-mobile' : 'content-container-desktop' }` }>
          { blocks && Object.keys(blocks).map(key => {
            let block = blocks[key]
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
            switch (block.type) {
              case 'HEADER':
                return <HeaderSimple key={ key } _id={ key } themeStyle={ themeStyle['.header_simple'] }
                                     block={ block }/>
              case 'SECTION_SSO':
                return <div key={ key }>SECTION SSO</div>
              case 'SECTION_CARDS':
                return <div key={ key }>SECTION CARDS</div>
              case 'SECTION_ONE':
                return <SectionOne key={ key } _id={ key } themeStyle={ themeStyle['.image_with_text_section'] }
                                   block={ block }/>
              case 'SECTION_TWO_LEFT':
                return <SectionTwoLeft key={ key } _id={ key }
                                       themeStyle={ themeStyle['.left_image_with_text_and_button_section'] }
                                       block={ block }/>
              case 'SECTION_TWO_RIGHT':
                return <SectionTwoRight key={ key } _id={ key }
                                        themeStyle={ themeStyle['.right_image_with_text_and_button_section'] }
                                        block={ block }/>
              case 'IMAGE_SECTION':
                return <ImageSection key={ key } _id={ key } themeStyle={ themeStyle['.image_only_section'] }
                                     block={ block }/>
              case 'VIDEO_SECTION':
                return <VideoSection key={ key } _id={ key } themeStyle={ themeStyle['.video_only_section'] }
                                     block={ block }/>
              case 'PARAGRAPH_SECTION':
                return <ParagraphSection key={ key } _id={ key } themeStyle={ themeStyle.p } block={ block }/>
              case 'BREADCRUMBS':
                return <Breadcrumbs key={ key } _id={ key } themeStyle={ themeStyle['.breadcrumbs'] } block={ block }/>
              case 'GUIDE_BANNER':
                return <GuideBanner key={ key } _id={ key } themeStyle={ themeStyle['.guide_banner'] } block={ block }/>
              case 'CARDS':
                return <Cards key={ key } _id={ key } themeStyle={ themeStyle['.cards'] } block={ block }/>
              case 'CAMPAIGN_CARDS':
                return <CampaignCards key={ key } _id={ key } themeStyle={ themeStyle['.campaign_cards'] }
                                      block={ block }/>
              case 'ACCORDION':
                return <Accordion key={ key } _id={ key } themeStyle={ themeStyle['.accordion_section'] }
                                  block={ block }/>
              case 'BLOCKSEPERATOR':
                return <BlockSeperator key={ key } _id={ key } themeStyle={ themeStyle['.block_separator'] }
                                       block={ block }/>
              case 'SIDEBAR':
                return <Sidebar key={ key } _id={ key } themeStyle={ themeStyle['.sidebar'] } block={ block }/>
              case 'MEDIA_GALLERY':
                return <MediaGallery key={ key } _id={ key } themeStyle={ themeStyle['.media_gallery_section'] }
                                     block={ block }/>
              case 'SLIDERWRAPPER_SECTION':
                return <SliderWrapperSection key={ key } _id={ key }
                                             themeStyle={ themeStyle['.slider_wrapper_section'] } block={ block }/>
              case 'SEARCHBAR_SECTION':
                return <SearchBarSection key={ key } _id={ key } themeStyle={ themeStyle['.search_bar_section'] }
                                         block={ block }/>
              case 'FILTER_SECTION':
                return <FilterSection key={ key } _id={ key } themeStyle={ themeStyle['.filter_section'] }
                                      block={ block }/>
              case 'SEATSALE_SECTION':
                return <SeatSaleSection key={ key } _id={ key } themeStyle={ themeStyle['.Seatsale_section'] }
                                        block={ block }/>
              case 'COLUMN_SECTION':
                return <ColumnSection key={ key } _id={ key } block={ block }/>
              case 'FOOTER':
                return <FooterSimple key={ key } _id={ key } themeStyle={ themeStyle['.footer_simple'] }
                                     block={ block }/>
<<<<<<< Updated upstream
              case 'FORM_BLOCKS':
                return <Forms key={ key } _id={ key } themeStyle={ themeStyle['.form_blocks'] } block={ block }/>
              case 'PinCode_Input':
                return <PinCodeInput key={ key } _id={ key } themeStyle={ themeStyle['.PinCode_Input'] }
                                     block={ block }/>
              case 'Signup_Form':
                return <SignupForm key={ key } _id={ key } themeStyle={ themeStyle['.Signup_Form'] }
                                   block={ block }/>
=======
              case 'TOGGLE_NAV_TAB':
                return <ToggleNavTab key={ key } _id={ key } themeStyle={ themeStyle['.toggle-nav-tab-component'] }
                                     block={ block }/>
              case 'SPLASH_SCREEN':
                return <SplashScreen key={ key } _id={ key } themeStyle={ themeStyle['.splash-screen-component'] }
                                     block={ block }/>
              case 'LIST_SECTION':
                return <ListSection key={ key } _id={ key } themeStyle={ themeStyle['.list_section'] } block={ block }/>
              case 'WIDE_BUTTON':
                return <WideButton key={ key } _id={ key } themeStyle={ themeStyle['.wide_button'] } block={ block }/>
              case 'FORM_BLOCKS':
                return <Forms key={ key } _id={ key } themeStyle={ themeStyle['.form_blocks'] } block={ block }/>
              case 'PINCODE_INPUT':
                return <PinCodeInput key={ key } _id={ key } themeStyle={ themeStyle['.pincode_input'] }
                                     block={ block }/>
              case 'Signup_Form':
                return <SignupForm key={ key } _id={ key } themeStyle={ themeStyle['.Signup_Form'] } block={ block }/>
              case 'BOTTOM_NAVBAR':
                return <BottomNavbar key={ key } _id={ key } themeStyle={ themeStyle['.bottom_navbar'] }
                                     block={ block }/>
              case 'DATE_PICKER':
                return <DatePicker key={ key } _id={ key } themeStyle={ themeStyle['.date-picker-component'] }
                                   block={ block }/>
              case 'TIME_PICKER':
                return <TimePicker key={ key } _id={ key } themeStyle={ themeStyle['.time-picker-component'] }
                                   block={ block }/>
              case 'DATETIME_PICKER':
                return <DateTimePicker key={ key } _id={ key } themeStyle={ themeStyle['.datetime-picker-component'] }
                                       block={ block }/>
              case 'SINGLE_SELECT':
                return <SingleSelectField key={ key } _id={ key } themeStyle={ themeStyle['.single-select-component'] }
                                          block={ block }/>
              case 'MULTI_SELECT':
                return <MultiSelectField key={ key } _id={ key } themeStyle={ themeStyle['.multi-select-component'] }
                                         block={ block }/>
              case 'TEXT_INPUT_FIELD':
                return <TextInputField key={ key } _id={ key } themeStyle={ themeStyle['.text-input-field-component'] }
                                       block={ block }/>
              case 'TEXT_AREA_FIELD':
                return <TextAreaField key={ key } _id={ key } themeStyle={ themeStyle['.text-area-field-component'] }
                                      block={ block }/>
              case 'BUTTON_TEXT':
                return <ButtonText key={ key } _id={ key } themeStyle={ themeStyle['.button-with-text-component'] }
                                   block={ block }/>
              case 'BUTTON_ICON':
                return <ButtonIcon key={ key } _id={ key } themeStyle={ themeStyle['.button-with-icon-component'] }
                                   block={ block }/>
              case 'CLICKABLE_TEXT_INPUT_FIELD':
                return <ClickableTextInputField key={ key } _id={ key }
                                                themeStyle={ themeStyle['.clickable-text-input-field-component'] }
                                                block={ block }/>
              case 'ADDRESS_BUTTON':
                return <AddressButton key={ key } _id={ key } themeStyle={ themeStyle['.address-button-component'] }
                                      block={ block }/>
              case 'BUTTON_TEXT_INPUT_FIELD':
                return <ButtonTextInputField key={ key } _id={ key }
                                             themeStyle={ themeStyle['.button-text-input-field-component'] }
                                             block={ block }/>
>>>>>>> Stashed changes
              default:
                return <div key={ key }>DEFAULT</div>
            }
          }) }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    blocks: state.blocks,
  }
}

export default connect(mapStateToProps, {getBlocks})(Canvas)
