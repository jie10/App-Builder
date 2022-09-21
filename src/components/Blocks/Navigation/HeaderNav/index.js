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

const HeaderNav = (props) => {
  const {_id, block, deleteBlock, moveUpBlock, moveDownBlock, getBlock, themeStyle} = props

  if (block.status === "added") {
    block.parameters = themeStyle
  }

  return (
    <div
      style={{
        width: "100%"

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
      <header className="header-nav-component" style={{backgroundColor: block.parameters.background_color}}>
        <button type="button" className="nav-button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style={{color: block.parameters.nav_button_color, fill: block.parameters.nav_button_color}}>
            <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
          </svg>
        </button>
        <span className="page-title"
              style={{color: block.parameters.page_title_color}}>
                    {block.parameters.page_title}
                </span>
      </header>
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
})(HeaderNav)