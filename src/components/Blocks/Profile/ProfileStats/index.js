import React from 'react'
import { connect } from 'react-redux'
import { Grid } from '@mui/material'
import './style.css'
import star from './svg/star_FILL1_wght400_GRAD0_opsz48.svg'
import flight from './svg/flight_FILL1_wght400_GRAD0_opsz48.svg'
import badge from './svg/military_tech_FILL1_wght400_GRAD0_opsz48.svg'
import awesome from './svg/auto_awesome_FILL1_wght400_GRAD0_opsz48.svg'

import {
  deleteBlock,
  moveUpBlock,
  moveDownBlock,
  getBlock,
} from '../../../../stores/actions'

const ProfileStats = (props) => {
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

        <div className={ 'container' }>
          <div className={ 'columns' }>
            <div className={ 'column' }>
              <div className={ 'columns' }>
                <div className={ 'column' }><img className={ 'statsicons' } alt={ star } src={ star }/></div>
                <div className={ 'column' }>
                  <h1>0</h1>
                  <span>Points</span>
                </div>
              </div>
            </div>


            <div className={ 'column' }>
              <div className={ 'columns' }>
                <div className={ 'column' }><img className={ 'statsicons' } alt={ flight } src={ flight }/></div>
                <div className={ 'column' }>
                  <h1>0</h1>
                  <span>DTP</span>
                </div>
              </div>
            </div>

            <div className={ 'column' }>
              <div className={ 'columns' }>
                <div className={ 'column' }><img className={ 'statsicons' } alt={ badge } src={ badge }/></div>
                <div className={ 'column' }>
                  <h1>0</h1>
                  <span>Badges</span>
                </div>
              </div>
            </div>

            <div className={ 'column' }>
              <div className={ 'columns' }>
                <div className={ 'column' }><img className={ 'statsicons' } alt={ awesome } src={ awesome }/></div>
                <div className={ 'column' }>
                  <h1>0</h1>
                  <span>Items</span>
                </div>
              </div>
            </div>
          </div>
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
})(ProfileStats)


