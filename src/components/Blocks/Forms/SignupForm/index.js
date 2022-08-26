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

      <form>
        <div>
          <label style={ {
            fontSize: block.parameters.fontSize1,
            fontFamily: block.parameters.fontFamily1,
            fontWeight: block.parameters.fontWeight1,
            color: block.parameters.color1,
          } }>{ label1 }</label>
          <input type={ 'text' } placeholder={ placeholder } style={ {
            fontSize: block.parameters.fontSize,
            fontFamily: block.parameters.fontFamily,
            fontWeight: block.parameters.fontWeight,
            color: block.parameters.color,
            borderRadius: block.parameters.borderRadius,
          } }/>
        </div>
        <div>
          <label style={ {
            fontSize: block.parameters.fontSize2,
            fontFamily: block.parameters.fontFamily2,
            fontWeight: block.parameters.fontWeight2,
            color: block.parameters.color2,
          } }>{ label2 }</label>
          <input type={ 'text' } placeholder={ placeholder2 } style={ {
            fontSize: block.parameters.fontSize,
            fontFamily: block.parameters.fontFamily,
            fontWeight: block.parameters.fontWeight,
            color: block.parameters.color,
            borderRadius: block.parameters.borderRadius,
          } }/>
        </div>
        <div>
          <label style={ {
            fontSize: block.parameters.fontSize3,
            fontFamily: block.parameters.fontFamily3,
            fontWeight: block.parameters.fontWeight3,
            color: block.parameters.color3,
          } }>{ label3 }</label>
          <p style={ {
            fontSize: block.parameters.textSize1,
            fontFamily: block.parameters.textFamily1,
            fontWeight: block.parameters.textWeight1,
            color: block.parameters.textcolor1,
          } }>{ text1 }</p>
          <button style={ {
            height: block.parameters.btnHeight,
            width: block.parameters.btnWidth,
            backgroundColor: block.parameters.btnColor,
            borderRadius: block.parameters.btnRadius,
          } }>
            <div className={ 'columns' }>
              <div className={ 'column' }>
                <img style={ {height: block.parameters.imgHeight, width: block.parameters.imgWidth} }
                     src={ navigationLogo }/>
              </div>
              <div className={ 'column' }>
                <label style={ {
                  fontSize: block.parameters.fontSize4,
                  fontFamily: block.parameters.fontFamily4,
                  fontWeight: block.parameters.fontWeight4,
                  color: block.parameters.color4,
                } }>{ label4 }</label>
                <p style={ {
                  fontSize: block.parameters.textSize2,
                  fontFamily: block.parameters.textFamily2,
                  fontWeight: block.parameters.textWeight2,
                  color: block.parameters.textcolor2,
                } }>{ text2 }</p>
              </div>
            </div>
          </button>
        </div>
        <button style={ {
          borderRadius: block.parameters.btnradius2,
          height: block.parameters.btnHeight2,
          width: block.parameters.btnWidth2,
          backgroundColor: block.parameters.btnColor2,
        } }>Sign Up
        </button>
      </form>

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


