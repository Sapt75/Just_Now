import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

// function BasicButtonExample() {
function BasicDropdownBrand() {


  return (
    <DropdownButton id="dropdown-basic-button" title="Hyundai">
      <Dropdown.Item href="#/action-1"> Suzuki</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Hyundai</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Tata</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Toyota</Dropdown.Item>
      <Dropdown.Item href="#/action-3">KIA</Dropdown.Item>
    </DropdownButton>
  );
}

export default BasicDropdownBrand;