import React from 'react';
import PopupLeadForm from '../PopupLeadForm/PopupLeadForm';
// import OffcanvasExample from './Navebar';
// import Navebar from './Navebar'

function TestPage() {
  function createNewElement() {
    var txtNewInputBox = document.createElement('div');
    txtNewInputBox.innerHTML = "<input type='text' id='newInputBox'>";
    document.getElementById("newElementId").appendChild(txtNewInputBox);
}
  return (
    <div>
      {/* <OffcanvasExample /> */}
      <PopupLeadForm/>
      <div id="dynamicCheck">
        <input type="button" value="Create Element" onClick={createNewElement}/>
      </div>
      <div id="newElementId">New inputbox goes here:</div>
      <p id="demo">
        <input type="text" />
      </p>
    </div>
  )
}

export default TestPage
