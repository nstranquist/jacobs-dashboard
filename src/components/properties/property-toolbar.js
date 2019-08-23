// consider making into static value
const propertyToolbar = (type) => {
  return `
    <article class="toolbar">
      <ul class="toolbar-left">
        <li class="toolbar-item" id="add-${type}"><i class="fa fa-plus"></i>Create</li>
        <li class="toolbar-item" id="edit-${type}"><i class="fa fa-pencil"></i>Edit</li>
        <li class="toolbar-item" id="delete-${type}"><i class="fa fa-trash"></i>Delete</li>
      </ul>
      <div class="toolbar-right">
        Filter: <select name="filter-${type}" id="filter-${type}">
          <option value="0">Name</option>
          <option value="1">Type</option>
          <option value="2">Price</option>
          <option value="3">Location</option>
        </select>
      </div>
    </article>`
}

export default propertyToolbar;