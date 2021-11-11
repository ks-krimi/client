import { useMutation } from "@apollo/client";
import { IconButton } from "@material-ui/core";
import { Delete as MDelete } from "@material-ui/icons";
import { DELETE_MATERIEL } from "../../GraphQL/Mutations";
import { LOAD_MATERIELS } from "../../GraphQL/Queries";

function Delete(props) {
  const [deleteMateriel, { loading, error }] = useMutation(DELETE_MATERIEL, {
    update(cache, { data }) {
      // add a new user to the existing array
      const deletedMaterielFromResponse = data?.deleteMateriel;
      const existingMateriel = cache.readQuery({ query: LOAD_MATERIELS });
      cache.writeQuery({
        query: LOAD_MATERIELS,
        data: {
          materiels: existingMateriel?.materiels.filter(
            (materiel) => materiel.id !== deletedMaterielFromResponse.id
          ),
        },
      });
    },
  });

  if (error) return <p>Error occured</p>;

  return (
    <>
      {loading ? (
        "loading..."
      ) : (
        <IconButton
          onClick={() =>
            deleteMateriel({
              variables: {
                materielId: props.id,
              },
            })
          }
        >
          <MDelete />
        </IconButton>
      )}
    </>
  );
}

export default Delete;
