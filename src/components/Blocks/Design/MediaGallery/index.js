import React from "react"
import { connect } from "react-redux"
import { Grid } from "@mui/material"
import "./style.css"

import {
  deleteBlock,
  moveUpBlock,
  moveDownBlock,
  getBlock,
} from "../../../../stores/actions"

const MediaGallery = (props) => {
  const {
    _id,
    block,
    deleteBlock,
    moveUpBlock,
    moveDownBlock,
    getBlock,
    themeStyle,
  } = props

  if (block.status === "added") {
    block.parameters = themeStyle
  }

  return (
    <div
      className="media_gallery_section"
      style={{
        width: "100%",
        height: block.parameters.height,
        backgroundColor: block.parameters.backgroundColor,
      }}
      onClick={() => getBlock(_id, block)}
    >
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
      >
        <Grid item onClick={() => moveUpBlock(_id)}>
          <img
            className="buttoncontrols"
            alt="upbutton"
            src="/images/round_expand_less_black_24dp.png"
          />
        </Grid>
        <Grid item onClick={() => moveDownBlock(_id)}>
          <img
            className="buttoncontrols"
            alt="downbutton"
            src="/images/round_expand_more_black_24dp.png"
          />
        </Grid>
        <Grid item onClick={() => deleteBlock(_id)}>
          <img
            className="buttoncontrols"
            alt="deletebutton"
            src="/images/round_close_black_24dp.png"
          />
        </Grid>
      </Grid>

      <div
        className="c-guide__gallery"
        style={{
          borderRadius: block.parameters.borderRadius,
          boxShadow: block.parameters.boxShadow,
        }}
      >
        <div className="c-guide__gallery--selected">
          <img
            className="ng-tns-c15-34"
            alt=""
            src="https://cdn.media.amplience.net/i/cebupacificair/media_gallery-photo-aircraft-a321neo_pw_ceb_v05_1500px-1500x1125?w=1980&amp;sm=c&amp;scaleFit=poi&amp;poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}"
          />
          <a className="viewall" href="javascript: void(0)">
            View All Photos
          </a>
        </div>
        <div className="c-guide__gallery--list">
          <ul className="ng-tns-c15-34">
            <li className="ng-tns-c15-34 ng-star-inserted">
              <img
                className="ng-tns-c15-34"
                alt=""
                src="https://cdn.media.amplience.net/i/cebupacificair/media_gallery-photo-aircraft-a321neo_pw_ceb_v05_1500px-1500x1125?w=1980&amp;sm=c&amp;scaleFit=poi&amp;poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}"
              />
            </li>
            <li className="ng-tns-c15-34 ng-star-inserted">
              <img
                className="ng-tns-c15-34"
                alt=""
                src="https://cdn.media.amplience.net/i/cebupacificair/media_gallery-photo-aircraft-airbus_a320_with_sharklets_0-3008x1997?w=1980&amp;sm=c&amp;scaleFit=poi&amp;poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}"
              />
            </li>
            <li className="ng-tns-c15-34 ng-star-inserted">
              <img
                className="ng-tns-c15-34"
                alt=""
                src="https://cdn.media.amplience.net/i/cebupacificair/media_gallery-photo-aircraft-airbus_40_1-3648x2736?w=1980&amp;sm=c&amp;scaleFit=poi&amp;poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}"
              />
            </li>
            <li className="ng-tns-c15-34 ng-star-inserted">
              <img
                className="ng-tns-c15-34"
                alt=""
                src="https://cdn.media.amplience.net/i/cebupacificair/media_gallery-photo-aircraft-clark_ramp_150213_3012-3817x2749?w=1980&amp;sm=c&amp;scaleFit=poi&amp;poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}"
              />
            </li>
            <li className="ng-tns-c15-34 ng-star-inserted">
              <img
                className="ng-tns-c15-34"
                alt=""
                src="https://cdn.media.amplience.net/i/cebupacificair/media_gallery-photo-aircraft-cebu_pacific_atr-800x565?w=1980&amp;sm=c&amp;scaleFit=poi&amp;poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}"
              />
            </li>
            <li className="ng-tns-c15-34 ng-star-inserted">
              <img
                className="ng-tns-c15-34"
                alt=""
                src="https://cdn.media.amplience.net/i/cebupacificair/media_gallery-photo-aircraft-ceb_atr_takeoff-1472x980?w=1980&amp;sm=c&amp;scaleFit=poi&amp;poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}"
              />
            </li>
            <li className="ng-tns-c15-34 ng-star-inserted">
              <img
                className="ng-tns-c15-34"
                alt=""
                src="https://cdn.media.amplience.net/i/cebupacificair/media_gallery-photo-aircraft-airbus_a320_with_sharklets_3-3008x2085?w=1980&amp;sm=c&amp;scaleFit=poi&amp;poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}"
              />
            </li>
            <li className="ng-tns-c15-34 ng-star-inserted">
              <img
                className="ng-tns-c15-34"
                alt=""
                src="https://cdn.media.amplience.net/i/cebupacificair/media_gallery-photo-aircraft-a330_300_cebu_2_photo-3008x2085?w=1980&amp;sm=c&amp;scaleFit=poi&amp;poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}"
              />
            </li>
          </ul>
          <a className="gallery gallery-prev ng-tns-c15-34 ng-star-inserted">
            <img
              className="ng-tns-c15-34"
              alt=""
              src="component-assets/images/icon-gallery_arrow.svg"
            />
          </a>
          <a className="gallery gallery-next ng-tns-c15-34 ng-star-inserted">
            <img
              className="ng-tns-c15-34"
              alt=""
              src="component-assets/images/icon-gallery_arrow.svg"
            />
          </a>
        </div>
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
})(MediaGallery)
