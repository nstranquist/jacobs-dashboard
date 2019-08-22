// get DOM variables
const notesContainer = document.getElementById('notes-container');
const addNoteBtn = document.getElementById('btn-add-note');

// event listeners
addNoteBtn.addEventListener('click', () => {
  // get data from inside input
  const noteBody = document.getElementById('note-body').value;
  addNote(noteBody);
})
notesContainer.addEventListener('click', (e) => {
  switch (e.target.localName) {
    case 'input':
      toggleNote(
        e.target.parentNode.childNodes.item(1), //pNode only
      );
      break;
    case 'p':
      console.log(e.target.parentNode.childNodes);
      toggleNote(
        e.target.parentNode.childNodes.item(1), // pNode
        e.target.parentNode.childNodes.item(0), // inputNode
      );
      break;
    case 'span':
      deleteNote(e.target.parentElement.parentElement);
      break;
  }
});



// add note
function addNote(noteBody) {
  console.log('add note');

  // create new note item
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

  // add new noteItem object to notes container
  notesContainer.appendChild(noteItem);
}

function toggleNote(pNode, inputNode = null) {
  // cross out text and check box
  pNode.classList.toggle('checked');
  if (inputNode)
    inputNode.checked ^= 1;
}

function deleteNote(parentNode) {
  console.log('delete note');
  parentNode.style.display = 'none';
  //parentNode.removeChild(1);
}