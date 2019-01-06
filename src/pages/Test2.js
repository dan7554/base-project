import React, { Component } from 'react'
import { connect } from 'react-redux'
import { forceWidth } from '../redux/ducks/Page'
import Login from '../components/Login/Login.js'

function mapStateToProps(state) {
    return { ...state.page }
}

function mapDispatchToProps(dispatch) {
    return {}
}

@connect(mapStateToProps, mapDispatchToProps)
class Test2 extends Component {
    render() {
        const {breakpoint} = this.props
        return (
            <div className={breakpoint}>
                <Login />
            </div>
        )
    }
}

export default Test2
