import React, { Component } from 'react'
import './TitleBar.scss'
import { connect } from 'react-redux'
import { toggleDrawer } from '@ducks/SideDrawer'

function mapStateToProps (state) {
    return {}
  }
  
function  mapDispatchToProps (dispatch) {
    return { 
        toggleDrawer: () => dispatch(toggleDrawer())
    }
}

@connect(mapStateToProps, mapDispatchToProps)
class TitleBar extends Component {
    render() {
        let {title, subtitle, logo} = this.props
        return (
            <div className='title-bar'>
               <div className='title-bar__container'>
                    <span 
                        className='title-bar__hamburger material-icons'
                        onClick={this.props.toggleDrawer}
                    >
                        menu
                    </span>
                    { logo && 
                        <span className='title-bar__logo'>
                            <a href='/'><img src={logo} /></a>
                        </span>
                    }
                    { title && 
                        <span className='title-bar__title'>
                            <a href='/'>{title}</a>
                        </span>
                    }
                    { subtitle && 
                        <span className='title-bar__subtitle'>
                            {subtitle}
                        </span>
                    }
                </div>
            </div>
        )
    }
}

export default TitleBar