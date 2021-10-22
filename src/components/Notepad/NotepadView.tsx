import React, { ChangeEvent, useEffect, useState } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { Input, Spin } from 'antd';

import { Box, Button, Flex, NoteForm, Text, Title2 } from 'components';
import { NoteNewModel } from 'types';
import { usePromise } from 'hooks';
import { notepadAction } from 'redux/actions';
import { notepadHelper, sharedHelper } from 'helpers';
import { notepadSelector } from 'redux/selectors';

import { NotepadTitle } from './notepad.styles';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

type Props = {
  onShowStats: () => void;
};
const NotepadView = ({ onShowStats }: Props) => {
  const promise = usePromise();
  const { data: notepadInfo, fetching: fetchingNotepad } = useSelector(
    notepadSelector.detail
  );
  const [notes, setNotes] = useState<NoteNewModel[]>(
    notepadInfo?.files ? notepadHelper.filesToNotes(notepadInfo.files) : []
  );
  const [fielderror, setFielderror] = useState<any>();
  const [actionLoading, setActionLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [notepadTitle, setNotepadTitle] = useState(
    notepadInfo?.description || ''
  );

  // Add new note localy
  const handleAddNote = async (note: NoteNewModel) => {
    if (
      notes.find(
        (noteItem) => noteItem.title.toLowerCase() === note.title.toLowerCase()
      )
    ) {
      setFielderror({ title: 'Title must be a unique' });
      throw TypeError('Title must be a unique');
    }
    setFielderror({});
    return await setNotes([...notes, note]);
  };

  // update note localy
  const handleUpdateNote = async (index: number, noteInfo: NoteNewModel) => {
    return await setNotes((prevItems) => {
      const newItems = [...prevItems];
      newItems.splice(index, 1, noteInfo);
      return newItems;
    });
  };

  // Create new notpad
  const handleCreateNewNotepad = () => {
    setActionLoading(true);
    promise(
      notepadAction.create({
        description: notepadTitle,
        files: sharedHelper.convertArrayToObject(notes, 'title'),
      })
    ).then((result: any) => {
      setActionLoading(false);
      result?.id && promise(notepadAction.load({ notepadId: result?.id }));
    });
  };

  // Update  notpad
  const handleUpdateNotepad = () => {
    setActionLoading(true);
    promise(
      notepadAction.update({
        notepadId: notepadInfo.id,
        notepad: {
          description: notepadTitle,
          files: sharedHelper.convertArrayToObject(notes, 'title'),
        },
      })
    )
      .then((result: any) => {
        result?.id && promise(notepadAction.load({ notepadId: result?.id }));
      })
      .catch((error) => console.log(error))
      .finally(() => setActionLoading(false));
  };

  // Delete notepad
  const handleDeleteNotepad = () => {
    if (!notepadInfo?.id) return;
    setDeleteLoading(true);
    promise(notepadAction.deleteNotepad({ notepadId: notepadInfo.id }))
      .then(() => {
        setNotepadTitle('');
        setNotes([]);
        promise(notepadAction.clearNotepad());
      })
      .catch((error) => console.log(error))
      .finally(() => setDeleteLoading(false));
  };

  // Delete note
  const handleDeleteNote = (title: string) => {
    if (notes.length === 1) return;
    setNotes(notes.filter((item) => item.title !== title));
  };

  useEffect(() => {
    notepadInfo?.id &&
      promise(notepadAction.load({ notepadId: notepadInfo?.id }));
  }, []);

  const actionButtonValidation = !!notepadTitle && notes.length > 0;
  return (
    <Spin spinning={!!(notepadInfo?.id && fetchingNotepad)} indicator={antIcon}>
      <Box position="relative">
        <Flex justifyContent="flex-end" flexGap="10px" flexWrap="wrap">
          <Button onClick={onShowStats}>View Stats</Button>
          {notepadInfo?.id ? (
            <Button
              loading={actionLoading}
              onClick={handleUpdateNotepad}
              type="blue"
              disabled={!actionButtonValidation}
            >
              Update Notepad
            </Button>
          ) : (
            <Button
              loading={actionLoading}
              onClick={handleCreateNewNotepad}
              type="blue"
              disabled={!actionButtonValidation}
            >
              Save Notepad
            </Button>
          )}

          {notepadInfo?.id && (
            <Button
              loading={deleteLoading}
              type="red"
              onClick={handleDeleteNotepad}
            >
              Delete
            </Button>
          )}
        </Flex>
        <Box maxWidth="500px">
          <Box marginBottom="30px">
            <Text>Notepad Title</Text>
            <NotepadTitle
              as={Input}
              value={notepadTitle}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setNotepadTitle(event.target.value)
              }
              placeholder="My notepad title ..."
            />
          </Box>

          <Box marginBottom="30px">
            <Title2>My Notes</Title2>
            <NoteForm
              onSubmit={handleAddNote}
              fielderror={fielderror}
              initialData={undefined}
            />
          </Box>
          {notes.length > 0 &&
            notes.map((noteItem, index) => (
              <Flex
                width="100%"
                flexGap="10px"
                key={noteItem?.title}
                alignItems="flex-start"
                marginBottom="20px"
              >
                <NoteForm
                  onSubmit={(data) => handleUpdateNote(index, data)}
                  fielderror={fielderror}
                  initialData={noteItem}
                />
                <Box marginTop="8px">
                  <Button
                    type="red"
                    disabled={notes.length === 1}
                    onClick={() => handleDeleteNote(noteItem.title)}
                  >
                    Delete
                  </Button>
                </Box>
              </Flex>
            ))}
        </Box>
      </Box>
    </Spin>
  );
};
export default NotepadView;
