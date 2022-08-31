import React from 'react'
import { connect } from 'react-redux'
import { Grid } from '@mui/material'
import './style.css'

import {
  deleteBlock,
  moveUpBlock,
  moveDownBlock,
  getBlock,
} from '../../../../stores/actions'

const ForgotPinCode = (props) => {
  const {key, _id, block, deleteBlock, moveUpBlock, moveDownBlock, getBlock, themeStyle} = props

  const label_text = block.parameters.label_text
  const input_placeholder = block.parameters.input_placeholder

  if (block.status === 'added') {
    block.parameters = themeStyle
  }

  return (
    <div style={ {
      width: '100%',
      height: block.parameters.height,

    } } onClick={ () => getBlock(key, _id, block) }>
      <Grid container direction="row" justifyContent="flex-end" alignItems="center">
        <Grid item onClick={ () => moveUpBlock(_id) }>
          <img
            className="buttoncontrols"
            alt="upbutton"
            src="/images/round_expand_less_black_24dp.png"/>
        </Grid>
        <Grid item onClick={ () => moveDownBlock(_id) }>
          <img
            className="buttoncontrols"
            alt="downbutton"
            src="/images/round_expand_more_black_24dp.png"/>
        </Grid>
        <Grid item onClick={ () => deleteBlock(_id) }>
          <img
            className="buttoncontrols"
            alt="deletebutton"
            src="/images/round_close_black_24dp.png"/>
        </Grid>
      </Grid>
      <div id="modal-js-example" className="modal">
        <div className="modal-background"></div>

        <div className="modal-content">
          <div className="box">
            <p>Modal JS example</p>
            <label style={ {
              fontWeight: block.parameters.label_weight,
              fontSize: block.parameters.label_size,
              fontFamily: block.parameters.label_family,
            } }>{ label_text }</label>
            <input type="text" placeholder={ input_placeholder }/>
            <div></div>
          </div>
        </div>

        <button className="modal-close is-large" aria-label="close"></button>
      </div>
    </div>

  )
}

const mapStateToProps = state => {
  return {
    isInserterVisible: state.isInserterVisible,
  }
}

export default connect(mapStateToProps, {
  deleteBlock,
  moveUpBlock,
  moveDownBlock,
  getBlock,
})(ForgotPinCode)


