import { FetchingDataType, GistModel } from 'types';

export interface NotepadStateModel {
  detail: FetchingDataType<GistModel>;
}

export interface NoteNewModel {
  title: string;
  content: string;
}

export interface NotepadNewModel {
  description: string;
  files: any;
}
