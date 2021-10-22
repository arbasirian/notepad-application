import { createSelector } from 'reselect';
import { NotepadStateModel } from 'types';

const selectNotepad = (state: any) => state.notepad;

export const detail = createSelector(
  [selectNotepad],
  (notepad: NotepadStateModel) => notepad?.detail
);
