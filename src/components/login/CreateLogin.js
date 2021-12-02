import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import action from "../posts/buttons/Button.module.css";
import Post from "../UI/Post";
import classes from "./CreateLogin.module.css";

function CreateLoginForm({ setShowError, setErrorText, setIdToken }) {
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();
  const emailRef = useRef();
  const passRef = useRef();
  let fireResp = false;
  function submitHandler(event) {
    event.preventDefault();

    const account = {
      email: emailRef.current.value,
      password: passRef.current.value,
      returnSecureToken: true,
    };

    createAccount(account);
  }

  function createAccount(account) {
    fetch(
      "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=",
      {
        method: "POST",
        body: JSON.stringify(account),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        if (response.status === 200) {
          fireResp = true;
        } else {
          fireResp = false;
        }
        return response.json();
      })
      .then((data) => {
        if (fireResp === true) {
          setIdToken(data.idToken);
          navigate("/feed");
        } else {
          setEmailError(data.error.message);
        }
      });
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Post>
        <h3>Create Account</h3>
        <div className={classes.content}>
          <input placeholder="Email" ref={emailRef} />
          <input placeholder="Password" ref={passRef} />
        </div>
        {emailError !== "" && <p className={classes.error}>{emailError}</p>}
        <div className={action.actions}>
          <div className={classes.actions}>
            <button>Create Account</button>
          </div>
        </div>
      </Post>
    </form>
  );
}

export default CreateLoginForm;
