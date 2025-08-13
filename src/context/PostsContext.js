import { createContext, useEffect, useState } from "react";

export const PostsContext = createContext();

const PostsProvider = ({children}) => {
  const [posts, setPosts] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const value = {
    state : {posts : posts},
    actions : {setPosts : setPosts},
    refetch : {
      isUpdate : isUpdate,
      setIsUpdate : setIsUpdate,
    },
    error : {
      error : error
    },
    loading : {
      loading : loading
    },
  };
  
  useEffect(() => {
    const getPost = async (dataUrl) => {
      const jsonPost = await fetch(dataUrl);
      const posts = await jsonPost.json();
      return posts;
    }

    getPost("https://jsonplaceholder.typicode.com/posts")
    .then((posts) => {
      setLoading(false);
      setPosts(posts);
    })
    .catch((error) => {
      setLoading(true);
      console.error(error);
    })
  }, []);



  return (
    <PostsContext value={value}>
      {children}
    </PostsContext>
  )
}

export default PostsProvider;