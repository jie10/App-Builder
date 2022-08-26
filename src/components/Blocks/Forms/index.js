import React from 'react'
import { connect } from 'react-redux'
import { Grid } from '@mui/material'
import './style.css'
import LoginForm from './LoginForm'
import PinCodeForm from './PinCodeForm'
import {
  deleteBlock,
  moveUpBlock,
  moveDownBlock,
  getBlock
} from '../../../../stores/actions'

const FormBlocks = (props) => {
  const { _id, block, deleteBlock, moveUpBlock, moveDownBlock, getBlock, themeStyle } = props

  if (block.status === "added") {
    block.parameters = themeStyle
  }

  return(
    <div style={{
      width: '100%',
      height: block.parameters.height,

    }} onClick={() => getBlock(_id, block)}>
      <Grid container direction="row" justifyContent="flex-end" alignItems="center">
        <Grid item onClick={() => moveUpBlock(_id)}>
          <img
            className='buttoncontrols'
            alt='upbutton'
            src='/images/round_expand_less_black_24dp.png' />
        </Grid>
        <Grid item onClick={() => moveDownBlock(_id)}>
          <img
            className='buttoncontrols'
            alt='downbutton'
            src='/images/round_expand_more_black_24dp.png' />
        </Grid>
        <Grid item onClick={() => deleteBlock(_id)}>
          <img
            className='buttoncontrols'
            alt='deletebutton'
            src='/images/round_close_black_24dp.png' />
        </Grid>
      </Grid>
      {/*<div className="c-campaigns__cards">
        <div className="c-campaigns__card" style={{backgroundColor: block.parameters.backgroundColor}}>
          <div>
            <img alt="" src={block.parameters.card1Image}/>
          </div>
          <div className="content">
            <h6><strong>{block.parameters.card1Title}</strong></h6>
            <p><p>As the country's leading carrier, Cebu Pacific celebrates its 25th year by continuously making air travel fun, safe, convenient, flexible, accessible, and affordable for everyJuan.</p></p>
            <button className="o-btn fixed-size o-btn--primary-blue" type="button"
                    style={{background: block.parameters.buttonColor}}> View more information</button>
          </div>
        </div>
      </div>*/}
      <div>
        <div className={ `${ toggle ? 'hidden' : 'w-100 m' }` }>
          <button
            onClick={ () => {
              setSelected('Login')
              setToggle(!toggle)
            } }
          >
            { ' ' }
            Login
          </button>
          <button
            onClick={ () => {
              setSelected('PinCode')
              setToggle(!toggle)
            } }
            type={ 'button' }
          >
            Pin Code
          </button>

        </div>
        { selected === 'Login' && <LoginForm/> }
        { selected === 'Contact' && <PinCodeForm/> }
      </div>
    </div>

  )
}

const mapStateToProps = state => {
  return {
    isInserterVisible: state.isInserterVisible
  }
}

export default connect(mapStateToProps, {
  deleteBlock,
  moveUpBlock,
  moveDownBlock,
  getBlock
})(FormBlocks)


