import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CommentBox from './CommentBox/CommentBox'
import './index.css';

import commentsData from '../src/data/commnetsData';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

ReactDOM.render(
  <CommentBox data={commentsData}/>,
  document.getElementById('content')
);
