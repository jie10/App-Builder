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

const MyBookingList = (props) => {
  const {_id, block, deleteBlock, moveUpBlock, moveDownBlock, getBlock, themeStyle} = props

  if (block.status === 'added') {
    block.parameters = themeStyle
  }

  return (
    <div
      className="list_section"
      style={ {
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
      <div>
        <ul className="list_container" style={ {backgroundColor: block.parameters.backgroundColor} }>
          { (() => {
            let list = []
            for (let i = 0; i < block.parameters.count; i++) {
              list.push(<li style={ {padding: block.parameters.cellPadding} }>
                <div className="list_container_div">
                  <div className="list_container_div_inner">
                    <div className="list_container_div_text">
                      <p className="list_container_text_title">{ block.parameters.passengerName }</p>
                      <p className="list_container_text_detail">{ block.parameters.dataTime }</p>
                      <p className="list_container_text_location">
                        { block.parameters.passengerLocation }</p>
                    </div>
                  </div>
                  <div className="list_container_div_seats">
                    <p className="list_container_div_status">{ block.parameters.status }</p>
                  </div>
                </div>
              </li>)
            }

            return list
          })() }

        </ul>
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
})(MyBookingList)


