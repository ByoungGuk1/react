import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PostListContainer = () => {
  
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    const getPost = async (dataUrl) => {
      const jsonPost = await fetch(dataUrl);
      const posts = await jsonPost.json();
      return posts;
    }
    getPost("https://jsonplaceholder.typicode.com/posts")
      .then((posts) => posts.slice(0,30))
      .then(setPosts)
      .catch(console.error);
  }, []);

  const postList = posts.map(({id,title}, index) => {
    return (
    <li key={index}>
      <Link to={`/posts/read/${id}`}>{title}</Link>
    </li>
    )
  })

  return (
    <div>
      리스트 컨테이너
      <ol>
        {postList}
      </ol>
    </div>
  );
};

export default PostListContainer;