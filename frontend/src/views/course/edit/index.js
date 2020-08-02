import React, { useState, useEffect } from "react";
import { Grid, Typography, Box, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button, Paper } from "@Components/UI";
import { useHistory, useParams } from "react-router-dom";
import api from "../../../service/api";
import {
  ValidatorForm,
  TextValidator,
  SelectValidator,
} from "react-material-ui-form-validator";
import { useDispatch } from "react-redux";
import { courseActions } from "Redux@Actions";

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

export default function EditCourse() {
  const classes = useStyles();

  const { id } = useParams();
  const dispatch = useDispatch();

  const [description, setDescription] = useState("");
  const [dateBegin, setDateBegin] = useState("");
  const [dateFinish, setDateFinish] = useState("");
  const [quantityStudents, setQuantityStudents] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);

  const history = useHistory();

  const handleSubmit = (e) => {
    var bodyFormData = new FormData();

    bodyFormData.set("description", description);
    bodyFormData.set("date_begin", dateBegin);
    bodyFormData.set("date_finish", dateFinish);
    bodyFormData.set("quantity_students", quantityStudents);
    bodyFormData.set("category_id", category);

    dispatch(courseActions.editCourse(bodyFormData, id));

    history.push('/app');
  };

  const formatDate = (date) => {
      console.log(date)
    const dateUnformatted = new Date(date);
    const year = new Intl.DateTimeFormat("en", { year: "numeric" }).format(
      dateUnformatted
    );
    const month = new Intl.DateTimeFormat("en", { month: "2-digit" }).format(
      dateUnformatted
    );
    const day = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(
      dateUnformatted
    );

    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    async function getCategories() {
      const response = await api.get("category");
      setCategories(response.data.categories);
    }
    async function getCourse() {
      const response = await api.get(`course/${id}`);

      setDescription(response.data.description);
      setDateBegin(formatDate(response.data.dateBegin));
      setDateFinish(formatDate(response.data.dateFinish));
      setQuantityStudents(response.data.quantityStudents);
      setCategory(response.data.category.id);
    }
    getCategories();
    getCourse();
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
