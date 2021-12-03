import { useState, useEffect } from "react";
import OrderPosts from "../components/posts/OrderPosts.js";

function FeedPage({
  setRefreshPost,
  refreshPost,
  errorText,
  setErrorText,
  idToken,
  userId,
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedPosts, setLoadedPosts] = useState([]);

  useEffect(() => {
    setRefreshPost(false);
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
      <OrderPosts
        posts={loadedPosts}
        errorText={errorText}
        setErrorText={setErrorText}
        idToken={idToken}
        userId={userId}
      ></OrderPosts>
    </div>
  );
}

export default FeedPage;
