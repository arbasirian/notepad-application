import React, { useState } from 'react';

import { Box, Button, Flex, NoteForm, NotepadForm, Title2 } from 'components';
import { NoteNewModel } from 'types';
import { usePromise } from 'hooks';
import { notepadAction } from 'redux/actions';
import { sharedHelper } from 'helpers';

type Props = {
  onShowStats: () => void;
};
const NotepadView = ({ onShowStats }: Props) => {
  const promise = usePromise();

  const [notes, setNotes] = useState<NoteNewModel[]>([]);
  const [fielderror, setFielderror] = useState<any>();
  const [notepadTitle, setNotepadTitle] = useState<string>('');

  const handleAddNote = async (note: NoteNewModel) => {
    if (
      notes.find(
        (noteItem) => noteItem.title.toLowerCase() === note.title.toLowerCase()
      )
    ) {
      setFielderror({ title: 'Title must be a unique' });
      throw TypeError('Title must be a unique');
    }
    return await setNotes([...notes, note]);
  };
  const handleUpdateNote = async (index: number, noteInfo: NoteNewModel) => {
    return await setNotes((prevItems) => {
      const newItems = [...prevItems];
      newItems.splice(index, 1, noteInfo);
      return newItems;
    });
  };
  const handleCreateNewNotepad = () => {
    promise(
      notepadAction.create({
        description: notepadTitle,
        files: sharedHelper.convertArrayToObject(notes, 'title'),
      })
    ).then(
      (result: any) =>
        result?.id && promise(notepadAction.load({ notepadId: result?.id }))
    );
  };
  const handleDeleteNotepad = () => {};
  return (
    <Box position="relative">
      <Flex justifyContent="flex-end" flexGap="10px" flexWrap="wrap">
        <Button onClick={onShowStats}>View Stats</Button>
        <Button onClick={handleCreateNewNotepad} type="blue">
          Save
        </Button>
        <Button type="red" onClick={handleDeleteNotepad}>
          Delete
        </Button>
      </Flex>
      <Box maxWidth="500px">
        <NotepadForm onChange={setNotepadTitle} initialvalue={notepadTitle} />
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
                  onClick={() =>
                    setNotes(
                      notes.filter((item) => item.title !== noteItem.title)
                    )
                  }
                >
                  Delete
                </Button>
              </Box>
            </Flex>
          ))}
      </Box>
    </Box>
  );
};

export default NotepadView;
