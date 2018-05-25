import React, { Component } from 'react';


class Test2 extends Component {
    render() {
        return (
            <h1>
                {this.constructor.name}
            </h1>
        );
    }
}

export default Test2;
