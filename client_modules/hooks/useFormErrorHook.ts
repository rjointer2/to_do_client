
import { ActionMap, Reducer } from "../types";

interface FormActionType {
  type: `INIT_FORM_ERROR` | `EXIT_FORM_ERROR`
  payload?: string | undefined
}

type State = {
  isError: boolean;
  errorMessage: string | undefined | unknown;
}


const INIT_FORM_ERROR: string = 'INIT_FORM_ERROR';
const EXIT_FORM_ERROR: string = 'EXIT_FORM_ERROR';

export const initialFormErrorState = { isError: false, errorMessage: '' }

export const formErrorReducer: Reducer<State, FormActionType> = ( state, action ) => {
  switch( action.type ) {
    case INIT_FORM_ERROR:
      return { isError: true, errorMessage: action.payload }
    
    case "EXIT_FORM_ERROR":
      return { isError: false, errorMessage: '' }

    default: return state
  }

}