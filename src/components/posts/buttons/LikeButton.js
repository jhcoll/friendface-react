function LikeButton({ id, setLikeCount, likeCount }) {
  function likePost() {
    const data = { likes: likeCount + 1 };
    fetch(
      `https://friendface-react-e85cf-default-rtdb.firebaseio.com/posts/${id}.json`,
      {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      setLikeCount(likeCount + 1);
    });
  }

  return <button onClick={likePost}>like</button>;
}

export default LikeButton;
