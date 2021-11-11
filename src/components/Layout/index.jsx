import { Container, CssBaseline } from "@material-ui/core";
import Navigation from "../Navigation";

function Layout({ children }) {
  return (
    <div
      style={{
        backgroundColor: "#f1f1f1",
        height: "100vh",
        overflowY: "auto",
      }}
    >
      <Navigation />
      <div
        style={{
          height: "calc(100vh - 64px)",
          overflow: "auto",
        }}
      >
        <Container
          component="main"
          style={{
            height: "inherit",
          }}
        >
          {children}
        </Container>
      </div>
      <CssBaseline />
    </div>
  );
}

export default Layout;
