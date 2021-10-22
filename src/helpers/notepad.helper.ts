import { GistModel, NoteNewModel } from 'types';

/**
 * Function that return list of notes base on gist files
 * @param { GistModel['files'] } files - gists files
 * @returns {NoteNewModel[]}
 */

const filesToNotes = (files: GistModel['files']): NoteNewModel[] => {
  const notes: NoteNewModel[] = [];
  Object.keys(files).map((key) =>
    notes.push({ title: key, content: files[key].content })
  );
  return notes;
};

export default { filesToNotes };
