import { createBrowserRouter } from "react-router-dom";
import MainContainer from "../pages/main/MainContainer";
import IntroContainer from "../pages/intro/IntroContainer";
import HobbyContainer from "../pages/hobby/HobbyContainer";
import PostListContainer from "../pages/post/list/PostListContainer";
import PostReadContainer from "../pages/post/read/PostReadContainer";
import Layout from "../pages/layout/Layout";
import NotFound from "../pages/notFound/NotFound";
import PostContainer from "../pages/post/PostContainer";
import PostContextList from "../pages/post/list/PostContextList";
import PostContextRead from "../pages/post/read/PostContextRead";
import SignUp from "../pages/signUp/SignUp";

const router = createBrowserRouter([
  {
    path : "/",
    element : <Layout />,
    children : [
      {
        path : "/",
        element : <MainContainer />,
      },
      {
        path : "/intro",
        element : <IntroContainer />,
      },
      {
        path : "/hobby",
        element : <HobbyContainer />,
        
        // url parameter
        children : [
          {
            path : "/hobby/:hobbies",
            element : <HobbyContainer />,
            children : [
              {
                // 중첩라우팅
                path : ":name",
                element : <HobbyContainer />,
              },
            ]
          }
        ],
      },
      {
        path : "/posts",
        element : <PostListContainer />,
      },
      {
        path : "/posts/read/:id",
        element : <PostReadContainer />,
      },
      {
        path : "/community",
        element : <PostContainer />,
        children : [
          {
            path : "/community",
            element : <PostContextList />
          },
          {
            path : "/community/read/:postId",
            element : <PostContextRead />
          }
        ]
      },
      {
        path : "*",
        element : <NotFound />
      }
    ]
  },
  // {
  //   path : "/intro",
  //   element : <IntroContainer />,
  // },
  // {
  //   path : "/hobby",
  //   element : <HobbyContainer />,
    
  //   // url parameter
  //   children : [
  //     {
  //       path : "/hobby/:hobbies",
  //       element : <HobbyContainer />,
  //       children : [
  //         {
  //           // 중첩라우팅
  //           path : ":name",
  //           element : <HobbyContainer />,
  //         },
  //       ]
  //     }
  //   ],
  // },
  // {
  //   path : "/posts",
  //   element : <PostListContainer />,
  // },
  // {
  //   path : "/posts/read/:id",
  //   element : <PostReadContainer />,
  // },
  {
    path : "/sign-up",
    element : <SignUp />
  },
  {
    path : "*",
    element : <NotFound />
  }
]);

export default router