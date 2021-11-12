import { useEffect } from "react";
import { useContext } from "react";
import userContext from "./UserContext";
import { useHistory } from "react-router-dom";

function useAuth() {
  const history = useHistory();
  const connectedUser = useContext(userContext);

  useEffect(() => {
    if (connectedUser === null) {
      history.push("/auth");
    }
    if (connectedUser !== null && history.location.pathname === "/auth") {
      history.push("/");
    }
    console.log(connectedUser);
  }, [connectedUser, history]);
}

export default useAuth;
