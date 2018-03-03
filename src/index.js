require('file-loader?name=[name].[ext]!./index.html');

import React from 'react';
import ReactDOM from 'react-dom';
import ReactRoot from './components/ReactRoot';

ReactDOM.render(
  <ReactRoot />,
  document.getElementById('reactRoot')
);