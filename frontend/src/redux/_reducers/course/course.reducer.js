import { courseConstants } from "../../_constants";

export function courseReducer(state = {}, action) {
  switch (action.type) {
    case courseConstants.CREATE_COURSE_REQUEST:
      return {
        _submittedCreate: true,
      };
    case courseConstants.CREATE_COURSE_SUCCESS:
      return {
        successCreateCourse: true,
      };
    case courseConstants.CREATE_COURSE_FAILURE:
      return {};
    case courseConstants.CREATE_COURSE_CLEAR:
      return {
        successCreateCourse: false,
      };
    case courseConstants.EDIT_COURSE_REQUEST:
      return {
        _submittedEdit: true,
      };
    case courseConstants.EDIT_COURSE_SUCCESS:
      return {
        successEditCourse: true,
      };
    case courseConstants.EDIT_COURSE_FAILURE:
      return {};
    case courseConstants.EDIT_COURSE_CLEAR:
      return {
        successEditCourse: false,
      };
    default:
      return state;
  }
}
