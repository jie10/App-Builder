import React from "react"
import { connect } from "react-redux"
import { Grid } from "@mui/material"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./index.css"

import {
  deleteBlock,
  moveUpBlock,
  moveDownBlock,
  getBlock
} from "../../../../../stores/actions"

const BottomNavbar = (props) => {
  const {_id, block, deleteBlock, moveUpBlock, moveDownBlock, getBlock, themeStyle} = props

  if (block.status === "added") {
    block.parameters = themeStyle
  }

  return (
    <div style={{
      width: "100%"
    }} onClick={() => getBlock(_id, block)}>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet"></link>
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
      <div>
        <div className="bottom-navbar-component" style={{backgroundColor: block.parameters.background_color, borderTop: block.parameters.border_top}}>
          <div className="navbar-container">
            {block.parameters.tabs_name.split(",").map((tab_name, i) => {
              let icons = block.parameters.tabs_icon.split(",")
              return <a className={`nav-tab`} key={i} style={{color: block.parameters.tab_active_index === i ? block.parameters.font_color_active : block.parameters.font_color, pointerEvents: "none"}}
                        id={`nav_tab_${i}`} href="/">
                {icons[i] ? <FontAwesomeIcon icon={icons[i]}/> : null}
                {tab_name}
              </a>
            })}

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
})(BottomNavbar)