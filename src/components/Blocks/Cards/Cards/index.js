import React from 'react'
import { connect } from 'react-redux'
import { Grid } from '@mui/material'
import './style.css'

import {
  deleteBlock,
  moveUpBlock,
  moveDownBlock,
  getBlock,
} from '../../../../stores/actions'

const Cards = (props) => {
  const {_id, block, deleteBlock, moveUpBlock, moveDownBlock, getBlock, themeStyle} = props

  if (block.status === 'added') {
    block.parameters = themeStyle
  }

  return (
    <div id="page-content-wrapper">
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

        <div className="c-explore__threecards--row">
          <a className="c-explore__threecards--item ng-star-inserted" href="#">
            <img alt="" src={ block.parameters.card1Image }/>
            <h6 className="title">{ block.parameters.card1Title }</h6>
            <p className="paragraph">{ block.parameters.card1Paragraph }</p>
            <img alt="" src={ block.parameters.card2Image }/>
          </a>
          <a className="c-explore__threecards--item ng-star-inserted" target="_self" href="/pages/about/corporate-governance/corporate-governance-manual?nohf=true&amp;header=Corporate%20Governance">
            <figure>
              <img alt="" src={ block.parameters.card2Image }/>
            </figure>
            <h6 className="title">{ block.parameters.card2Title }</h6>
            <p className="paragraph">{ block.parameters.card2Paragraph }</p>
            <figure>
              <img alt="" src={ block.parameters.card3Image }/>
            </figure>
          </a>
          <a className="c-explore__threecards--item ng-star-inserted" target="_self" href="/pages/about/corporate-disclosure/sec-filing?nohf=true&amp;header=Corporate%20Disclosures">
            <figure>
              <img alt="" src={ block.parameters.card4Image }/>
            </figure>
            <h6 className="title">{ block.parameters.card3Title }</h6>
            <p className="paragraph">{ block.parameters.card3Paragraph }</p>
            <figure>
              <img alt="" src={ block.parameters.card5Image }/>
            </figure>
          </a>
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
})(Cards)


