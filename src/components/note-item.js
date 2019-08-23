// create new note item
const newNoteItem = function (noteBody) {
  const noteItem = document.createElement('div');
  noteItem.classList = 'note-item noselect';

  let noteLeft = document.createElement('div');
  noteLeft.classList = 'note-left';
  let noteRight = document.createElement('div');
  noteRight.classList = 'note-right';

  let newCheckbox = document.createElement('input');
  newCheckbox.type = 'checkbox';
  let newNote = document.createElement('p');
  newNote.textContent = noteBody;
  noteLeft.appendChild(newCheckbox);
  noteLeft.appendChild(newNote);

  let newDeleteBtn = document.createElement('span');
  newDeleteBtn.classList = 'btn btn-delete-note';
  newDeleteBtn.textContent = 'D';
  noteRight.appendChild(newDeleteBtn);

  noteItem.appendChild(noteLeft);
  noteItem.appendChild(noteRight);

  return noteItem;
}

export default newNoteItem;