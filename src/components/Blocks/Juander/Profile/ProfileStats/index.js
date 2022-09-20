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

const ProfileStats = (props) => {
  const {_id, block, deleteBlock, moveUpBlock, moveDownBlock, getBlock, themeStyle} = props

  const label1_text = block.parameters.label1_text
  const label2_text = block.parameters.label2_text
  const label3_text = block.parameters.label3_text
  const label4_text = block.parameters.label4_text

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

        <div className={ 'container center-container' }>
          <div className={ 'columns' }>
            <div className={ 'column' }>
              <div className={ 'columns' }>
                <div className={ 'column' }>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" style={ {fill: block.parameters.icon_color} }>
                    <path d="m5.825 22 1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625 7.2.625-5.45 4.725L18.175 22 12 18.275Z"/>
                  </svg>
                </div>
                <div className={ 'column' }>
                  <p style={ {fontWeight: block.parameters.points_fontWeight, fontSize: block.parameters.points_fontSize, color: block.parameters.points_fontColor} }>0</p>
                  <span style={ {fontWeight: block.parameters.label_weight, fontSize: block.parameters.label_size} }>{ label1_text }</span>
                </div>
              </div>
            </div>


            <div className={ 'column' }>
              <div className={ 'columns' }>
                <div className={ 'column' }><a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" style={ {fill: block.parameters.icon_color} }>
                    <path d="M8.5 22v-1.5l2-1.5v-5.5L2 16v-2l8.5-5V3.5q0-.625.438-1.062Q11.375 2 12 2t1.062.438q.438.437.438 1.062V9l8.5 5v2l-8.5-2.5V19l2 1.5V22L12 21Z"/>
                  </svg>
                </a></div>
                <div className={ 'column' }>
                  <p style={ {fontWeight: block.parameters.points_fontWeight, fontSize: block.parameters.points_fontSize, color: block.parameters.points_fontColor} }>0</p>
                  <span style={ {fontWeight: block.parameters.label_weight, fontSize: block.parameters.label_size} }>{ label2_text }</span>
                </div>
              </div>
            </div>

            <div className={ 'column' }>
              <div className={ 'columns' }>
                <div className={ 'column' }>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" style={ {fill: block.parameters.icon_color} }>
                    <path
                      d="M7 2h10v7.85q0 .575-.25 1.025-.25.45-.7.725l-3.55 2.1.7 2.3H17l-3.1 2.2 1.2 3.8-3.1-2.35L8.9 22l1.2-3.8L7 16h3.8l.7-2.3-3.55-2.1q-.45-.275-.7-.725Q7 10.425 7 9.85Zm4 2v7.05l1 .6 1-.6V4Z"/>
                  </svg>
                </div>
                <div className={ 'column' }>
                  <p style={ {fontWeight: block.parameters.points_fontWeight, fontSize: block.parameters.points_fontSize, color: block.parameters.points_fontColor} }>0</p>
                  <span style={ {fontWeight: block.parameters.label_weight, fontSize: block.parameters.label_size} }>{ label3_text }</span>
                </div>
              </div>
            </div>

            <div className={ 'column' }>
              <div className={ 'columns' }>
                <div className={ 'column' }>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" style={ {fill: block.parameters.icon_color} }>
                    <path
                      d="m19 9-1.25-2.75L15 5l2.75-1.25L19 1l1.25 2.75L23 5l-2.75 1.25Zm0 14-1.25-2.75L15 19l2.75-1.25L19 15l1.25 2.75L23 19l-2.75 1.25ZM9 20l-2.5-5.5L1 12l5.5-2.5L9 4l2.5 5.5L17 12l-5.5 2.5Z"/>
                  </svg>
                </div>
                <div className={ 'column' }>
                  <p style={ {fontWeight: block.parameters.points_fontWeight, fontSize: block.parameters.points_fontSize, color: block.parameters.points_fontColor} }>0</p>
                  <span style={ {fontWeight: block.parameters.label_weight, fontSize: block.parameters.label_size} }>{ label4_text }</span>
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


