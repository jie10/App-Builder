import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Grid } from '@mui/material'
import './style.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/swiper-bundle.css'


// import required modules
import { Navigation } from 'swiper'


import {
  deleteBlock,
  moveUpBlock,
  moveDownBlock,
  getBlock,
} from '../../../stores/actions'

const Carousel = (props) => {
  const {_id, block, deleteBlock, moveUpBlock, moveDownBlock, getBlock, themeStyle} = props

  if (block.status === 'added') {
    block.parameters = themeStyle
  }

  return (
    <div className="div-absolute pin-bgcolor" style={ {
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
      <Swiper navigation={ true } modules={ [ Navigation ] } className="mySwiper">
        <SwiperSlide><img alt="slides" src={ block.parameters.slide1 }/></SwiperSlide>
        <SwiperSlide><img alt="slides" src={ block.parameters.slide2 }/></SwiperSlide>
        <SwiperSlide><img alt="slides" src={ block.parameters.slide3 }/></SwiperSlide>
      </Swiper>
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
})(Carousel)


