import React from 'react'
import { connect } from 'react-redux'
import { Grid } from '@mui/material'
import './index.css'
import {
  deleteBlock,
  moveUpBlock,
  moveDownBlock,
  getBlock,
} from '../../../../stores/actions'

const FeedbackForm = (props) => {
  const {_id, block, deleteBlock, moveUpBlock, moveDownBlock, getBlock, themeStyle} = props

  if (block.status === 'added') {
    block.parameters = themeStyle
  }

  return (
    <div style={ { width: "100%"} } onClick={ () => getBlock(_id, block) }>
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
        <form className='feedback-form' id={ block.parameters.form_id } action={ block.parameters.action } method={ block.parameters.method } style={{ backgroundColor: block.parameters.background_color }}>
          <div className='form-container' style={{ padding: block.parameters.form_fields_padding }}>
            <div id="text_input_field_component" className="text-input-field-component">
              <label htmlFor="text_input_field" style={{ fontSize: block.parameters.label_font_size }}>Name</label>
              <input type="text"
                      id="text_input_field_1"
                      className="text-input-field"
                      name="text_input_field_1"
                      style={{ border: block.parameters.input_field_border, backgroundColor: block.parameters.input_field_background_color, color: block.parameters.input_field_text_color }}
                      placeholder="Your Name"
                      maxLength={ block.parameters.input_field_max_length } readOnly />
            </div>
            <div id="text_input_field_component" className="text-input-field-component">
              <label htmlFor="text_input_field" style={{ fontSize: block.parameters.label_font_size }}>Phone Number</label>
              <input type="email"
                      id="text_input_field_2"
                      className="text-input-field"
                      name="text_input_field_2"
                      style={{ border: block.parameters.input_field_border, backgroundColor: block.parameters.input_field_background_color, color: block.parameters.input_field_text_color }}
                      placeholder="Your Phone"
                      maxLength={ block.parameters.input_field_max_length } readOnly />
            </div>
            <div id="text_input_field_component" className="text-input-field-component">
              <label htmlFor="text_input_field" style={{ fontSize: block.parameters.label_font_size }}>Email</label>
              <input type="email"
                      id="text_input_field_3"
                      className="text-input-field"
                      name="text_input_field_3"
                      style={{ border: block.parameters.input_field_border, backgroundColor: block.parameters.input_field_background_color, color: block.parameters.input_field_text_color }}
                      placeholder="Your Email"
                      maxLength={ block.parameters.input_field_max_length } readOnly />
            </div>
            <div id="text_area_field_component" className="text-area-field-component" style={{ backgroundColor: block.parameters.background_color }}>
            <label htmlFor="text_input_field" style={{ fontSize: block.parameters.label_font_size }}>Message</label>
                <textarea id="text_area_field"
                        className="text-area-field"
                        name="new_text_area_field"
                        style={{ resize: block.parameters.textarea_field_resize, border: block.parameters.textarea_field_border, backgroundColor: block.parameters.textarea_field_background_color, color: block.parameters.textarea_field_text_color }}
                        placeholder="Your Message"
                        maxLength={ block.parameters.textarea_field_max_length }
                        readOnly >
                </textarea>
            </div>
            <div id="button_text_component" className="button-with-text-component" >
                  <button type="submit"
                          id="button_text"
                          className="button-text"
                          style={{ backgroundColor: block.parameters.button_background_color,
                                    color: block.parameters.button_text_color,
                                    borderColor: block.parameters.button_border_color,
                                    borderRadius: block.parameters.button_border_radius,
                                    width: block.parameters.button_width,
                                    pointerEvents: "none" }}>
                      Send Message
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
})(FeedbackForm)