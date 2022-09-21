import React from "react"
import { connect } from "react-redux"
import { Grid } from "@mui/material"
import "./index.css"

import {
  deleteBlock,
  moveUpBlock,
  moveDownBlock,
  getBlock
} from "../../../../stores/actions"

const ToggleNavTab = (props) => {
  const {_id, block, deleteBlock, moveUpBlock, moveDownBlock, getBlock, themeStyle} = props

  if (block.status === "added") {
    block.parameters = themeStyle
  }

  return (
    <div style={{width: "100%", backgroundColor: "#ffffff"}} onClick={() => getBlock(_id, block)}>
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
      <div className="toggle-nav-tab-component" id="toggle_nav_tab_component" style={{backgroundColor: block.parameters.background_color}}>
        <button type="button" className="tab-button" style={{
          color: block.parameters.button_text_color,
          backgroundColor: parseInt(block.parameters.active_tab_index) === 0 && block.parameters.button_background_color,
          cursor: parseInt(block.parameters.active_tab_index) === 0 && "default"
        }} id="first_tab_button">{block.parameters.first_tab_name}</button>
        <button type="button" className="tab-button" style={{
          color: block.parameters.button_text_color,
          backgroundColor: parseInt(block.parameters.active_tab_index) === 1 && block.parameters.button_background_color,
          cursor: parseInt(block.parameters.active_tab_index) === 1 && "default"
        }} id="second_tab_button">{block.parameters.second_tab_name}</button>
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
})(ToggleNavTab)