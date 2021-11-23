// import AddPostForm from "../components/posts/AddPostForm.js";
import PostList from "../components/posts/PostList.js";
import { useState, useEffect } from "react";

function FeedPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedPosts, setLoadedPosts] = useState([]);

  useEffect(()=>{
    setIsLoading(true);
    fetch("https://friendface-react-e85cf-default-rtdb.firebaseio.com/posts.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const posts = []

        for(const key in data){
          const post = {
            id: key,
            ...data[key]
          };

          posts.push(post)
        }
        setIsLoading(false);
        setLoadedPosts(posts);
      });
  }, [])


  if (isLoading) {
    return <p> Loading...</p>;
  }
  return (
    <div>
      <PostList posts={loadedPosts}></PostList>
    </div>
  );
}

export default FeedPage;
