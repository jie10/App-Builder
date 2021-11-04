import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'

import {
    getBlocks
} from '../../stores/actions'

// import all blocks - should be put in another class
import HeaderSimple from '../Blocks/Headers/HeaderSimple'
import FooterSimple from '../Blocks/Footers/FooterSimple'
import SectionOne from '../Blocks/Sections/SectionOne'
import SectionTwoLeft from '../Blocks/Sections/SectionTwoLeft'
import SectionTwoRight from '../Blocks/Sections/SectionTwoRight'
import ImageSection from '../Blocks/Sections/Image'
import Breadcrumbs from '../Blocks/Breadcrumbs/BreadcrumbsSimple'
import GuideBanner from '../Blocks/Banner/GuideBanner'
import Cards from '../Blocks/Cards/Cards'
import Accordion from '../Blocks/Sections/Accordion'
import BlockSeperator from '../Blocks/BlockSeperator/BlockSeperator'
import Sidebar from '../Blocks/Sidebar/Sidebar'

class Canvas extends Component {
    constructor(props){
        super(props)
    }

    async componentDidMount() {
        this.props.getBlocks()
    }

    render() {
        const { blocks } = this.props
        return(
            <Fragment>
                <div style={{padding: '4em'}}>
                { blocks && Object.keys(blocks).map(key => {
                    var block = blocks[key]
                    switch(block.type){
                        case 'HEADER':
                            return <HeaderSimple key={key} _id={key} block={block} />
                        case 'SECTION_SSO':
                            return <div key={key}>SECTION SSO</div>
                        case 'SECTION_CARDS':
                            return <div key={key}>SECTION CARDS</div>
                        case 'SECTION_ONE':
                            return <SectionOne key={key} _id={key} block={block} />
                        case 'SECTION_TWO_LEFT':
                            return <SectionTwoLeft key={key} _id={key} block={block} />   
                        case 'SECTION_TWO_RIGHT':
                            return <SectionTwoRight key={key} _id={key} block={block} />
                        case 'IMAGE_SECTION':
                            return <ImageSection key={key} _id={key} block={block} />  
                        case 'BREADCRUMBS':
                            return <Breadcrumbs key={key} _id={key} block={block} /> 
                        case 'GUIDE_BANNER':
                            return <GuideBanner key={key} _id={key} block={block} />
                        case 'CARDS':
                            return <Cards key={key} _id={key} block={block} />   
                        case 'ACCORDION':
                            return <Accordion key={key} _id={key} block={block} />     
                        case 'BLOCKSEPERATOR':
                            return <BlockSeperator key={key} _id={key} block={block} />
                        case 'SIDEBAR':
                            return <Sidebar key={key} _id={key} block={block} /> 
                        case 'FOOTER':
                            return <FooterSimple key={key} _id={key} block={block} />
                        default:
                            return <div key={key}>DEFAULT</div>
                    }
                })}
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        blocks: state.blocks
    }
}

export default connect(mapStateToProps, {getBlocks})(Canvas)
