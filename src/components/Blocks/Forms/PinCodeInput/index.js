import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Grid } from '@mui/material'
import './style.css'

import {
  deleteBlock,
  moveUpBlock,
  moveDownBlock,
  getBlock,
} from '../../../../stores/actions'

const PinCodeInput = (props) => {
  const {_id, block, deleteBlock, moveUpBlock, moveDownBlock, getBlock, themeStyle} = props

  if (block.status === 'added') {
    block.parameters = themeStyle
  }

  return (
    <div style={ {
      width: '100%',
      height: block.parameters.height,

    } } onClick={ () => getBlock(_id, block) }>
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
      <div className="container">
        <form className='login-form' id={ block.parameters.form_id } action={ block.parameters.action } method={ block.parameters.method } style={{ backgroundColor: block.parameters.background_color }}>
          <div className='form-container' style={{ padding: block.parameters.form_fields_padding }}>
            <div id="text_input_field_component" className="text-input-field-component" style={{ margin: '0 0 8px 0' }}>
              <label htmlFor="text_input_field" style={{ fontSize: block.parameters.label_font_size }}>{ block.parameters.label_text }</label>
              <input type="email"
                      id="text_input_field"
                      className="text-input-field"
                      name="new_text_input_field"
                      placeholder={ block.parameters.input_placeholder }
                      maxLength={ block.parameters.input_max_length } readOnly />
            </div>
            <div id="button_text_component" className="button-with-text-component" >
                  <button type="button"
                          id="button_text"
                          className={"button-text button-primary"}
                          style={{ borderRadius: block.parameters.button_border_radius }}
                          disabled>
                      Login
                  </button>
            </div>
            <div id="button_text_component" className="button-with-text-component" >
                  <button type="button"
                          id="button_text"
                          className={"button-text button-secondary"}
                          style={{ borderRadius: block.parameters.button_border_radius }}>
                      Sign Up
                  </button>
            </div>
            <div id="button_text_component" className="button-with-text-component" >
                  <button type="button"
                          id="button_text"
                          className={"button-text"}
                          style={{ borderRadius: block.parameters.button_border_radius }}>
                      Forgot PIN Code
                  </button>
            </div>
          </div>
        </form>
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
})(PinCodeInput)


