import { IconButton } from "@material-ui/core";
import { PersonAddDisabled, Delete } from "@material-ui/icons";
import { useMutation } from "@apollo/client";
import { RENDRE_LIBRE_MATERIEL } from "../../GraphQL/Mutations";
import React from "react";

function RendreLibre(props) {
  const [updateMateriel, { loading, error }] = useMutation(
    RENDRE_LIBRE_MATERIEL
  );

  if (error) return <p>Error occured</p>;

  return (
    <React.Fragment>
      {loading ? (
        <span style={props.style}>loading...</span>
      ) : (
        <IconButton
          style={props.style}
          onClick={() =>
            updateMateriel({
              variables: {
                materielId: props.id,
                userId: null,
              },
            })
          }
        >
          {props.ilikedeleteicon ? <Delete /> : <PersonAddDisabled />}
        </IconButton>
      )}
    </React.Fragment>
  );
}

export default RendreLibre;
