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

const ForgotPinCode = (props) => {
  const {_id, block, deleteBlock, moveUpBlock, moveDownBlock, getBlock, themeStyle} = props
  const [ openModal, setOpenModal ] = useState(false)

  const label1_text = block.parameters.label1_text
  const label2_text = block.parameters.label2_text
  const placeholder = block.parameters.placeholder

  if (block.status === 'added') {
    block.parameters = themeStyle
  }

  return (
    <div className="div-absolute" style={ {
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

      <div className="btnModal container">
        <button className="openModalBtn text-center" onClick={ () => {
          setOpenModal(true)
        } } style={ {fontStyle: block.parameters.label1_fontStyle, fontSize: block.parameters.label1_fontSize, fontWeight: block.parameters.label1_weight} }>{ label1_text }</button>
      </div>

      { openModal && <div className="modalBackground">
        <div className="modalContainer">
          <div className="title" style={ {fontStyle: block.parameters.label2_fontStyle, fontSize: block.parameters.label2_fontSize, fontWeight: block.parameters.label2_weight} }><p>{ label2_text }</p>
          </div>
          <div className="body">
            <input className="input-email" type="email" placeholder={ placeholder } style={ {backgroundColor: block.parameters.input_bgcolor} }/>
          </div>
          <div className="footer">
            <button className="button mt-5 mr-2 btn-send" style={ {backgroundColor: block.parameters.btn1_bgColor} }>Send</button>
            <button className="button mt-5 ml-2 btn-cancel" onClick={ () => {
              setOpenModal(false)
            }
            } style={ {backgroundColor: block.parameters.btn2_bgColor} }>Cancel
            </button>
          </div>
        </div>
      </div> }
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


