import Login from "../../components/Auth/Login";
import useAuth from "../../hooks/useAuth";

function Auth() {
  useAuth();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        height: "100vh",
      }}
    >
      <Login />
    </div>
  );
}

export default Auth;
