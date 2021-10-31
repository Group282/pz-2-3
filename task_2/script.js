function initButtonGroup(parentId) {
  var buttonGroup = document.getElementById(parentId),
    i = 0,
    len = buttonGroup.childNodes.length,
    button;
  handleButtonGroupClick = initClickHandler(parentId);

  for (; i < len; i += 1) {
    button = buttonGroup.childNodes[i];
    if (button.nodeName === 'BUTTON') {
      button.addEventListener('click', handleButtonGroupClick);
    }
  }
}

function initClickHandler(parentId) {
  return function(e) {
    var buttonGroup = document.getElementById(parentId),
      i = 0,
      len = buttonGroup.childNodes.length,
      button;

    e.preventDefault();

    for (; i < len; i += 1) {
      button = buttonGroup.childNodes[i];
      if (button.nodeName === 'BUTTON') {
        button.className = '';
      }
    }

    e.target.className = 'active';
  };
}

initButtonGroup('buttonGroup');
