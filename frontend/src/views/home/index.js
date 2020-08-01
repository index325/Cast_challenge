import React, { useEffect, useState, forwardRef } from "react";

import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@Components/UI";
import api from "../../service/api";
import MaterialTable from "material-table";
import AddBox from "@material-ui/icons/AddBox";
import { useHistory } from "react-router-dom";

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
};

const useStyles = makeStyles((theme) => ({
  text: {
    margin: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
  },
}));
export default function Home() {
  const classes = useStyles();
  const [courses, setCourses] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function getCourses() {
      const response = await api.get("/course");

      setCourses(response.data.courses);
      console.log(response.data.courses);
    }
    getCourses();
  }, []);

  return (
    <>
      <Grid
        container
        alignItems="center"
        justify="center"
        style={{ height: "100%", textAlign: "center" }}
      >
        <Grid item xs={10} sm={10} md={10} lg={10}>
          <Typography variant="h2" className={classes.text}>
            Olá!
          </Typography>
          <Paper className={classes.paper}>
            <MaterialTable
              icons={tableIcons}
              columns={[
                { title: "Descrição", field: "description" },
                { title: "Data de início ", field: "dateBegin", type: "date" },
                {
                  title: "Data de término ",
                  field: "dateFinish",
                  type: "date",
                },
                {
                  title: "Quantidade de alunos por turma",
                  field: "quantityStudents",
                },
                {
                  title: "Categoria",
                  field: "category.description",
                },
              ]}
              data={courses}
              title="Cursos cadastrados"
              actions={[
                {
                  icon: "add",
                  tooltip: "Adicionar um novo curso",
                  isFreeAction: true,
                  onClick: () => history.push("app/course/new"),
                },
              ]}
            />
          </Paper>
          <Typography variant="body1" className={classes.text} color="primary">
            Feito com ❤ por{" "}
            <a
              href="https://github.com/index325"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              Gabriel Orlando
            </a>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
