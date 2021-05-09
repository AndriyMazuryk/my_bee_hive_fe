import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const UserBlock = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <div>
      {user ? (
        <div>
          <div>
            {user.firstName} {user.lastName}
          </div>
          <Link to="/logout">Logout</Link>
        </div>
      ) : (
        <div>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </div>
      )}
    </div>
  );
};

export default UserBlock;
