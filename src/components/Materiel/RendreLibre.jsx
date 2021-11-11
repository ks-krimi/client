import { IconButton } from "@material-ui/core";
import { PersonAddDisabled } from "@material-ui/icons";
import { useMutation } from "@apollo/client";
import { RENDRE_LIBRE_MATERIEL } from "../../GraphQL/Mutations";

function RendreLibre(props) {
  const [updateMateriel, { loading, error }] = useMutation(
    RENDRE_LIBRE_MATERIEL
  );

  if (error) return <p>Error occured</p>;

  return (
    <>
      {loading ? (
        "loading..."
      ) : (
        <IconButton
          onClick={() =>
            updateMateriel({
              variables: {
                materielId: props.id,
                userId: null,
              },
            })
          }
        >
          <PersonAddDisabled />
        </IconButton>
      )}
    </>
  );
}

export default RendreLibre;
