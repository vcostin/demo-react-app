import React, {Component} from 'react';
import Comment from './Comment/Comment';

class CommentList extends Component {
  render() {
    const commentsNodes = this.props.data.map(comment => {
      return (
        <Comment author={comment.author} key={comment.id}>{comment.text}</Comment>
      );
    });

    return (
      <div className="commentList">
        {commentsNodes}
      </div>
    );
  }
}

export default CommentList;
