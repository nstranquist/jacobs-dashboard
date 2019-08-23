// import js files
import './components/notes';
import render from './render.js'
// js templates for sidenav options
import propertiesTemplate from './templates/properties.js';
import investorsTemplate from './templates/investors';
import matchesTemplate from './templates/matches';
import settingsTemplate from './templates/settings';
import feedbackTemplate from './templates/feedback';

const actionLinks = document.getElementById('actions-list');
actionLinks.addEventListener('click', (e) => {
  switch (e.target.id) {
    case 'propertiesLink':
      render(propertiesTemplate);
      break;
    case 'investorsLink':
      render(investorsTemplate);
      break;
    case 'matchesLink':
      render(matchesTemplate);
      break;
    case 'settingsLink':
      render(settingsTemplate);
      break;
    case 'feedbackLink':
      render(feedbackTemplate);
      break;
    default:
      render(propertiesTemplate); // home page
      break;
  }
});
