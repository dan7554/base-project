import React, { Component } from 'react';
import $ from "jquery";
import '../styles/ReactRoot.scss';
import { connect } from 'react-redux';
import { updateWidth } from '../redux/ducks/Page';
import { Router, Switch, Route } from 'react-router'
import Login from './Login.js';

import Test1 from '../pages/Test1'
import Test2 from '../pages/Test2'

function mapStateToProps(state) {
    return { ...state.page };
}

function mapDispatchToProps(dispatch) {
    return {
        updateWidth: (value) => dispatch(updateWidth(value))
    };
}

@connect(mapStateToProps, mapDispatchToProps)
class ReactRoot extends Component {
    updatePageWidth = () => {
        const { updateWidth, page } = this.props;
        const newWidth = page.forcedWidth > 0 ? page.forcedWidth : $(window).width();

        if ( page.width !== newWidth ) {
            updateWidth(newWidth);
        }
    }
    componentWillMount() {
        window.addEventListener('resize', this.updatePageWidth);
        this.updatePageWidth();
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updatePageWidth);
    }
    render() {
        return (
            <Router history={this.props.history}>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route path="/test1" component={Test1} />
                    <Route path="/test2" component={Test2} />
                </Switch>
            </Router>
        );
    }
}

export default ReactRoot