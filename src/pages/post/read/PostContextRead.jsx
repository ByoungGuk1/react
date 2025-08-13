import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { PostsContext } from '../../../context/PostsContext';

const PostContextRead = () => {
  const {postId} = useParams();
  const {state, actions, error, loading, refetch} = useContext(PostsContext);
  
  const post = state.posts.find((post)=>post.id === Number(postId));

  if (!post){
    return console.error();
  }
  
  return (
    <div>
      <p>아이디: {post.id}</p>
      <p>제목: {post.title}</p>
      <p>내용: {post.body}</p>
    </div>
  );
};

export default PostContextRead;