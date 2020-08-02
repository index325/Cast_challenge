import axios from "axios";
import { courseConstants } from "Redux@Constants";
import { request, success, failure } from "Redux@Helpers";

export const courseActions = {
  createCourse,
  editCourse,
  deleteCourse,
};

//Login funcion
function createCourse(bodyFormData) {
  return (dispatch) => {
    dispatch(
      request(courseConstants.CREATE_COURSE_REQUEST, "", "Criando curso...")
    );
    axios({
      method: "post",
      url: "http://localhost:8000/course/new",
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        dispatch(
          success(
            courseConstants.CREATE_COURSE_SUCCESS,
            "",
            `Criado! O curso ${response.data.description} foi criado com sucesso!`
          )
        );
      })
      .catch(function (response) {
        dispatch(
          failure(courseConstants.CREATE_COURSE_FAILURE, response, {
            title: "Erro",
            msg: "Erro ao gravar o curso!",
          })
        );
      });
  };
}

function editCourse(bodyFormData, id) {
  return (dispatch) => {
    dispatch(
      request(courseConstants.EDIT_COURSE_REQUEST, "", "Editando curso...")
    );
    axios({
      method: "put",
      url: `http://localhost:8000/course/${id}/edit`,
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        dispatch(
          success(
            courseConstants.EDIT_COURSE_SUCCESS,
            "Sucesso!",
            `Editado! O curso ${response.description} foi criado com sucesso!`
          )
        );
      })
      .catch(function (response) {
        dispatch(
          failure(courseConstants.EDIT_COURSE_FAILURE, response, {
            title: "Erro",
            msg: "Erro ao editar o curso!",
          })
        );
      });
  };
}

function deleteCourse(description, id) {
  return (dispatch) => {
    dispatch(
      request(courseConstants.DELETE_COURSE_REQUEST, "", "Excluindo curso...")
    );
    axios({
      method: "delete",
      url: `http://localhost:8000/course/${id}`,
    })
      .then(function (response) {
        dispatch(
          success(
            courseConstants.DELETE_COURSE_SUCCESS,
            "Sucesso!",
            `O curso ${description} foi excluído com sucesso!`
          )
        );
      })
      .catch(function (response) {
        dispatch(
          failure(courseConstants.DELETE_COURSE_FAILURE, response, {
            title: "Erro",
            msg: "Erro ao deletar o curso!",
          })
        );
      });
  };
}
