import { useRef, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router";

import { REGISTER } from "../graphql/mutations";

const RegisterPage = () => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const [createUser, { data }] = useMutation(REGISTER);

  const history = useHistory();

  useEffect(() => {
    // need validation
    // redirect even if all inputs are empty
    // (technically there are no mistakes),
    // because GraphQL server receive strings
    // (in our case empty strings)
    if (data) {
      console.log("reg:", data);
      if (data.register) {
        history.push("/login");
      }
    }
  }, [data]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // here we send createUser query (mutation in our case)
    // to GraphQL server
    await createUser({
      variables: {
        firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      },
    });

    // clear inputs
    firstNameRef.current.value = "";
    lastNameRef.current.value = "";
    emailRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <div>
      <h1>Register Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          ref={firstNameRef}
          type="text"
          name="firstName"
          placeholder="first name"
        />
        <input
          ref={lastNameRef}
          type="text"
          name="lastName"
          placeholder="last name"
        />
        <input ref={emailRef} type="email" name="email" placeholder="email" />
        <input
          ref={passwordRef}
          type="password"
          name="password"
          placeholder="password"
        />
        <button type="submit">register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
