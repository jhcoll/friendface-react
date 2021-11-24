import AddPostForm from "../components/posts/AddPostForm.js";

function NewPostPage(props) {
  function onAddPostHandler(postData) {
    fetch(
      "https://friendface-react-e85cf-default-rtdb.firebaseio.com/posts.json",
      {
        method: "POST",
        body: JSON.stringify(postData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      props.setRefreshPost(true);
      props.onClick();
    });
  }
  return (
    <div>
      <AddPostForm onAddPost={onAddPostHandler} />
    </div>
  );
}

export default NewPostPage;
