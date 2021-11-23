import AddPostForm from "../components/posts/AddPostForm.js";
import { useNavigate } from "react-router-dom";

function NewPostPage(props) {
  const navigate = useNavigate();

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
        navigate("/", { replace: true });
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
