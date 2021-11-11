import { Form as FForm, Formik } from "formik";
import { Typography, Grid } from "@material-ui/core";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../GraphQL/Mutations";
import { LOAD_USERS } from "../../GraphQL/Queries";
import Button from "../controlles/Button";
import TextField from "../controlles/TextField";
import { INITIAL_FORM_STATE, FORM_VALIDATION } from "./Validation";

function Form({ formState }) {
  const [addUser, { loading, error }] = useMutation(ADD_USER, {
    update(cache, { data }) {
      // add a new user to the existing array
      const newUserFromResponse = data?.addUser;
      const existingUsers = cache.readQuery({ query: LOAD_USERS });
      cache.writeQuery({
        query: LOAD_USERS,
        data: {
          users: [...existingUsers?.users, newUserFromResponse],
        },
      });
      console.log(newUserFromResponse);
    },
  });

  const handleSubmit = (value, helpers) => {
    addUser({
      variables: {
        nom: value.nom,
        prenom: value.prenom,
      },
    });
    helpers.resetForm();
  };

  if (loading) return <p>loading...</p>;
  if (error) return <p>An error occured</p>;

  return (
    <>
      <Typography variant="h6">Ajout d'un nouveau utilisateur</Typography>
      <Formik
        initialValues={{ ...INITIAL_FORM_STATE }}
        validationSchema={FORM_VALIDATION}
        onSubmit={handleSubmit}
      >
        <FForm autoComplete="off">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField required label="nom" name="nom" autoFocus />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField required label="prenom" name="prenom" />
            </Grid>
            <Grid item xs={12} sm={12}>
              <Button variant="outlined">Ajouter</Button>
            </Grid>
          </Grid>
        </FForm>
      </Formik>
    </>
  );
}

export default Form;
