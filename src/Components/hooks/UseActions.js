import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import * as Actions from "../../store/AuthorizationActions";
export { useDispatch } from "react-redux";

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(Actions, dispatch);
};
