import React from 'react'
import { connect } from 'react-redux'
import { Grid } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.css'

import {
  deleteBlock,
  moveUpBlock,
  moveDownBlock,
  getBlock,
} from '../../../../../stores/actions'

const FooterSimple = (props) => {
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
        height: block.parameters.height,
        backgroundColor: block.parameters.backgroundColor,
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
      <footer className="footer-simple-component" style={{ backgroundColor: block.parameters.background_color, color: block.parameters.text_color }}>
        <div class="div-wrapper row align-items-center py-3">
            <div class="col"> © { new Date().getFullYear() } All Rights Reserved. { block.parameters.brand_name } </div>
            <div class="col footer-icons">
                <a href={block.parameters.fbLink} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon='fa-brands fa-facebook' />
                </a>
                <a href={block.parameters.igLink} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon='fa-brands fa-instagram' />
                </a>
                <a href={block.parameters.twitterLink} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon='fa-brands fa-twitter' />
                </a>
            </div>
        </div>
      </footer>
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
})(FooterSimple)
