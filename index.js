// import js files
//import notes from './components/notes';
// js templates for sidenav options
/*import { propertiesTemplate } from './components/properties.js';
import investors from './components/investors';
import matches from './components/matches';
import settings from './components/settings';
import feedback from './components/feedback';*/


const propertiesTemplate = `
  <h1>Properties Template</h1>
  <p>Description</p>
`;
const investorsTemplate = `
  <h1>Investors Template</h1>
  <p>Description</p>
`;
const matchesTemplate = `
  <h1>Matches Template</h1>
  <p>Description</p>
`;
const settingsTemplate = `
  <h1>Settings Template</h1>
  <p>Description</p>
`;
const feedbackTemplate = `
  <h1>Feedback Template</h1>
  <p>Description</p>
`;

// render function
const render = function (template) {
  document.getElementById('content').innerHTML = template;
}