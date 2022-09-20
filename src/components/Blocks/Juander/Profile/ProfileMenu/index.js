import React from "react"
import { connect } from "react-redux"
import { Grid } from "@mui/material"
import "./style.css"
import BookOnline from "./svg/book_online_FILL0_wght400_GRAD0_opsz20.svg"
import Direction from "./svg/directions_car_FILL0_wght400_GRAD0_opsz20.svg"
import Comment from "./svg/comment_FILL0_wght400_GRAD0_opsz20.svg"
import LiveHelp from "./svg/live_help_FILL0_wght400_GRAD0_opsz20.svg"
import Settings from "./svg/settings_FILL0_wght400_GRAD0_opsz20.svg"
import Logout from "./svg/logout_FILL0_wght400_GRAD0_opsz20.svg"

import {
  deleteBlock,
  moveUpBlock,
  moveDownBlock,
  getBlock
} from "../../../../stores/actions"

const ProfileMenu = (props) => {
  const {_id, block, deleteBlock, moveUpBlock, moveDownBlock, getBlock, themeStyle} = props
  const title1 = block.parameters.title1
  const title2 = block.parameters.title2
  const title3 = block.parameters.title3
  const title4 = block.parameters.title4
  const title5 = block.parameters.title5
  const title6 = block.parameters.title6

  const description1 = block.parameters.description1
  const description2 = block.parameters.description2
  const description3 = block.parameters.description3
  const description4 = block.parameters.description4
  const description5 = block.parameters.description5
  const description6 = block.parameters.description6

  if (block.status === "added") {
    block.parameters = themeStyle
  }

  return (
    <div style={{
      width: "100%",
      height: block.parameters.height,

    }} onClick={() => getBlock(_id, block)}>
      <Grid container direction="row" justifyContent="flex-end" alignItems="center">
        <Grid item onClick={() => moveUpBlock(_id)}>
          <img
            className="buttoncontrols"
            alt="upbutton"
            src="/images/round_expand_less_black_24dp.png"/>
        </Grid>
        <Grid item onClick={() => moveDownBlock(_id)}>
          <img
            className="buttoncontrols"
            alt="downbutton"
            src="/images/round_expand_more_black_24dp.png"/>
        </Grid>
        <Grid item onClick={() => deleteBlock(_id)}>
          <img
            className="buttoncontrols"
            alt="deletebutton"
            src="/images/round_close_black_24dp.png"/>
        </Grid>
      </Grid>

      <div className="account-menu-list-container">
        <div className="container menu-list d-flex flex-column" style={{backgroundColor: block.parameters.backgroundColor}}>
          <button type="button" className="menu-list-item d-flex" id="my_trips_button">
            <div className="setting-icon">
              <span className="material-icons-round icon"><svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" style={{fill: block.parameters.iconColor}}><path
                d="M13.333 11.146V12.5q0 .354-.239.594-.24.239-.594.239h-5q-.354 0-.594-.239-.239-.24-.239-.594v-1.354q0-.104.083-.208.083-.105.229-.167.229-.104.375-.302T7.5 10q0-.271-.146-.469-.146-.198-.375-.302-.146-.062-.229-.167-.083-.104-.083-.208V7.5q0-.354.239-.594.24-.239.594-.239h5q.354 0 .594.239.239.24.239.594v1.354q0 .104-.083.208-.083.105-.229.167-.229.104-.375.302T12.5 10q0 .271.146.469.146.198.375.302.146.062.229.167.083.104.083.208ZM10 8.75q.167 0 .292-.125.125-.125.125-.292 0-.166-.125-.291-.125-.125-.292-.125-.167 0-.292.125-.125.125-.125.291 0 .167.125.292.125.125.292.125Zm0 1.667q.167 0 .292-.125.125-.125.125-.292 0-.167-.125-.292-.125-.125-.292-.125-.167 0-.292.125-.125.125-.125.292 0 .167.125.292.125.125.292.125Zm0 1.666q.167 0 .292-.125.125-.125.125-.291 0-.167-.125-.292-.125-.125-.292-.125-.167 0-.292.125-.125.125-.125.292 0 .166.125.291.125.125.292.125Zm-4.083 7.084q-.729 0-1.24-.511-.51-.51-.51-1.239V2.583q0-.729.51-1.239.511-.511 1.24-.511h8.166q.729 0 1.24.511.51.51.51 1.239v14.834q0 .729-.51 1.239-.511.511-1.24.511Zm0-4.375h8.166V5.208H5.917Zm0 1.75v.875h8.166v-.875Zm0-13.084h8.166v-.875H5.917Zm0-.875v.875-.875Zm0 14.834v-.875.875Z"/></svg></span>
            </div>
            <div className="setting-desc">
              <span className="title" style={{fontSize: block.parameters.headerSize, color: block.parameters.headerColor}}>{title1}</span>
              <span className="description" style={{fontSize: block.parameters.descriptionSize, color: block.parameters.descriptionColor}}>{description1}</span>
            </div>
          </button>
          <button type="button" className="menu-list-item d-flex" id="my_bookings_button">
            <div className="setting-icon">
              <span className="material-icons-round icon"><svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" style={{fill: block.parameters.iconColor}}><path
                d="M5.146 15.854v.334q0 .541-.375.927-.375.385-.938.385-.541 0-.937-.396t-.396-.937v-6.021l1.729-5.104q.146-.396.479-.636.334-.239.75-.239h9.084q.416 0 .75.239.333.24.479.636l1.729 5.104v6.042q0 .541-.375.927-.375.385-.937.385-.542 0-.938-.396-.396-.396-.396-.937v-.313Zm-.188-7.458h10.084l-.813-2.479H5.771Zm-.708 1.75v3.958Zm1.979 3.25q.521 0 .886-.365.364-.364.364-.885t-.364-.886q-.365-.364-.886-.364t-.885.364q-.365.365-.365.886t.365.885q.364.365.885.365Zm7.542 0q.521 0 .885-.365.365-.364.365-.885t-.365-.886q-.364-.364-.885-.364t-.886.364q-.364.365-.364.886t.364.885q.365.365.886.365Zm-9.521.708h11.5v-3.958H4.25Z"/></svg></span>
            </div>
            <div className="setting-desc">
              <span className="title" style={{fontSize: block.parameters.headerSize, color: block.parameters.headerColor}}>{title2}</span>
              <span className="description" style={{fontSize: block.parameters.descriptionSize, color: block.parameters.descriptionColor}}>{description2}</span>
            </div>
          </button>
          <button type="button" className="menu-list-item d-flex" id="send_feedback_button"
                  onClick="window.open('https://forms.office.com/pages/responsepage.aspx?id=nZSz-rA8l0CALwU61wdSGdNVRVBJKDRHgzXfACBPx4lUOFJDMEFLRFFIV1k5NEJSVkJSRzdNWjkzSC4u');">
            <div className="setting-icon">
              <span className="material-icons-round icon"><svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" style={{fill: block.parameters.iconColor}}><path
                d="M5.875 11.646h8.25q.354 0 .615-.261.26-.26.26-.614t-.26-.615q-.261-.26-.615-.26h-8.25q-.354 0-.615.26-.26.261-.26.615t.26.614q.261.261.615.261Zm0-2.458h8.25q.354 0 .615-.261.26-.26.26-.615 0-.354-.26-.614-.261-.26-.615-.26h-8.25q-.354 0-.615.26-.26.26-.26.614 0 .355.26.615.261.261.615.261Zm0-2.459h8.25q.354 0 .615-.26.26-.261.26-.615t-.26-.614q-.261-.261-.615-.261h-8.25q-.354 0-.615.261Q5 5.5 5 5.854t.26.615q.261.26.615.26Zm10.958 10.104L15 15H3.417q-.729 0-1.24-.51-.51-.511-.51-1.24V3.417q0-.729.51-1.24.511-.51 1.24-.51h13.166q.729 0 1.24.51.51.511.51 1.24v12.812q0 .583-.541.802-.542.219-.959-.198ZM3.417 3.417v9.833h12.312l.854.854V3.417H3.417Zm0 0v10.687V3.417Z"/></svg></span>
            </div>
            <div className="setting-desc">
              <span className="title" style={{fontSize: block.parameters.headerSize, color: block.parameters.headerColor}}>{title3}</span>
              <span className="description" style={{fontSize: block.parameters.descriptionSize, color: block.parameters.descriptionColor}}>{description3}</span>
            </div>
          </button>
          <button type="button" className="menu-list-item d-flex" id="read_faq_button">
            <div className="setting-icon">
              <span className="material-icons-round icon"><svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" style={{fill: block.parameters.iconColor}}><path
                d="M9.958 14.146q.459 0 .771-.313.313-.312.313-.771 0-.458-.313-.77-.312-.313-.771-.313-.458 0-.77.313-.313.312-.313.77 0 .459.313.771.312.313.77.313Zm.771-3.896q.125-.479.365-.729.239-.25.594-.604.708-.709.989-1.198.281-.49.281-1.073 0-1.125-.76-1.813-.76-.687-1.969-.687-.854 0-1.573.323-.718.323-1.031.802-.229.354-.208.729.021.375.333.562.292.167.625.053.333-.115.563-.407.229-.27.541-.416.313-.146.688-.146.541 0 .864.271.323.271.323.729 0 .354-.239.729-.24.375-.761.854-.604.542-.875 1-.271.459-.271.875 0 .334.209.573.208.24.521.24.291 0 .5-.188.208-.187.291-.479Zm-1.354 8.292-1.896-1.896H4.25q-.729 0-1.24-.511-.51-.51-.51-1.239V3.417q0-.729.51-1.24.511-.51 1.24-.51h11.5q.729 0 1.24.51.51.511.51 1.24v11.479q0 .729-.51 1.239-.511.511-1.24.511H12.5l-1.875 1.896q-.271.27-.625.27t-.625-.27ZM4.25 14.896h3.917L10 16.729l1.812-1.833h3.938V3.417H4.25v11.479Zm0-11.479v11.479V3.417Z"/></svg></span>
            </div>
            <div className="setting-desc">
              <span className="title" style={{fontSize: block.parameters.headerSize, color: block.parameters.headerColor}}>{title4}</span>
              <span className="description" style={{fontSize: block.parameters.descriptionSize, color: block.parameters.descriptionColor}}>{description4}</span>
            </div>
          </button>
          <button type="button" className="menu-list-item d-flex" id="settings_button">
            <div className="setting-icon">
              <span className="material-icons-round icon"><svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" style={{fill: block.parameters.iconColor}}><path
                d="M11.583 18.333H8.417q-.334 0-.573-.218-.24-.219-.282-.553l-.229-1.854q-.208-.125-.458-.27-.25-.146-.458-.271l-1.729.729q-.313.125-.626.021-.312-.105-.479-.396l-1.562-2.729q-.167-.292-.094-.604.073-.313.323-.521l1.458-1.125V9.458L2.25 8.333q-.25-.208-.323-.521-.073-.312.094-.604l1.562-2.729q.167-.291.479-.396.313-.104.626.021l1.729.729q.208-.125.458-.27.25-.146.458-.271l.229-1.854q.042-.334.282-.553.239-.218.573-.218h3.166q.334 0 .573.218.24.219.282.553l.229 1.854q.208.125.458.271.25.145.458.27l1.729-.729q.313-.125.626-.021.312.105.479.396L18 7.208q.167.292.104.604-.062.313-.333.521l-1.459 1.125v1.084l1.459 1.125q.271.208.333.521.063.312-.104.604l-1.583 2.729q-.167.291-.479.396-.313.104-.626-.021l-1.729-.729q-.208.125-.458.271-.25.145-.458.27l-.229 1.854q-.042.334-.282.553-.239.218-.573.218ZM10 12.979q1.229 0 2.104-.875T12.979 10q0-1.229-.875-2.104T10 7.021q-1.229 0-2.104.875T7.021 10q0 1.229.875 2.104t2.104.875Zm0-1.75q-.5 0-.865-.364-.364-.365-.364-.865t.364-.865q.365-.364.865-.364t.865.364q.364.365.364.865t-.364.865q-.365.364-.865.364ZM10.021 10Zm-.854 6.583h1.666l.25-2.166q.605-.167 1.167-.5.562-.334 1.021-.792l2.021.854.833-1.375-1.771-1.354q.104-.292.146-.604.042-.313.042-.646 0-.292-.042-.594t-.125-.635l1.771-1.375-.834-1.375-2.02.875q-.48-.479-1.032-.802-.552-.323-1.156-.49l-.271-2.187H9.167l-.271 2.187q-.604.167-1.156.49-.552.323-1.011.781l-2.021-.854-.833 1.375 1.75 1.354q-.083.333-.125.646-.042.312-.042.604t.042.594q.042.302.125.635l-1.75 1.375.833 1.375 2.021-.854q.459.458 1.011.781.552.323 1.156.49Z"/></svg></span>
            </div>
            <div className="setting-desc">
              <span className="title" style={{fontSize: block.parameters.headerSize, color: block.parameters.headerColor}}>{title5}</span>
              <span className="description" style={{fontSize: block.parameters.descriptionSize, color: block.parameters.descriptionColor}}>{description5}</span>
            </div>
          </button>
          <button type="button" className="menu-list-item d-flex" id="logout_button">
            <div className="setting-icon">
              <span className="material-icons-round icon"><svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" style={{fill: block.parameters.iconColor}}><path
                d="M12.625 13.667q-.25-.25-.25-.615 0-.364.25-.614l1.563-1.563H8.396q-.354 0-.615-.26-.26-.261-.26-.615t.26-.615q.261-.26.615-.26h5.729l-1.521-1.542q-.229-.25-.229-.604t.25-.604q.25-.25.615-.25.364 0 .614.25l3.021 3.021q.146.146.208.302.063.156.063.323t-.063.323q-.062.156-.208.302l-3.042 3.042q-.25.25-.593.25-.344 0-.615-.271ZM4.25 17.5q-.729 0-1.24-.51-.51-.511-.51-1.24V4.25q0-.729.51-1.24.511-.51 1.24-.51h4.854q.354 0 .615.26.26.261.26.615t-.26.615q-.261.26-.615.26H4.25v11.5h4.854q.354 0 .615.26.26.261.26.615t-.26.615q-.261.26-.615.26Z"/></svg></span>
            </div>
            <div className="setting-desc">
              <span className="title" style={{fontSize: block.parameters.headerSize, color: block.parameters.headerColor}}>{title6}</span>
              <span className="description" style={{fontSize: block.parameters.descriptionSize, color: block.parameters.descriptionColor}}>{description6}</span>
            </div>
          </button>
        </div>
      </div>

    </div>

  )
}

const mapStateToProps = state => {
  return {
    isInserterVisible: state.isInserterVisible
  }
}

export default connect(mapStateToProps, {
  deleteBlock,
  moveUpBlock,
  moveDownBlock,
  getBlock
})(ProfileMenu)


