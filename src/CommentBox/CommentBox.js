import React, {Component} from 'react';
import CommentList from './CommentList/CommnetList';
import CommentForm from './CommentForm/CommnetForm';

class CommentBox extends Component {
  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.props.data} />
        <CommentForm />
      </div>
    );
  }
}

export default CommentBox;
