import { useState } from "react";
import { MenuItem, IconButton, Menu } from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";
import { useMutation } from "@apollo/client";
import { DELETE_USER } from "../../GraphQL/Mutations";
import { LOAD_USERS } from "../../GraphQL/Queries";

function PopOver({ user }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const [deleteUser, { loading, error }] = useMutation(DELETE_USER, {
    update(cache, { data }) {
      const deletedUser = data?.deleteUser;
      const existingUsers = cache.readQuery({ query: LOAD_USERS });
      cache.writeQuery({
        query: LOAD_USERS,
        data: {
          users: existingUsers?.users.filter(
            (materiel) => materiel.id !== deletedUser.id
          ),
        },
      });
    },
  });

  if (error) return <p>Error occured</p>;

  const handleDelete = () => {
    deleteUser({
      variables: {
        userId: user.id,
      },
    });
  };

  return (
    <div style={{ position: "absolute", top: 4, right: 4 }}>
      <IconButton onClick={handleClick}>
        <MoreVert />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Modifier</MenuItem>
        <MenuItem disabled={user.materiels[0]} onClick={handleDelete}>
          {loading ? "loading..." : "Supprimer"}
        </MenuItem>
        <MenuItem disabled={!user.materiels[0]} onClick={handleClose}>
          Voir les materiels
        </MenuItem>
      </Menu>
    </div>
  );
}

export default PopOver;
