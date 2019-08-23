const newPropertyItem = (propertyName, propertyDescription) => {
  return `
    <div class="property-item">
      <h3>${propertyName}</h3>
      <p>${propertyDescription}</p>
      <a class="btn btn-view-property">View More</a>
    </div>`
}

export default newPropertyItem;