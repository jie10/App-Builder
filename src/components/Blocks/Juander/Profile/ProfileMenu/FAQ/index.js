import React from "react"
import { connect } from "react-redux"
import { Grid } from "@mui/material"
import "../style.css"

import {
  deleteBlock,
  moveUpBlock,
  moveDownBlock,
  getBlock
} from "../../../../../stores/actions"

const FAQ = (props) => {
  const {_id, block, deleteBlock, moveUpBlock, moveDownBlock, getBlock, themeStyle} = props
  const faqHeader = block.parameters.faqHeader
  const faqTitle1 = block.parameters.faqTitle1
  const contentText1 = block.parameters.contentText1
  const content2Text1 = block.parameters.content2Text1
  const faqTitle2 = block.parameters.faqTitle2
  const contentText2 = block.parameters.contentText2
  const faqTitle3 = block.parameters.faqTitle3
  const contentText3 = block.parameters.contentText3
  const faqTitle4 = block.parameters.faqTitle4
  const contentText4 = block.parameters.contentText4


  if (block.status === "added") {
    block.parameters = themeStyle
  }

  return (
    <div style={{
      width: "100%",
      height: block.parameters.height,

    }} onClick={() => getBlock(_id, block)}>
      <Grid container direction="row" justifyContent="flex-end" alignItems="center">
        <Grid item onClick={() => moveUpBlock(_id)}>
          <img
            className="buttoncontrols"
            alt="upbutton"
            src="/images/round_expand_less_black_24dp.png"/>
        </Grid>
        <Grid item onClick={() => moveDownBlock(_id)}>
          <img
            className="buttoncontrols"
            alt="downbutton"
            src="/images/round_expand_more_black_24dp.png"/>
        </Grid>
        <Grid item onClick={() => deleteBlock(_id)}>
          <img
            className="buttoncontrols"
            alt="deletebutton"
            src="/images/round_close_black_24dp.png"/>
        </Grid>
      </Grid>

      <div className="faqs-container" id="faqs_container" style={{backgroundColor: block.parameters.backgroundColor}}>
        <div className="container">
          <div className="faq-header" style={{fontSize: block.parameters.headerSize, fontWeight: block.parameters.headerWeight}}>{faqHeader}</div>

          <div className="faq-content">
            <div className="faq-question">
              <input id="q1" type="checkbox" className="panel"/>
              <div className="plus">+</div>
              <label htmlFor="q1" className="panel-title" style={{fontSize: block.parameters.titleSize, fontWeight: block.parameters.titleWeight}}>{faqTitle1}</label>
              <div className="panel-content">
                <p style={{fontSize: block.parameters.contentSize, fontWeight: block.parameters.contentWeight}}>{contentText1}</p>
                <p style={{fontSize: block.parameters.contentSize, fontWeight: block.parameters.contentWeight}}>{content2Text1}</p>
              </div>
            </div>
            <div className="faq-question">
              <input id="q2" type="checkbox" className="panel"/>
              <div className="plus">+</div>
              <label htmlFor="q2" className="panel-title" style={{fontSize: block.parameters.titleSize, fontWeight: block.parameters.titleWeight}}>{faqTitle2}</label>
              <div className="panel-content">
                <p style={{fontSize: block.parameters.contentSize, fontWeight: block.parameters.contentWeight}}>{contentText2}</p>
              </div>
            </div>
            <div className="faq-question">
              <input id="q3" type="checkbox" className="panel"/>
              <div className="plus">+</div>
              <label htmlFor="q3" className="panel-title" style={{fontSize: block.parameters.titleSize, fontWeight: block.parameters.titleWeight}}>{faqTitle3}</label>
              <div className="panel-content">
                <p style={{fontSize: block.parameters.contentSize, fontWeight: block.parameters.contentWeight}}>{contentText3}</p>
              </div>
            </div>
            <div className="faq-question">
              <input id="q4" type="checkbox" className="panel"/>
              <div className="plus">+</div>
              <label htmlFor="q4" className="panel-title" style={{fontSize: block.parameters.titleSize, fontWeight: block.parameters.titleWeight}}>{faqTitle4}</label>
              <div className="panel-content">
                <p style={{fontSize: block.parameters.contentSize, fontWeight: block.parameters.contentWeight}}>{contentText4}</p>
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
    isInserterVisible: state.isInserterVisible
  }
}

export default connect(mapStateToProps, {
  deleteBlock,
  moveUpBlock,
  moveDownBlock,
  getBlock
})(FAQ)


