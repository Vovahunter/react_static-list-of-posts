import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="CommentList">
    {comments.map(comment => (
      <CommentInfo key={comment.id} comment={comment} />
    ))}

  </ul>
);
