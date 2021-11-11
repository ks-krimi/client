import Card from "./Card";

function UserList({ users }) {
  return (
    <>
      {users.map((user, index) => (
        <Card key={index} user={user} />
      ))}
    </>
  );
}

export default UserList;

/* import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_USERS } from "../../GraphQL/Queries";
import Form from "./Form";

function UserList() {
  const { error, loading, data } = useQuery(LOAD_USERS);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (data) {
      setUsers(data.users);
    }
    if (error) {
      console.log(error);
    }
  }, [data, error]);

  return (
    <>
      {loading ? (
        <span>Loading</span>
      ) : (
        <>
          <Form />
          {users.map((user, index) => (
            <React.Fragment key={index}>
              <>
                <p>
                  {user.nom} {user.prenom} =&gt; id: {user.id}
                </p>
                <p>{user.email}</p>
              </>
            </React.Fragment>
          ))}
        </>
      )}
    </>
  );
}

export default UserList;
 */
