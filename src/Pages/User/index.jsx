import { useQuery } from "@apollo/client";
import { LOAD_USERS } from "../../GraphQL/Queries";
import Add from "../../components/User/Add";
import UserList from "../../components/User/UserList";

function User() {
  const { error, loading, data } = useQuery(LOAD_USERS);

  return (
    <div
      style={{
        paddingTop: 24,
        position: "relative",
        height: "inherit",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 8,
          padding: "24px 0",
          flexWrap: "wrap",
        }}
      >
        {loading ? (
          <p>loading...</p>
        ) : error ? (
          <p>An error occured</p>
        ) : (
          <UserList users={data.users} />
        )}
        <Add />
      </div>
    </div>
  );
}

export default User;
