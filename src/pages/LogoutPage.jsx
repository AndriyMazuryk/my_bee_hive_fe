import { useMutation } from "@apollo/client";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";

import { LOGOUT } from "../graphql/mutations";
import { unset_logged_user } from "../redux/actions/user";

const LogoutPage = () => {
  const [logout, { data }] = useMutation(LOGOUT);
  const history = useHistory();
  const dispatch = useDispatch();

  const logOut = async () => {
    const response = await logout();
    console.log("Response:", response.data.logout);
    if (response.data.logout) {
      dispatch(unset_logged_user);
      history.push("/login");
    }
  };

  const goBack = () => {
    history.goBack();
  };

  return (
    <div>
      <h3>Do you really want to log out?</h3>
      <button onClick={logOut}>Yes</button>
      <button onClick={goBack}>No</button>
    </div>
  );
};

export default LogoutPage;
