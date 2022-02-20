import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "../../Firebase";
import { signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/action";

const Login = () => {
  const dispatch = useDispatch();
  const signIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      dispatch(addUser(result.user));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png"
          alt=""
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/1280px-Facebook_Logo.png"
          alt=""
        />
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
};

export default Login;
