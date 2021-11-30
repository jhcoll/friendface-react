function LikeHandler(
  {id, setLikeCount, likeCount }
) {
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
  );
  setLikeCount(likeCount + 1);
}

function DeletePost(
  
  {id, setPostDelete,
  setShowDeleteAlert}
) {
  fetch(
    `https://friendface-react-e85cf-default-rtdb.firebaseio.com/posts/${id}.json`,
    {
      method: "DELETE",
    }
  ).then(() => {
    setShowDeleteAlert(false);
    setPostDelete(false);
  });
}

export { LikeHandler, DeletePost };
