import PostList from "../components/posts/PostList.js";
import { useState, useEffect } from "react";

function FeedPage(props) {
  const refreshPost = props.refreshPost;
  const [isLoading, setIsLoading] = useState(true);
  const [loadedPosts, setLoadedPosts] = useState([]);

  useEffect(() => {
    props.setRefreshPost(false);
    setIsLoading(true);
    fetch(
      "https://friendface-react-e85cf-default-rtdb.firebaseio.com/posts.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const posts = [];

        for (const key in data) {
          const post = {
            id: key,
            ...data[key],
          };

          posts.push(post);
        }
        setIsLoading(false);
        setLoadedPosts(posts);
      });
    // eslint-disable-next-line
  }, [refreshPost]);

  if (isLoading) {
    return <p> Loading...</p>;
  }
  return (
    <div>
      <PostList
        posts={loadedPosts}
        setRefreshPost={props.setRefreshPost}
      ></PostList>
    </div>
  );
}

export default FeedPage;
