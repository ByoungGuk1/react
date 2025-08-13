import { useContext } from 'react';
import { PostsContext } from '../../../context/PostsContext';

const PostContextList = () => {
  const test = useContext(PostsContext);
  console.log(test);
  return (
    <div>
      
    </div>
  );
};

export default PostContextList;