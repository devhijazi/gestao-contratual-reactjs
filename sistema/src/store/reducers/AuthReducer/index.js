import { createReducer } from "reduxsauce";
import { Types } from "./actions";
import history from "../../../services/history";


const INITIAL_STATE ={
    token = null,
}

const logout = () => {
  history.push("/");
  return INITIAL_STATE;
};

export default createReducer(INITIAL_STATE,{
    [Types.signOut]:logout,
});