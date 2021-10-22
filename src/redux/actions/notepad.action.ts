import { NotepadNewModel } from 'types/notepad';
import ActionTypes from '../actionTypes';

export function load(params: { notepadId: string }) {
  return {
    type: ActionTypes.LOAD_NOTEPAD,
    params,
  };
}

export function create(data: NotepadNewModel) {
  return {
    type: ActionTypes.CREATE_NOTEPAD,
    data,
  };
}

export function update(data: { notepadId: string; notepad: NotepadNewModel }) {
  return {
    type: ActionTypes.UPDATE_NOTEPAD,
    data,
  };
}

export function deleteNotepad(params: { notepadId: string }) {
  return {
    type: ActionTypes.DELETE_NOTEPAD,
    params,
  };
}

export function clearNotepad() {
  return {
    type: ActionTypes.CLEAR_NOTEPAD,
  };
}
