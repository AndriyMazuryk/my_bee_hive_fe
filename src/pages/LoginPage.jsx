import { useRef, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { LOGIN } from "../graphql/mutations";
import { set_logged_user } from "../redux/actions/user";

const LoginPage = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const history = useHistory();

  const dispatch = useDispatch();

  const [login, { data }] = useMutation(LOGIN);

  useEffect(() => {
    // if login was successful
    // GraphQL returns data
    if (data) {
      const user = data.login;
      if (user) {

        // put user data to redux global state
        // and localStorage(inside redux)
        dispatch(set_logged_user(user));
        // redirect to home page
        history.push("/");
      }
    }
  }, [data]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // here we send login query (mutation in our case)
    // to GraphQL server
    await login({
      variables: {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      },
    });

    // clear inputs
    emailRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <input ref={emailRef} type="email" name="email" placeholder="email" />
        <input
          ref={passwordRef}
          type="password"
          name="password"
          placeholder="password"
        />
        <button type="submit">login</button>
      </form>
    </div>
  );
};

export default LoginPage;
