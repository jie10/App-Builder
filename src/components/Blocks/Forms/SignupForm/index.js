import React from 'react'
import { connect } from 'react-redux'
import { Grid } from '@mui/material'
import TextInputField from '../../TextInputField';
import './style.css'
import navigationLogo from '../../../../assets/svgs/navigation-svgrepo-com.svg'
import {
  deleteBlock,
  moveUpBlock,
  moveDownBlock,
  getBlock,
} from '../../../../stores/actions'

const SignupForm = (props) => {
  const {_id, block, deleteBlock, moveUpBlock, moveDownBlock, getBlock, themeStyle} = props
  const placeholder = block.parameters.placeholder
  const placeholder2 = block.parameters.placeholder2

  const label1 = block.parameters.label1
  const label2 = block.parameters.label2
  const label3 = block.parameters.label3
  const label4 = block.parameters.label4

  const text1 = block.parameters.text1
  const text2 = block.parameters.text2

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

      <div className={ 'container' }>
        <form className='sign-up-form' id={ block.parameters.form_id } action={ block.parameters.action } method={ block.parameters.method } style={{ backgroundColor: block.parameters.background_color }}>
          <div className='form-container' style={{ width: block.parameters.form_fields_width }}>
            <div id="text_input_field_component" className="text-input-field-component">
              <label htmlFor="text_input_field" style={{ fontSize: block.parameters.label_font_size }}>Email</label>
              <input type="email"
                      id="text_input_field"
                      className="text-input-field"
                      name="new_text_input_field"
                      placeholder="Enter your CEB Email"
                      maxLength={ 150 } readOnly />
            </div>
            <div id="text_input_field_component" className="text-input-field-component">
              <label htmlFor="text_input_field" style={{ fontSize: block.parameters.label_font_size }}>Mobile Number</label>
              <input type="email"
                      id="text_input_field"
                      className="text-input-field"
                      name="new_text_input_field"
                      placeholder="917 346 9999"
                      maxLength={ 150 } readOnly />
            </div>
            <div id="address_button_component" className="address-button-component">
                <label class="address-title">Target Location</label>
                <p class="address-title-info">Your preferred pickup or drop off used in carpool matching</p>
                <button type="button" class="address-button" id="address_button">
                    <span class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"/></svg>
                    </span>
                    <span class="details">
                        <span class="landmark-label" id="landmark_label">No Landmark</span>
                        <span class="address-label" id="address_label">Region, province, municipality, barangay</span>
                    </span>
                    <span class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"/></svg>
                    </span>
                </button>
            </div>
            <div id="button_text_component" className="button-with-text-component" >
                  <button type="button"
                          id="button_text"
                          className="button-text"
                          style={{ backgroundColor: block.parameters.button_background_color,
                                    color: block.parameters.button_text_color,
                                    borderRadius: block.parameters.button_border_radius }}
                          disabled>
                      Submit
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
})(SignupForm)


