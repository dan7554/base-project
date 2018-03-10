import React, { Component } from 'react';
import '../styles/ReactRoot.scss';
import Login from './Login.js';

class ReactRoot extends Component  {
    render(){
        return (
            <div>
                {this.renderHeader()}
                {this.renderContent()}
                {this.renderFooter()}
            </div>
        )
    }   
    renderHeader() {
        return <h1></h1>;
    }
    renderContent() {
        return <Login store={this.props.store}/>;
    }
    renderFooter() {
        return <h1></h1>;
    }
}

export default ReactRoot