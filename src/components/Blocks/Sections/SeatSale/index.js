import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Grid, Button } from '@mui/material'
import './style.css'

import {
    deleteBlock,
    moveUpBlock,
    moveDownBlock,
    getBlock
} from '../../../../stores/actions'

const SeatSaleSection = (props) => {

    const { _id, block, deleteBlock, moveUpBlock, moveDownBlock, getBlock } = props

    return(
        <div style={{
            width: '100%',
            height: block.parameters.height,
            backgroundColor: block.parameters.backgroundColor
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
        
        
        <div className='row' style={{ justifyContent: "center"}}>
            <div className="seat-sale-body__subtitle container row mb-2" id="seat-sale-period-0" style= {{ justifyContent: "left"}}>
                <div className="ss-days-left ng-star-inserted">
                    <span>2 DAY LEFT TO BOOK</span>
                </div>
                <div className="ss-subtitle">
                    <h3 className="m-0">
                        <strong>Flash Sale!</strong>
                    </h3>
                </div>
                <div className="ss-sale-period"> Sale Period: 01 Dec  to 11 Dec 2021 or until seats last </div>
            </div>
            <div className="seat-sale-body__data container">
                <div>
                    <div className="container row">
                        <div className="col-6 col-md-7 col-sm-6 row m-0">
                            <div className="col-md-7 col-sm-6">
                                <img className="icon-flight-blue" src="https://cdn.media.amplience.net/i/cebupacificair/planeicon?w=15&amp;sm=c&amp;scaleFit=poi&amp;poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}"/>
                                <span>Manila to</span>
                                <br/>
                                <h5><strong>Macau</strong></h5>
                            </div>
                            <div className="col-md-5 col-sm-6">
                                <span>For as low as</span>
                                <br/>
                                <span class="seat-sale-fare">₱899.00</span>
                                <img src="https://cdn.media.amplience.net/i/cebupacificair/SeatSale_BaseFare_Icon?w=60&amp;sm=c&amp;scaleFit=poi&amp;poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}"/>
                            </div>
                        </div>
                        <div className="col-6 col-md-5 col-sm-6 row m-0 p-0">
                            <div className="col-sm-6 travel-period">
                                <span>Travel Period:</span>
                                <br/>
                                <span>01 Jan  - 31 Mar 2022</span>
                            </div>
                            <div className="col-sm-6 d-flex">
                                <div className="m-auto w-100">
                                    <a className="tool-tip">
                                        <img className="icon-seat-blue" src="https://cdn.media.amplience.net/i/cebupacificair/SeatSale_Tooltip_Modal_Icon?w=40&amp;sm=c&amp;scaleFit=poi&amp;poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}"/>
                                    </a>
                                    <button className="o-btn o-btn--primary-blue btn-book-now"> BOOK NOW </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                </div>
                <div>
                    <div className="container row">
                        <div className="col-6 col-md-7 col-sm-6 row m-0">
                            <div className="col-md-7 col-sm-6">
                                <img className="icon-flight-blue" src="https://cdn.media.amplience.net/i/cebupacificair/planeicon?w=15&amp;sm=c&amp;scaleFit=poi&amp;poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}"/>
                                <span>Manila to</span>
                                <br/>
                                <h5><strong>Macau</strong></h5>
                            </div>
                            <div className="col-md-5 col-sm-6">
                                <span>For as low as</span>
                                <br/>
                                <span class="seat-sale-fare">₱899.00</span>
                                <img src="https://cdn.media.amplience.net/i/cebupacificair/SeatSale_BaseFare_Icon?w=60&amp;sm=c&amp;scaleFit=poi&amp;poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}"/>
                            </div>
                        </div>
                        <div className="col-6 col-md-5 col-sm-6 row m-0 p-0">
                            <div className="col-sm-6 travel-period">
                                <span>Travel Period:</span>
                                <br/>
                                <span>01 Jan  - 31 Mar 2022</span>
                            </div>
                            <div className="col-sm-6 d-flex">
                                <div className="m-auto w-100">
                                    <a className="tool-tip">
                                        <img className="icon-seat-blue" src="https://cdn.media.amplience.net/i/cebupacificair/SeatSale_Tooltip_Modal_Icon?w=40&amp;sm=c&amp;scaleFit=poi&amp;poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}"/>
                                    </a>
                                    <button className="o-btn o-btn--primary-blue btn-book-now"> BOOK NOW </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                </div>
                <div>
                    <div className="container row">
                        <div className="col-6 col-md-7 col-sm-6 row m-0">
                            <div className="col-md-7 col-sm-6">
                                <img className="icon-flight-blue" src="https://cdn.media.amplience.net/i/cebupacificair/planeicon?w=15&amp;sm=c&amp;scaleFit=poi&amp;poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}"/>
                                <span>Manila to</span>
                                <br/>
                                <h5><strong>Macau</strong></h5>
                            </div>
                            <div className="col-md-5 col-sm-6">
                                <span>For as low as</span>
                                <br/>
                                <span class="seat-sale-fare">₱899.00</span>
                                <img src="https://cdn.media.amplience.net/i/cebupacificair/SeatSale_BaseFare_Icon?w=60&amp;sm=c&amp;scaleFit=poi&amp;poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}"/>
                            </div>
                        </div>
                        <div className="col-6 col-md-5 col-sm-6 row m-0 p-0">
                            <div className="col-sm-6 travel-period">
                                <span>Travel Period:</span>
                                <br/>
                                <span>01 Jan  - 31 Mar 2022</span>
                            </div>
                            <div className="col-sm-6 d-flex">
                                <div className="m-auto w-100">
                                    <a className="tool-tip">
                                        <img className="icon-seat-blue" src="https://cdn.media.amplience.net/i/cebupacificair/SeatSale_Tooltip_Modal_Icon?w=40&amp;sm=c&amp;scaleFit=poi&amp;poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}"/>
                                    </a>
                                    <button className="o-btn o-btn--primary-blue btn-book-now"> BOOK NOW </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                </div>
                <div>
                    <div className="container row">
                        <div className="col-6 col-md-7 col-sm-6 row m-0">
                            <div className="col-md-7 col-sm-6">
                                <img className="icon-flight-blue" src="https://cdn.media.amplience.net/i/cebupacificair/planeicon?w=15&amp;sm=c&amp;scaleFit=poi&amp;poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}"/>
                                <span>Manila to</span>
                                <br/>
                                <h5><strong>Macau</strong></h5>
                            </div>
                            <div className="col-md-5 col-sm-6">
                                <span>For as low as</span>
                                <br/>
                                <span class="seat-sale-fare">₱899.00</span>
                                <img src="https://cdn.media.amplience.net/i/cebupacificair/SeatSale_BaseFare_Icon?w=60&amp;sm=c&amp;scaleFit=poi&amp;poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}"/>
                            </div>
                        </div>
                        <div className="col-6 col-md-5 col-sm-6 row m-0 p-0">
                            <div className="col-sm-6 travel-period">
                                <span>Travel Period:</span>
                                <br/>
                                <span>01 Jan  - 31 Mar 2022</span>
                            </div>
                            <div className="col-sm-6 d-flex">
                                <div className="m-auto w-100">
                                    <a className="tool-tip">
                                        <img className="icon-seat-blue" src="https://cdn.media.amplience.net/i/cebupacificair/SeatSale_Tooltip_Modal_Icon?w=40&amp;sm=c&amp;scaleFit=poi&amp;poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}"/>
                                    </a>
                                    <button className="o-btn o-btn--primary-blue btn-book-now"> BOOK NOW </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                </div>
                <div>
                    <div className="container row">
                        <div className="col-6 col-md-7 col-sm-6 row m-0">
                            <div className="col-md-7 col-sm-6">
                                <img className="icon-flight-blue" src="https://cdn.media.amplience.net/i/cebupacificair/planeicon?w=15&amp;sm=c&amp;scaleFit=poi&amp;poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}"/>
                                <span>Manila to</span>
                                <br/>
                                <h5><strong>Macau</strong></h5>
                            </div>
                            <div className="col-md-5 col-sm-6">
                                <span>For as low as</span>
                                <br/>
                                <span class="seat-sale-fare">₱899.00</span>
                                <img src="https://cdn.media.amplience.net/i/cebupacificair/SeatSale_BaseFare_Icon?w=60&amp;sm=c&amp;scaleFit=poi&amp;poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}"/>
                            </div>
                        </div>
                        <div className="col-6 col-md-5 col-sm-6 row m-0 p-0">
                            <div className="col-sm-6 travel-period">
                                <span>Travel Period:</span>
                                <br/>
                                <span>01 Jan  - 31 Mar 2022</span>
                            </div>
                            <div className="col-sm-6 d-flex">
                                <div className="m-auto w-100">
                                    <a className="tool-tip">
                                        <img className="icon-seat-blue" src="https://cdn.media.amplience.net/i/cebupacificair/SeatSale_Tooltip_Modal_Icon?w=40&amp;sm=c&amp;scaleFit=poi&amp;poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}"/>
                                    </a>
                                    <button className="o-btn o-btn--primary-blue btn-book-now"> BOOK NOW </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                </div>
                <div>
                    <div className="container row">
                        <div className="col-6 col-md-7 col-sm-6 row m-0">
                            <div className="col-md-7 col-sm-6">
                                <img className="icon-flight-blue" src="https://cdn.media.amplience.net/i/cebupacificair/planeicon?w=15&amp;sm=c&amp;scaleFit=poi&amp;poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}"/>
                                <span>Manila to</span>
                                <br/>
                                <h5><strong>Macau</strong></h5>
                            </div>
                            <div className="col-md-5 col-sm-6">
                                <span>For as low as</span>
                                <br/>
                                <span class="seat-sale-fare">₱899.00</span>
                                <img src="https://cdn.media.amplience.net/i/cebupacificair/SeatSale_BaseFare_Icon?w=60&amp;sm=c&amp;scaleFit=poi&amp;poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}"/>
                            </div>
                        </div>
                        <div className="col-6 col-md-5 col-sm-6 row m-0 p-0">
                            <div className="col-sm-6 travel-period">
                                <span>Travel Period:</span>
                                <br/>
                                <span>01 Jan  - 31 Mar 2022</span>
                            </div>
                            <div className="col-sm-6 d-flex">
                                <div className="m-auto w-100">
                                    <a className="tool-tip">
                                        <img className="icon-seat-blue" src="https://cdn.media.amplience.net/i/cebupacificair/SeatSale_Tooltip_Modal_Icon?w=40&amp;sm=c&amp;scaleFit=poi&amp;poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}"/>
                                    </a>
                                    <button className="o-btn o-btn--primary-blue btn-book-now"> BOOK NOW </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
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
})(SeatSaleSection)