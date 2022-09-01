import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Grid } from '@mui/material'
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
        <form>
          <div>
            <label className="label1" style={ {
              fontSize: block.parameters.fontSize,
              fontFamily: block.parameters.fontFamily,
              fontWeight: block.parameters.fontWeight,
            } }>{ label1 }</label>
            <input type={ 'text' } placeholder={ placeholder } style={ {
              fontSize: block.parameters.input_fontSize,
              fontFamily: block.parameters.input_fontFamily,
              fontWeight: block.parameters.input_fontWeight,
              backgroundColor: block.parameters.input_bgColor,
              borderRadius: block.parameters.input_borderRadius,
            } }/>
          </div>
          <div>
            <label className="label2" style={ {
              fontSize: block.parameters.fontSize,
              fontFamily: block.parameters.fontFamily,
              fontWeight: block.parameters.fontWeight,
              color: block.parameters.color,
            } }>{ label2 }</label>
            <input type={ 'text' } placeholder={ placeholder2 } style={ {
              fontSize: block.parameters.input_fontSize,
              fontFamily: block.parameters.input_fontFamily,
              fontWeight: block.parameters.input_fontWeight,
              backgroundColor: block.parameters.input_bgColor,
              borderRadius: block.parameters.input_borderRadius,
            } }/>
          </div>
          <div>
            <label className="label3" style={ {
              fontSize: block.parameters.fontSize,
              fontFamily: block.parameters.fontFamily,
              fontWeight: block.parameters.fontWeight,
            } }>{ label3 }</label>
            <p style={ {
              fontSize: block.parameters.text1_Size,
              fontWeight: block.parameters.text1_textWeight,
            } }>{ text1 }</p>
            <button className={ 'button' } style={ {
              height: block.parameters.btn1_Height,
              width: block.parameters.btn1_btnWidth,
              backgroundColor: block.parameters.btn1_btnColor,
              borderRadius: block.parameters.btn1_btnRadius,
            } }>
              <div className={ 'columns' }>
                <div className={ 'column' }>
                  <img style={ {height: block.parameters.imgHeight, width: block.parameters.imgWidth} }
                       src={ navigationLogo }/>
                </div>
                <div className={ 'column' }>
                  <label style={ {
                    fontSize: block.parameters.label4_Size,
                    fontFamily: block.parameters.label4_fontFamily,
                    fontWeight: block.parameters.label4_fontWeight,
                  } }>{ label4 }</label>
                  <p style={ {
                    fontSize: block.parameters.text2_Size,
                    fontWeight: block.parameters.text2_textWeight,
                  } }>{ text2 }</p>
                </div>
              </div>
            </button>
          </div>
          <button className={ 'button is-info m-1' } style={ {
            height: block.parameters.btn2_Height,
            width: block.parameters.btn2_btnWidth,
            backgroundColor: block.parameters.btn2_btnColor,
            borderRadius: block.parameters.btn2_btnRadius,
          } }>Sign Up
          </button>
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


