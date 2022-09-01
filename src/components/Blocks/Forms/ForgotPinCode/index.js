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

      <p className="openModalBtn" onClick={ () => {
        setOpenModal(true)
      } }>Forgot PIN Code</p>

      { openModal && <div className="modalBackground">
        <div className="modalContainer">
          <div className="title">Forgot PIN Code</div>
          <div className="body">
            <input type="text" placeholder="Your Email"/>
          </div>
          <div className="footer">
            <button className="button">Send</button>
            <button className="button" onClick={ () => {
              setOpenModal(false)
            }
            }>Cancel
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


