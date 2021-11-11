import { Form as FForm, Formik } from "formik";
import { Typography, Grid, Divider } from "@material-ui/core";
import { useMutation } from "@apollo/client";
import { ADD_USER, UPDATE_USER } from "../../GraphQL/Mutations";
import { LOAD_USERS } from "../../GraphQL/Queries";
import Button from "../controlles/Button";
import TextField from "../controlles/TextField";
import { INITIAL_FORM_STATE, FORM_VALIDATION } from "./Validation";

function Form({ initialFormState, setIsOpen }) {
  const [addUser, { loading: loadingADD_USER, error: errorADD_USER }] =
    useMutation(ADD_USER, {
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
      },
    });

  const [updateUser, { loading, error }] = useMutation(UPDATE_USER);

  const handleSubmit = (value, helpers) => {
    if (initialFormState) {
      updateUser({
        variables: {
          id: initialFormState.id,
          nom: value.nom,
          prenom: value.prenom,
        },
        refetchQueries: [{ query: LOAD_USERS }],
      });
      if (loadingADD_USER || loading) {
        return <p>loading...</p>;
      }
      setIsOpen(false);
    } else {
      addUser({
        variables: {
          nom: value.nom,
          prenom: value.prenom,
          /* email: value.email,
          password: value.password, */
        },
      });
      if (loadingADD_USER || loading) {
        return <p>loading...</p>;
      }
      setIsOpen(false);
    }
    helpers.resetForm();
  };

  if (errorADD_USER || error) return <p>An error occured</p>;

  return (
    <>
      <div style={{ paddingBottom: 16 }}>
        <Typography variant="subtitle1">
          {initialFormState
            ? `Modification de ${initialFormState.nom}`
            : "Ajout d'un nouveau utilisateur"}
        </Typography>
        <Divider />
      </div>
      <Formik
        initialValues={{
          ...(initialFormState ? initialFormState : INITIAL_FORM_STATE),
        }}
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
            {/* <Grid item xs={12} sm={12}>
              <TextField required label="email" name="email" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                name="password"
                label="password"
                type="password"
              />
            </Grid> */}
            <Grid item xs={12} sm={12}>
              <Button variant="outlined">
                {initialFormState ? "Modifier" : "Ajouter"}
              </Button>
            </Grid>
          </Grid>
        </FForm>
      </Formik>
    </>
  );
}

export default Form;
