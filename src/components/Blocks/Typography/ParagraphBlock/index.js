import React from "react"
import { connect } from "react-redux"
import { Grid } from "@mui/material"
import "./index.css"

import {
  deleteBlock,
  moveUpBlock,
  moveDownBlock,
  getBlock,
  updateBlock
} from "../../../../stores/actions"

const ParagraphBlock = (props) => {
  const {_id, block, deleteBlock, moveUpBlock, moveDownBlock, getBlock, themeStyle, updateBlock} = props

  if (block.status === "added") {
    block.parameters = themeStyle
  }

  const createPayload = (block, textfieldValue) => {
    var blockParams = block.parameters
    blockParams["p_content"] = textfieldValue

    let newBlock = {
      type: block.type,
      parameters: blockParams
    }

    console.log(newBlock)
    return newBlock
  }

  function handleParagraphBlockContent(e) {
    updateBlock(_id, createPayload(block, e.target.innerHTML))
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
      <p id="paragraph_component"
         className="paragraph-component"
         contentEditable
         onKeyUp={handleParagraphBlockContent}
         style={{
           backgroundColor: block.parameters.background_color,
           padding: block.parameters.padding,
           color: block.parameters.font_color,
           fontSize: block.parameters.font_size
         }}>
        {`${block.parameters.p_content}`}
      </p>
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
  getBlock,
  updateBlock
})(ParagraphBlock)