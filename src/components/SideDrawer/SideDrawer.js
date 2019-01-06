import React, { Component } from 'react'
import './SideDrawer.scss'
import { connect } from 'react-redux'
import { toggleDrawer } from '@ducks/SideDrawer'
import text from '@assets/text/SideDrawer'
import classBuilder from '@utility/classBuilder'

function mapStateToProps (state) {
    return { ...state.sideDrawer }
  }
  
function  mapDispatchToProps (dispatch) {
    return { 
        toggleDrawer: () => dispatch(toggleDrawer())
    }
}

@connect(mapStateToProps, mapDispatchToProps)
class SideDrawer extends Component {
    

    render() {
        let {isOpen} = this.props
        const classNames = classBuilder( 'side-drawer', { 'side-drawer--open': isOpen } )

         return (
            <div className={classNames}>
                <div className='side-drawer__clickoff-overlay'
                     onClick={this.props.toggleDrawer}
                />
                <div className='side-drawer__container' />
            </div>
        )
    }
}

export default SideDrawer