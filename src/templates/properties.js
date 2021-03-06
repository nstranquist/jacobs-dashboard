//imports
import headerContent from '../components/content-header';
import propertyToolbar from '../components/properties/property-toolbar';
import newPropertyItem from '../components/properties/property-item';

// template
const propertiesTemplate = `
  ${headerContent('Your Properties')}
  ${propertyToolbar('property')}
  <article class="properties-grid">
    ${newPropertyItem('NewPropName', 'Here is some descriptive text to describe this wonderful dare I say magnificent property')}
    ${newPropertyItem('PropName', 'Here is some descriptive text to describe this wonderful dare I say magnificent property')}
    ${newPropertyItem('NewPropName', 'Here is some descriptive text to describe this wonderful dare I say magnificent property')}
    ${newPropertyItem('PropName', 'Here is some descriptive text to describe this wonderful dare I say magnificent property')}
    ${newPropertyItem('NewPropName', 'Here is some descriptive text to describe this wonderful dare I say magnificent property')}
    ${newPropertyItem('PropName', 'Here is some descriptive text to describe this wonderful dare I say magnificent property')}
    ${newPropertyItem('NewPropName', 'Here is some descriptive text to describe this wonderful dare I say magnificent property')}
    ${newPropertyItem('PropName', 'Here is some descriptive text to describe this wonderful dare I say magnificent property')}
    ${newPropertyItem('NewPropName', 'Here is some descriptive text to describe this wonderful dare I say magnificent property')}
    ${newPropertyItem('PropName', 'Here is some descriptive text to describe this wonderful dare I say magnificent property')}
    ${newPropertyItem('NewPropName', 'Here is some descriptive text to describe this wonderful dare I say magnificent property')}
    ${newPropertyItem('PropName', 'Here is some descriptive text to describe this wonderful dare I say magnificent property')}
    ${newPropertyItem('NewPropName', 'Here is some descriptive text to describe this wonderful dare I say magnificent property')}
    ${newPropertyItem('PropName', 'Here is some descriptive text to describe this wonderful dare I say magnificent property')}
  </article>
`;

export default propertiesTemplate;

// for now, this is done on 'onclick' at <a> element
//render(action1Template);