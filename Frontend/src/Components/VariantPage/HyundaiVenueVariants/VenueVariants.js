import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link, useNavigate } from 'react-router-dom';
import locationContext from '../../../context/LocationContext';


function VenueVariants(props) {
  let { cars, id, model, details, price } = props


  const context = React.useContext(locationContext)

  let { location } = context




  const navigate = useNavigate()
  function handleClick(ver, iid, mod, brandd, modell) {
    if (price) {
      navigate(`/${brandd.toLowerCase()}/${modell.toLowerCase().split(" ").join("-")}/price-in-${location.toLowerCase().replace(/ /g, "-")}`, {
        state: {
          version: ver
        }
      })
    } else {
      navigate(`/new-cars/${details[0].brand.toLowerCase()}/${details[0].model_name.toLowerCase().split(" ").join("-")}/${ver.toLowerCase().split(" ").join("-")}`, {
        state: {
          id: iid,
          model: mod,
          car_version: ver
        }
      })
    }
    window.location.reload()
  }

  return (
    <DropdownButton id="dropdown-basic-button" title={`${details[0].model_name} ${details[0].version_name}`}>
      {cars.map((element) => {
        return element.model_name + " " + element.version_name !== details[0].model_name + " " + details[0].version_name ? <Dropdown.Item onClick={() => {
          handleClick(element.version_name, element.uid, model, details[0].brand, element.model_name)
        }}> {element.model_name}&nbsp;{element.version_name}&nbsp; </Dropdown.Item> : null
      })}
    </DropdownButton>
  )
}

export default VenueVariants