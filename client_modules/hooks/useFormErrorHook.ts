
import { ActionMap, Reducer } from "../type";

interface FormActionType {
  type: `INIT_FORM_ERROR` | `EXIT_FORM_ERROR`
  payload?: string | undefined
}

type State = {
  isError: boolean;
  errorMessage: string | undefined;
}


export const INIT_FORM_ERROR: string = 'INIT_FORM_ERROR';
export const EXIT_FORM_ERROR: string = 'EXIT_FORM_ERROR';

export const initialFormErrorState = { isError: false, errorMessage: '' }

export const formErrorReducer: Reducer<State, FormActionType> = ( state, action ) => {

  switch( action.type ) {

    case INIT_FORM_ERROR:
      return { isError: true, errorMessage: action.payload }
    
    case EXIT_FORM_ERROR:
      return { isError: false, errorMessage: '' }

    default: return state
  }

}