// imports
import newNoteItem from './note-item';

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
  const noteItem = newNoteItem(noteBody);

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