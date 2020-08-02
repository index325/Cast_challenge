import React, { useState, useEffect } from "react";
import { Grid, Typography, Box, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button, Paper } from "@Components/UI";
import { useHistory } from "react-router-dom";
import api from "../../../service/api";
import { useDispatch } from "react-redux";
import { courseActions } from "Redux@Actions";

import {
  ValidatorForm,
  TextValidator,
  SelectValidator,
} from "react-material-ui-form-validator";

const useStyles = makeStyles((theme) => ({
  form: {
    padding: theme.spacing(2),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
  },
  input: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(1),
  },
  button: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(3),
  },
}));

export default function CreateCourse() {
  const classes = useStyles();

  const [description, setDescription] = useState("");
  const [dateBegin, setDateBegin] = useState("");
  const [dateFinish, setDateFinish] = useState("");
  const [quantityStudents, setQuantityStudents] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);

  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    var bodyFormData = new FormData();

    bodyFormData.set("description", description);
    bodyFormData.set("date_begin", dateBegin);
    bodyFormData.set("date_finish", dateFinish);
    bodyFormData.set("quantity_students", quantityStudents);
    bodyFormData.set("category_id", category);

    dispatch(courseActions.createCourse(bodyFormData));

    history.push('/app');
  };

  useEffect(() => {
    async function getCategories() {
      const response = await api.get("category");
      setCategories(response.data.categories);
    }
    getCategories();
  }, []);

  return (
    <React.Fragment>
      <Grid
        container
        display="flex"
        alignItems="center"
        justify="center"
      >
        <Grid item xs={12} sm={12} md={12} lg={10}>
          <Grid style={{ textAlign: "right" }}>
            <Button
              type="submit"
              variant="contained"
              className={classes.button}
              color="primary"
              label="Voltar"
              onClick={() => history.push("/app")}
            />
          </Grid>
          <Box mb={1}>
            <Paper>
              <Box textAlign="center" p={3}>
                <Typography
                  className={classes.header}
                  color="primary"
                  variant="h4"
                >
                  <span>Cadastro de cursos</span>
                </Typography>
              </Box>
              <ValidatorForm className={classes.form} onSubmit={handleSubmit}>
                <TextValidator
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  value={description}
                  className={classes.input}
                  name="description"
                  color="primary"
                  fullWidth
                  variant="standard"
                  label="Descrição do assunto"
                  validators={["required"]}
                  errorMessages={["Este campo é obrigatório"]}
                />
                <TextValidator
                  onChange={(e) => {
                    setDateBegin(e.target.value);
                  }}
                  value={dateBegin}
                  className={classes.input}
                  type="date"
                  name="dateBegin"
                  color="primary"
                  fullWidth
                  variant="standard"
                  label="Data de início"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  validators={["required"]}
                  errorMessages={["Este campo é obrigatório"]}
                />
                <TextValidator
                  onChange={(e) => {
                    setDateFinish(e.target.value);
                  }}
                  value={dateFinish}
                  className={classes.input}
                  type="date"
                  name="dateFinish"
                  color="primary"
                  fullWidth
                  variant="standard"
                  label="Data de término"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  validators={["required"]}
                  errorMessages={["Este campo é obrigatório"]}
                />
                <TextValidator
                  onChange={(e) => {
                    setQuantityStudents(e.target.value);
                  }}
                  value={quantityStudents}
                  className={classes.input}
                  type="number"
                  name="quantityStudents"
                  color="primary"
                  fullWidth
                  variant="standard"
                  label="Quantidade de alunos por turma"
                />
                <SelectValidator
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                  label="Categoria"
                  fullWidth
                  validators={["required"]}
                  value={category}
                  errorMessages={["Este campo é obrigatório"]}
                >
                  {categories.map((category) => (
                    <MenuItem value={category.id} key={category.id}>
                      {category.description}
                    </MenuItem>
                  ))}
                </SelectValidator>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  className={classes.button}
                  color="primary"
                  label="CADASTRAR"
                />
              </ValidatorForm>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
