import { useSelector } from "react-redux";

const ProfilePage = () => {
  const { user } = useSelector(state => state.user)

  return (
    <div>
      <h1>Profile Page</h1>
      {user ? (
        <div>
          <p>User: {user.firstName} {user.lastName}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>You are not logged in!</p>
      )}
    </div>
  );
};

export default ProfilePage;
