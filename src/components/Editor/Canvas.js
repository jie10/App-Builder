import React, { useEffect } from "react"
import { connect } from "react-redux"

import HeaderSimple from "../Blocks/Default/Headers/HeaderSimple"
import FooterSimple from "../Blocks/Default/Footers/FooterSimple"
import SectionOne from "../Blocks/Design/SectionOne"
import SectionTwoLeft from "../Blocks/Design/SectionTwoLeft"
import SectionTwoRight from "../Blocks/Design/SectionTwoRight"
import ImageSection from "../Blocks/Design/Image"
import VideoSection from "../Blocks/Design/Video"
import ParagraphSection from "../Blocks/Typography/Paragraph"
import Breadcrumbs from "../Blocks/Navigation/Breadcrumbs/BreadcrumbsSimple"
import GuideBanner from "../Blocks/Design/Banner/GuideBanner"
import Cards from "../Blocks/Design/Cards/Cards"
import CampaignCards from "../Blocks/Design/Cards/CampaignCards"
import Accordion from "../Blocks/Design/Accordion"
import BlockSeperator from "../Blocks/Default/BlockSeperator/BlockSeperator"
import Sidebar from "../Blocks/Navigation/Navbar/Sidebar"
import MediaGallery from "../Blocks/Design/MediaGallery"
import SliderWrapperSection from "../Blocks/Omnix/SliderWrapper"
import SearchBarSection from "../Blocks/Design/Search"
import FilterSection from "../Blocks/Omnix/Filter"
import SeatSaleSection from "../Blocks/Omnix/SeatSale"
import ColumnSection from "../Blocks/Default/Column/Column"
import ToggleNavTab from "../Blocks/Juander/ToggleNavTab"
import SplashScreen from "../Blocks/Design/SplashScreen"
import ListSection from "../Blocks/Juander/ListSection"
import WideButton from "../Blocks/Juander/WideButton"
import Forms from "../Blocks/FormBlocks"
import PinCodeInput from "../Blocks/FormBlocks/PinCodeInput"
import SignupForm from "../Blocks/FormBlocks/SignupForm"
import BottomNavbar from "../Blocks/Navigation/Navbar/Bottom-Navbar"
import DatePicker from "../Blocks/Form/DatePicker"
import TimePicker from "../Blocks/Form/TimePicker"
import DateTimePicker from "../Blocks/Form/DateTimePicker"
import SingleSelectField from "../Blocks/Form/SingleSelectField"
import MultiSelectField from "../Blocks/Form/MultiSelectField"
import TextInputField from "../Blocks/Form/TextInputField"
import TextAreaField from "../Blocks/Form/TextAreaField"
import ButtonText from "../Blocks/Form/ButtonText"
import ButtonIcon from "../Blocks/Form/ButtonIcon"
import ClickableTextInputField from "../Blocks/Form/ClickableTextInputField"
import AddressButton from "../Blocks/Juander/AddressButton"
import ButtonTextInputField from "../Blocks/Form/ButtonTextInputField"
import ForgotPinCode from "../Blocks/ModalBlocks/ForgotPinCode"
import ParagraphBlock from "../Blocks/Typography/ParagraphBlock"
import TopNavbar from "../Blocks/Navigation/Navbar/TopNavbar"
import HeaderNav from "../Blocks/Navigation/HeaderNav"
import FindPoolTabPanel from "../Blocks/Juander/FindPoolTabPanel"
import ShareRideTabPanel from "../Blocks/Juander/ShareRideTabPanel"
import FeedbackForm from "../Blocks/FormBlocks/FeedbackForm"
import HeaderCustom from "../Blocks/Default/Headers/HeaderCustom"
import CreateTripForm from "../Blocks/Juander/CreateTripForm"
import UpdateAccountForm from "../Blocks/Juander/UpdateAccountForm"

import "./Canvas.css"
import { getBlocks } from "../../stores/actions"
import ProfileStats from "../Blocks/Juander/Profile/ProfileStats"
import MenuHeader from "../Blocks/Juander/Profile/ProfileHeader"
import ProfileHeader from "../Blocks/Juander/Profile/ProfileHeader"
import ProfileMenu from "../Blocks/Juander/Profile/ProfileMenu"
import FAQ from "../Blocks/Juander/Profile/ProfileMenu/FAQ"
import Carousel from "../Blocks/Design/Carousel"
import FooterLinks from "../Blocks/Default/Footers/FooterLinks"
import MyBookingList from "../Blocks/Juander/MyBookingList"
import MyTripsList from "../Blocks/Juander/MyTripsList"

