import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";

import { GET_ALL_USERS } from "../graphql/queries";

const AllUsersList = () => {
  const { error, loading, data } = useQuery(GET_ALL_USERS);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (data) {
      setUsers(data.getAllUsers);
    }
  }, [data]);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <ul>
      {console.log(users)}
      {users.map((user) => (
        <li key={user.id + user.email}>
          ID: {user.id} | First Name: {user.firstName} | Last Name: {user.lastName} | Email: {user.email} | Password: {user.password}
        </li>
      ))}
    </ul>
  );
};

export default AllUsersList;
