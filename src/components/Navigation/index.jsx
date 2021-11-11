import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { Computer, Group, List as ListIcon, Menu } from "@material-ui/icons";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function Navigation() {
  const [open, setOpen] = useState(false);
  const history = useHistory();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setOpen(true)}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
            G. Materiels
          </Typography>
          <Button color="inherit">Déconnexion</Button>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <div style={{ width: 250 }}>
          <List>
            {[
              { name: "Materiels", path: "/" },
              { name: "Type de materiel", path: "detail" },
              { name: "Utilisateurs", path: "user" },
            ].map((array, index) => (
              <ListItem
                button
                key={array.name}
                onClick={() => {
                  history.push(array.path);
                  setOpen(false);
                }}
              >
                <ListItemIcon>
                  {index === 0 && <Computer />}
                  {index === 1 && <ListIcon />}
                  {index === 2 && <Group />}
                </ListItemIcon>
                <ListItemText primary={array.name} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </>
  );
}

export default Navigation;
