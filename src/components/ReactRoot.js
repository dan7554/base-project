import React, { Component } from 'react';
import '../styles/ReactRoot.scss';

class ReactRoot extends Component  {
    render(){
        return (
            <body>
                {this.renderHeader()}
                {this.renderContent()}
                {this.renderFooter()}
            </body>
        )
    }   
    renderHeader() {
        return <h1>Header</h1>;
    }
    renderContent() {
        return <h1>Content</h1>;
    }
    renderFooter() {
        return <h1>Footer</h1>;
    }
}

export default ReactRoot