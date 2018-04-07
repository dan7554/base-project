import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { forceWidth } from '../redux/ducks/Page';
import '../styles/DevbarWrapper.scss';

function mapStateToProps(state) {
    return { ...state.page };
}

function mapDispatchToProps(dispatch) {
    return {
        forceWidth: (value) => dispatch(forceWidth(value))
    };
}

@connect(mapStateToProps, mapDispatchToProps)
class DevbarWrapper extends Component  {
    constructor(props) {
        super(props);
        if (Config.devbar.enabled) {
            this.setDefaultBreakpoint();
        }
            
    }
    
    setDefaultBreakpoint = () => {
        const { forceWidth } = this.props;
        let frameWidth = '100%';
        if (!Config.devbar.defaultBreakpoint) {
            console.error('Default breakpoint undefined', Config);
        } else if (Object.keys(Config.breakpoints).includes(Config.devbar.defaultBreakpoint)) {
            frameWidth = Config.breakpoints[Config.devbar.defaultBreakpoint].max;
        } else {
            console.error('Default breakpoint doesnt exist.',Config.devbar.defaultBreakpoint,Object.keys(Config.breakpoints));
        }
        forceWidth(frameWidth);
    }

    componentDidMount() {
        if (Config.devbar.enabled) {
            let frameBody = ReactDOM.findDOMNode(this.refs.frame).contentDocument.body,
                el = document.createElement('div');
                frameBody.appendChild(el);
            this.el = el;
            this.updateIFrameContents();
        }
    }

    componentDidUpdate() {
        if (Config.devbar.enabled) {
            this.updateIFrameContents();
        }
    }

    updateIFrameContents() {
        ReactDOM.render((
            this.props.children
        ), this.el);

        var parentStyleSheets = parent.document.styleSheets;
        var cssString = "";
        for (var i = 0, count = parentStyleSheets.length; i < count; ++i) {
            if (parentStyleSheets[i].cssRules) {
                var cssRules = parentStyleSheets[i].cssRules;
                for (var j = 0, countJ = cssRules.length; j < countJ; ++j)
                    cssString += cssRules[j].cssText;
            }
            else
                cssString += parentStyleSheets[i].cssText;  // IE8 and earlier
        }
        var style = document.createElement("style");
        style.type = "text/css";
        try {
            style.innerHTML = cssString;
        }
        catch (ex) {
            style.styleSheet.cssText = cssString;  // IE8 and earlier
        }
        ReactDOM.findDOMNode(this.refs.frame).contentDocument.getElementsByTagName("head")[0].appendChild(style);
    }
    
    onBreakClick = (label, index) => {
        const { forceWidth } = this.props;
        const lastBreakpoint = index + 1 === Config.breakpoints.length;
        const frameWidth = lastBreakpoint ? '100%' : Config.breakpoints[label].max;
        forceWidth(frameWidth);
    }

    render(){
        if (!Config.devbar.enabled) {
            return this.props.children;
        }

        const breakLabels = Object.keys(Config.breakpoints);
        const { page } = this.props;
        return (
            <div className='devbar-wrapper' >
                <span className='current-breakpoint'> {page.breakpoint} </span>
                <div className='breakpoints'>
                    {breakLabels.map((label, index) => {
                        const width = Config.breakpoints[label].max - Config.breakpoints[label].min;
                        const left = Config.breakpoints[label].min;
                        return (
                            <button 
                                style={{width, left}} 
                                onClick={this.onBreakClick.bind(this,label, index)} 
                                key={'break'+index}
                            > 
                                {label} 
                            </button>
                        );
                    })}
                </div>
                <iframe style={{ width: page.forcedWidth + 'px' }} ref='frame' />
            </div>
        )
    }   
}

export default DevbarWrapper;