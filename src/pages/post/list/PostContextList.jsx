import { useContext } from 'react';
import { PostsContext } from '../../../context/PostsContext';
import { Link } from 'react-router-dom';

const PostContextList = () => {
  const {state, actions, error, loading, refetch} = useContext(PostsContext);

  const postList = state.posts && state.posts.map(({id, title},i) => (
    <li key={i}>
      <Link to={`/community/read/${id}`}>{title}</Link>
    </li>
  ))

  return (
    <ul>
      {postList}
    </ul>
  );
};

export default PostContextList;