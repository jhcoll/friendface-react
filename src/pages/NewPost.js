import AddPostForm from "../components/posts/AddPostForm.js";

function NewPostPage({ setRefreshPost, onCancel }) {
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
      setRefreshPost(true);
      onCancel();
    });
  }
  return (
    <div>
      <AddPostForm onAddPost={onAddPostHandler} onCancel={onCancel} />
    </div>
  );
}

export default NewPostPage;