const Canvas = (props) => {
  const {
    blocks,
    themeStyle,
    selectedPreviewMenu,
    isSettingsEnabled,
    isInserterEnabled,
    getBlocks,
  } = props

  let canvasSize = () => {
    if (isSettingsEnabled && isInserterEnabled) {
      return {width: "57%", margin: "0 18% 0 25%"}
    } else if (isSettingsEnabled && !isInserterEnabled) {
      return {width: "82%", margin: "0 18% 0 0"}
    } else if (!isSettingsEnabled && isInserterEnabled) {
      return {width: "75%", margin: "0 0 0 25%"}
    } else {
      return {width: "100%"}
    }
  }

  useEffect(() => {
    getBlocks()
  }, [getBlocks])

  return (
    <div className="canvas-container" style={canvasSize()}>
      <div
        className={`content-container ${
          selectedPreviewMenu === "tablet"
            ? "content-container-tablet"
            : selectedPreviewMenu === "mobile"
              ? "content-container-mobile"
              : "content-container-desktop"
        }`}
      >
        {blocks &&
          Object.keys(blocks).map((key) => {
            let block = blocks[key]
            switch (block.type) {
              case "HEADER":
                return (
                  <HeaderSimple
                    key={key}
                    _id={key}
                    themeStyle={themeStyle[".header_simple"]}
                    block={block}
                  />
                )
              case "SECTION_SSO":
                return <div key={key}>SECTION SSO</div>
              case "SECTION_CARDS":
                return <div key={key}>SECTION CARDS</div>
              case "SECTION_ONE":
                return (
                  <SectionOne
                    key={key}
                    _id={key}
                    themeStyle={themeStyle[".image_with_text_section"]}
                    block={block}
                  />
                )
              case "SECTION_TWO_LEFT":
                return (
                  <SectionTwoLeft
                    key={key}
                    _id={key}
                    themeStyle={
                      themeStyle[".left_image_with_text_and_button_section"]
                    }
                    block={block}
                  />
                )
              case "SECTION_TWO_RIGHT":
                return (
                  <SectionTwoRight
                    key={key}
                    _id={key}
                    themeStyle={
                      themeStyle[".right_image_with_text_and_button_section"]
                    }
                    block={block}
                  />
                )
              case "IMAGE_SECTION":
                return (
                  <ImageSection
                    key={key}
                    _id={key}
                    themeStyle={themeStyle[".image_only_section"]}
                    block={block}
                  />
                )
              case "VIDEO_SECTION":
                return (
                  <VideoSection
                    key={key}
                    _id={key}
                    themeStyle={themeStyle[".video_only_section"]}
                    block={block}
                  />
                )
              case "PARAGRAPH_SECTION":
                return (
                  <ParagraphSection
                    key={key}
                    _id={key}
                    themeStyle={themeStyle.p}
                    block={block}
                  />
                )
              case "BREADCRUMBS":
                return (
                  <Breadcrumbs
                    key={key}
                    _id={key}
                    themeStyle={themeStyle[".breadcrumbs"]}
                    block={block}
                  />
                )
              case "GUIDE_BANNER":
                return (
                  <GuideBanner
                    key={key}
                    _id={key}
                    themeStyle={themeStyle[".guide_banner"]}
                    block={block}
                  />
                )
              case "CARDS":
                return (
                  <Cards
                    key={key}
                    _id={key}
                    themeStyle={themeStyle[".cards"]}
                    block={block}
                  />
                )
              case "CAMPAIGN_CARDS":
                return (
                  <CampaignCards
                    key={key}
                    _id={key}
                    themeStyle={themeStyle[".campaign_cards"]}
                    block={block}
                  />
                )
              case "ACCORDION":
                return (
                  <Accordion
                    key={key}
                    _id={key}
                    themeStyle={themeStyle[".accordion_section"]}
                    block={block}
                  />
                )
              case "BLOCKSEPERATOR":
                return (
                  <BlockSeperator
                    key={key}
                    _id={key}
                    themeStyle={themeStyle[".block_separator"]}
                    block={block}
                  />
                )
              case "SIDEBAR":
                return (
                  <Sidebar
                    key={key}
                    _id={key}
                    themeStyle={themeStyle[".sidebar"]}
                    block={block}
                  />
                )
              case "MEDIA_GALLERY":
                return (
                  <MediaGallery
                    key={key}
                    _id={key}
                    themeStyle={themeStyle[".media_gallery_section"]}
                    block={block}
                  />
                )
              case "SLIDERWRAPPER_SECTION":
                return (
                  <SliderWrapperSection
                    key={key}
                    _id={key}
                    themeStyle={themeStyle[".slider_wrapper_section"]}
                    block={block}
                  />
                )
              case "SEARCHBAR_SECTION":
                return (
                  <SearchBarSection
                    key={key}
                    _id={key}
                    themeStyle={themeStyle[".search_bar_section"]}
                    block={block}
                  />
                )
              case "FILTER_SECTION":
                return (
                  <FilterSection
                    key={key}
                    _id={key}
                    themeStyle={themeStyle[".filter_section"]}
                    block={block}
                  />
                )
              case "SEATSALE_SECTION":
                return (
                  <SeatSaleSection
                    key={key}
                    _id={key}
                    themeStyle={themeStyle[".Seatsale_section"]}
                    block={block}
                  />
                )
              case "COLUMN_SECTION":
                return <ColumnSection key={key} _id={key} block={block}/>
              case "FOOTER":
                return (
                  <FooterSimple
                    key={key}
                    _id={key}
                    themeStyle={themeStyle[".footer_simple"]}
                    block={block}
                  />
                )
              case "TOGGLE_NAV_TAB":
                return (
                  <ToggleNavTab
                    key={key}
                    _id={key}
                    themeStyle={themeStyle[".toggle-nav-tab-component"]}
                    block={block}
                  />
                )
              case "SPLASH_SCREEN":
                return (
                  <SplashScreen
                    key={key}
                    _id={key}
                    themeStyle={themeStyle[".splash-screen-component"]}
                    block={block}
                  />
                )
              case "LIST_SECTION":
                return (
                  <ListSection
                    key={key}
                    _id={key}
                    themeStyle={themeStyle[".list_section"]}
                    block={block}
                  />
                )
              case "WIDE_BUTTON":
                return (
                  <WideButton
                    key={key}
                    _id={key}
                    themeStyle={themeStyle[".wide_button"]}
                    block={block}
                  />
                )
              case "FORM_BLOCKS":
                return (
                  <Forms
                    key={key}
                    _id={key}
                    themeStyle={themeStyle[".form_blocks"]}
                    block={block}
                  />
                )
              case "PINCODE_INPUT":
                return (
                  <PinCodeInput
                    key={key}
                    _id={key}
                    themeStyle={themeStyle[".pincode_input"]}
                    block={block}
                  />
                )
              case "SIGNUP_FORM":
                return (
                  <SignupForm
                    key={key}
                    _id={key}
                    themeStyle={themeStyle[".signup_form"]}
                    block={block}
                  />
                )
              case "BOTTOM_NAVBAR":
                return (
                  <BottomNavbar
                    key={key}
                    _id={key}
                    themeStyle={themeStyle[".bottom-navbar-component"]}
                    block={block}
                  />
                )
              case "DATE_PICKER":
                return (
                  <DatePicker
                    key={key}
                    _id={key}
                    themeStyle={themeStyle[".date-picker-component"]}
                    block={block}
                  />
                )
              case "TIME_PICKER":
                return (
                  <TimePicker
                    key={key}
                    _id={key}
                    themeStyle={themeStyle[".time-picker-component"]}
                    block={block}
                  />
                )
              case "DATETIME_PICKER":
                return (
                  <DateTimePicker
                    key={key}
                    _id={key}
                    themeStyle={themeStyle[".datetime-picker-component"]}
                    block={block}
                  />
                )
              case "SINGLE_SELECT":
                return (
                  <SingleSelectField
                    key={key}
                    _id={key}
                    themeStyle={themeStyle[".single-select-component"]}
                    block={block}
                  />
                )
              case "MULTI_SELECT":
                return (
                  <MultiSelectField
                    key={key}
                    _id={key}
                    themeStyle={themeStyle[".multi-select-component"]}
                    block={block}
                  />
                )
              case "TEXT_INPUT_FIELD":
                return (
                  <TextInputField
                    key={key}
                    _id={key}
                    themeStyle={themeStyle[".text-input-field-component"]}
                    block={block}
                  />
                )
              case "TEXT_AREA_FIELD":
                return (
                  <TextAreaField
                    key={key}
                    _id={key}
                    themeStyle={themeStyle[".text-area-field-component"]}
                    block={block}
                  />
                )
              case "BUTTON_TEXT":
                return (
                  <ButtonText
                    key={key}
                    _id={key}
                    themeStyle={themeStyle[".button-with-text-component"]}
                    block={block}
                  />
                )
              case "BUTTON_ICON":
                return (
                  <ButtonIcon
                    key={key}
                    _id={key}
                    themeStyle={themeStyle[".button-with-icon-component"]}
                    block={block}
                  />
                )
              case "CLICKABLE_TEXT_INPUT_FIELD":
                return (
                  <ClickableTextInputField
                    key={key}
                    _id={key}
                    themeStyle={
                      themeStyle[".clickable-text-input-field-component"]
                    }
                    block={block}
                  />
                )
              case "ADDRESS_BUTTON":
                return (
                  <AddressButton
                    key={key}
                    _id={key}
                    themeStyle={themeStyle[".address-button-component"]}
                    block={block}
                  />
                )
              case "BUTTON_TEXT_INPUT_FIELD":
                return (
                  <ButtonTextInputField
                    key={key}
                    _id={key}
                    themeStyle={
                      themeStyle[".button-text-input-field-component"]
                    }
                    block={block}
                  />
                )
              case "FORGOTPINCODE_INPUT":
                return (
                  <ForgotPinCode
                    key={key}
                    _id={key}
                    themeStyle={themeStyle[".forgotpincode_input"]}
                    block={block}
                  />
                )
              case "PROFILESTATS":
                return (
                  <ProfileStats
                    key={key}
                    _id={key}
                    themeStyle={themeStyle[".profilestats"]}
                    block={block}
                  />
                )
              case "TOP_NAVBAR":
                return (
                  <TopNavbar
                    key={key}
                    _id={key}
                    themeStyle={themeStyle[".top-navbar-component"]}
                    block={block}
                  />
                )
              case "PARAGRAPH_BLOCK":
                return (
                  <ParagraphBlock
                    key={key}
                    _id={key}
                    themeStyle={themeStyle[".paragraph-component"]}
                    block={block}
                  />
                )
              case "HEADER_NAV":
                return (
                  <HeaderNav
                    key={key}
                    _id={key}
                    themeStyle={themeStyle[".header-nav-component"]}
                    block={block}
                  />
                )
              case "PROFILE_HEADER":
                return (
                  <ProfileHeader
                    key={key}
                    _id={key}
                    themeStyle={themeStyle[".profile-header-component"]}
                    block={block}
                  />
                )
              case "PROFILE_MENU":
                return (
                  <ProfileMenu
                    key={key}
                    _id={key}
                    themeStyle={themeStyle[".profile-menu-component"]}
                    block={block}
                  />
                )
              case "FIND_POOL_TAB_PANEL":
                return (
                  <FindPoolTabPanel
                    key={key}
                    _id={key}
                    themeStyle={themeStyle[".find-pool-tab-panel-component"]}
                    block={block}
                  />
                )
              case "SHARE_RIDE_TAB_PANEL":
                return (
                  <ShareRideTabPanel
                    key={key}
                    _id={key}
                    themeStyle={themeStyle[".share-ride-tab-panel-component"]}
                    block={block}
                  />
                )
              case "FEEDBACK_FORM":
                return (
                  <FeedbackForm
                    key={key}
                    _id={key}
                    themeStyle={themeStyle[".feedback-form"]}
                    block={block}
                  />
                )
              case "HEADER_CUSTOM":
                return (
                  <HeaderCustom
                    key={key}
                    _id={key}
                    themeStyle={themeStyle[".header-custom-component"]}
                    block={block}
                  />
                )
              case "CAROUSEL":
                return (
                  <Carousel
                    key={key}
                    _id={key}
                    themeStyle={themeStyle[".carousel"]}
                    block={block}
                  />
                )
              case "FOOTER_LINKS":
                return (
                  <FooterLinks
                    key={key}
                    _id={key}
                    themeStyle={themeStyle[".footer-link"]}
                    block={block}
                  />
                )
              case "MY_BOOKING_LIST":
                return (
                  <MyBookingList
                    key={key}
                    _id={key}
                    themeStyle={themeStyle[".my-booking-list"]}
                    block={block}
                  />
                )
              case "MY_TRIPS_LIST":
                return (
                  <MyTripsList
                    key={key}
                    _id={key}
                    themeStyle={themeStyle[".my-trips-list"]}
                    block={block}
                  />
                )
              case "CREATE_TRIP_FORM":
                return (
                  <CreateTripForm
                    key={key}
                    _id={key}
                    themeStyle={themeStyle[".create-trip-form"]}
                    block={block}
                  />
                )
              case "UPDATE_ACCOUNT_FORM":
                return (
                  <UpdateAccountForm
                    key={key}
                    _id={key}
                    themeStyle={themeStyle[".update-account-form"]}
                    block={block}
                  />
                )
              case "PROFILE_FAQ":
                return (
                  <FAQ
                    key={key}
                    _id={key}
                    themeStyle={themeStyle[".profile-faq-component"]}
                    block={block}
                  />
                )
              case "PROFILE_HEADER":
                return (
                  <MenuHeader
                    key={key}
                    _id={key}
                    themeStyle={themeStyle[".profile-header"]}
                    block={block}
                  />
                )
              default:
                return <div key={key}>DEFAULT</div>
            }
          })}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    blocks: state.blocks,
  }
}

export default connect(mapStateToProps, {
  getBlocks,
})(Canvas)
