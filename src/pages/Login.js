import Post from "../components/UI/Post";
import classes from "./Login.module.css";
import action from "../components/posts/buttons/Button.module.css";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import CreateLoginForm from "../components/login/CreateLogin";
import Backdrop from "../components/UI/Backdrop";

function LoginPage({ setShowError, setErrorText, setIdToken }) {
  const [showCreateLogin, setShowCreateLogin] = useState(false);
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();
  const emailRef = useRef();
  const passRef = useRef();
  let fireResp = false;

  function onSubmit(event) {
    event.preventDefault();

    const account = {
      email: emailRef.current.value,
      password: passRef.current.value,
      returnSecureToken: true,
    };

    fetch(
      "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=",
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

  function createLoginHandler() {
    setShowCreateLogin(!showCreateLogin);
  }
  return (
    <>
      <form className={classes.login} onSubmit={onSubmit}>
        <Post>
          <div className={classes.content}>
            <div className={classes.input}>
              <input required placeholder="Email" ref={emailRef}></input>
              <input required placeholder="Password" ref={passRef}></input>
            </div>
            {emailError !== "" && <p className={classes.error}>{emailError}</p>}
            <div className={action.actions}>
              <button>Login</button>
            </div>
          </div>
        </Post>
      </form>
      <div className={action.actions}>
        <div className={classes.create}>
          <button onClick={createLoginHandler}>Create Login</button>
        </div>
      </div>
      {showCreateLogin && (
        <>
          <CreateLoginForm
            setShowError={setShowError}
            setErrorText={setErrorText}
            setIdToken={setIdToken}
          />
          <Backdrop onClick={createLoginHandler} />
        </>
      )}
    </>
  );
}

export default LoginPage;
