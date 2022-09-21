import React from "react"
import { connect } from "react-redux"
import { Grid } from "@mui/material"
import "./style.css"
import avatar from "./no-avatar.png"
import {
  deleteBlock,
  moveUpBlock,
  moveDownBlock,
  getBlock
} from "../../../../../stores/actions"

const MenuHeader = (props) => {
  const {_id, block, deleteBlock, moveUpBlock, moveDownBlock, getBlock, themeStyle} = props
  const user_name = block.parameters.user_name
  const user_role = block.parameters.user_role
  const user_company = block.parameters.user_company

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
      <div className="profile-navbar" id="profile_navbar" style={{backgroundColor: block.parameters.backgroundColor}}>
        <div className="container d-flex">
          <div className="avatar-container">
            <img alt="avatar" className="avatar" src={avatar}/>
          </div>
          <div className="profile-info d-flex flex-column justify-content-center align-items-start">
            <span className="user-name" style={{fontSize: block.parameters.nameSize}}>{user_name}</span>
            <span className="user-role" style={{fontSize: block.parameters.roleSize}}>{user_role}</span>
            <span className="badge rounded-pill bg-primary user-position" style={{fontSize: block.parameters.companySize}}>{user_company}</span>
          </div>
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
})(MenuHeader)


