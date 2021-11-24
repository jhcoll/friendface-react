function DeleteButton(props) {
  function deletePost() {
    fetch(
      `https://friendface-react-e85cf-default-rtdb.firebaseio.com/posts/${props.id}.json`,
      {
        method: "DELETE",
      }
    ).then(() => {
      props.setRefreshPost(true);
    });
  }

  return <button onClick={deletePost}>delete</button>;
}

export default DeleteButton;
