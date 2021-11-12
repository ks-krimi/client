import { IconButton, Tooltip } from "@material-ui/core";
import { ExitToApp } from "@material-ui/icons";
import axios from "axios";
import Cookies from "js-cookie";

const removeCookie = (key) => {
  if (window !== "undefined") {
    Cookies.remove(key, { expires: 1 });
  }
};

function Logout() {
  const logout = async () => {
    await axios({
      method: "GET",
      url: "http://localhost:8000/api/user/logout",
      withCredentials: true,
    })
      .then(() => removeCookie("jwt"))
      .catch((err) => console.log(err))
      .finally(() => {
        window.location = "/";
      });
  };

  return (
    <Tooltip title="Se déconnecter">
      <IconButton onClick={logout} aria-label="Se déconnecter">
        <ExitToApp style={{ color: "white" }} />
      </IconButton>
    </Tooltip>
  );
}

export default Logout;
