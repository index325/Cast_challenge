import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Typography, Box, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

import { PassField, TextField, Button, Paper } from "@Components/UI";
import { authActions } from "Redux@Actions";

// import { ReactComponent as Logo } from "../../assets/img/logo-cast.png";

const useStyles = makeStyles((theme) => ({
  form: {
    padding: theme.spacing(2),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
  },
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),
    paddingBottom: 0,
  },
  input: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(1),
  },
  button: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(3),
  },
  logo: {
    width: "80%",
  },
}));

export default function LoginPage() {
  const preventDefault = (event) => event.preventDefault();

  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loggedIn } = useSelector((state) => state.security.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authActions.Login({ username, password }));
  };

  useEffect(() => {
    if (loggedIn) {
      //Fez login
      history.push("/app");
    }
  }, [loggedIn]);

  return (
    <React.Fragment>
      <Box>
        <Box
          display="flex"
          borderRadius={16}
        >
          <Grid
            container
            alignItems="center"
            justify="center"
            flex="1"
            style={{ height: "100vh", textAlign: "center" }}
          >
            <Grid item xs={12} sm={12} md={12} lg={5}>
              <Paper>
                <Box textAlign="center" p={3}>
                  <img
                    src={require("../../assets/img/logo-cast.png")}
                    style={{ width: "80%" }}
                  />
                  <Typography
                    className={classes.header}
                    color="primary"
                    variant="h4"
                  >
                    <span>Cadastro de cursos</span>
                  </Typography>
                </Box>
                <form className={classes.form} onSubmit={handleSubmit}>
                  <TextField
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                    className={classes.input}
                    name="username"
                    color="primary"
                    fullWidth
                    variant="standard"
                    label="USUÁRIO"
                  />
                  <PassField
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    className={classes.input}
                    label="SENHA"
                    name="password"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    className={classes.button}
                    color="primary"
                    label="LOGIN"
                  />
                </form>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </React.Fragment>
  );
}
