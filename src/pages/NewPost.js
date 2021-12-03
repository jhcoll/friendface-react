import AddPostForm from "../components/posts/AddPostForm.js";

function NewPostPage({
  setRefreshPost,
  onCancel,
  setShowError,
  setErrorText,
  idToken,
  userId,
}) {
  function onAddPostHandler(postData) {
    fetch(
      `https://friendface-react-e85cf-default-rtdb.firebaseio.com/posts.json?auth=${idToken}`,
      {
        method: "POST",
        body: JSON.stringify(postData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((response) => {
      if (response.status === 200) {
        setRefreshPost(true);
        onCancel();
      } else {
        setErrorText("Unauthorised Access");
        setShowError(true);
      }
    });
  }
  return (
    <div>
      <AddPostForm
        onAddPost={onAddPostHandler}
        onCancel={onCancel}
        setShowError={setShowError}
        setErrorText={setErrorText}
        userId={userId}
      />
    </div>
  );
}

export default NewPostPage;
