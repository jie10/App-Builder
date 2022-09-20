import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Grid, Button } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.css'

import {
  deleteBlock,
  moveUpBlock,
  moveDownBlock,
  getBlock,
} from '../../../../stores/actions'

const FooterLinks = (props) => {
  const {_id, block, deleteBlock, moveUpBlock, moveDownBlock, getBlock, themeStyle} = props

  if (block.status === 'added') {
    block.parameters = themeStyle
  }

  return (
    <div style={ {
      width: '100%',
      height: block.parameters.height,
      backgroundColor: block.parameters.backgroundColor,
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

      <div className={ 'columns' } style={ {backgroundColor: block.parameters.backgroundColor} }>
        <div className="column">
          <img src={ block.parameters.brandLogo } alt="logo"/>
          <p>{ block.parameters.brandParagraph }</p>
          <div>
            <a href={ block.parameters.fbLink }><FontAwesomeIcon icon="fa-brands fa-facebook"/></a>
            <a href={ block.parameters.igLink }><FontAwesomeIcon icon="fa-brands fa-instagram"/></a>
            <a href={ block.parameters.twitterLink }><FontAwesomeIcon icon="fa-brands fa-twitter"/></a>
          </div>
        </div>
        <div className={ 'column' }>
          <h1>{ block.parameters.title1 }</h1>
          <p><a href={ block.parameters.url1 }>{ block.parameters.link1 }</a></p>
        </div>
        <div className={ 'column' }>
          <h1>{ block.parameters.title2 }</h1>
          <p><a href={ block.parameters.url2 }>{ block.parameters.link2 }</a></p>
        </div>
        <div className={ 'column' }>
          <h1>{ block.parameters.title3 }</h1>
          <p><a href={ block.parameters.url3 }>{ block.parameters.link3 }</a></p>
        </div>
        <div className={ 'column' }>
          <h1>{ block.parameters.title4 }</h1>
          <p><a href={ block.parameters.url4 }>{ block.parameters.link4 }</a></p>
        </div>
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
})(FooterLinks)