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

const TimePicker = (props) => {
  const {
    _id,
    block,
    deleteBlock,
    moveUpBlock,
    moveDownBlock,
    getBlock,
    themeStyle,
  } = props

  if (block.status === 'added') {
    block.parameters = themeStyle
  }

  return (
    <div
      style={{
        width: '100%',
      }}
      onClick={() => getBlock(_id, block)}
    >
      <Grid
        container
        direction='row'
        justifyContent='flex-end'
        alignItems='center'
      >
        <Grid item onClick={() => moveUpBlock(_id)}>
          <img
            className='buttoncontrols'
            alt='upbutton'
            src='/images/round_expand_less_black_24dp.png'
          />
        </Grid>
        <Grid item onClick={() => moveDownBlock(_id)}>
          <img
            className='buttoncontrols'
            alt='downbutton'
            src='/images/round_expand_more_black_24dp.png'
          />
        </Grid>
        <Grid item onClick={() => deleteBlock(_id)}>
          <img
            className='buttoncontrols'
            alt='deletebutton'
            src='/images/round_close_black_24dp.png'
          />
        </Grid>
      </Grid>
      <div
        id='time_picker_component'
        className='time-picker-component'
        style={{ backgroundColor: block.parameters.background_color }}
      >
        <label htmlFor='time_picker'>{block.parameters.input_label}</label>
        <input
          type='time'
          id='time_picker'
          className='time-picker'
          name='new_time'
          style={{
            width: block.parameters.width,
            backgroundColor: block.parameters.input_background_color,
            color: block.parameters.input_color,
            fontSize: block.parameters.input_font_size,
          }}
          placeholder={block.parameters.input_placeholder}
        />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isInserterVisible: state.isInserterVisible,
  }
}

export default connect(mapStateToProps, {
  deleteBlock,
  moveUpBlock,
  moveDownBlock,
  getBlock,
})(TimePicker)
