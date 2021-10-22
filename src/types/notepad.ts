import { FetchingDataType } from 'types';

export interface NotepadStateModel {
  detail: FetchingDataType<any>;
}

export interface NoteNewModel {
  title: string;
  note: string;
}

export interface NotepadNewModel {
  description: string;
  files: any;
}
