import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'

import {
    getBlocks
} from '../../stores/actions'

// import all blocks - should be put in another class
import HeaderSimple from '../Blocks/Headers/HeaderSimple'
import FooterSimple from '../Blocks/Footers/FooterSimple'

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
