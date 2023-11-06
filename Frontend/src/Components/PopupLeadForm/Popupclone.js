import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import LeadGenerationForm from '../LeadGenerationForm/LeadGenerationForm';
import './PouupLeadForm.css';
import Pricetag from "../images/icons/tag.png"
import { useNavigate } from 'react-router-dom';
import locationContext from '../../context/LocationContext';


function PopupClone(props) {

  const [show, setShow] = useState(false);

  const context = React.useContext(locationContext)

  let { location } = context

  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate()

  return (
    <>
    {props.pag ? <span style={{color: "red", cursor: 'pointer'}} className='ps-3' onClick={handleShow}>Get Offers</span> : <Button onClick={handleShow} className='g-button border-0 py-2'><img src={Pricetag} alt="pricetag" />Get On Road Price <span className='g-p10'>in your city</span></Button>
}
      
      <Modal className='lead-form-popup' show={show} onHide={() => {
        handleClose()
        // navigate(`/${props.brand}/${props.model}/${location}`, {
        //   state: {
        //     model: props.mod_id,
        //     version: props.vers_id
        //   }
        // })
      }}>
        <Modal.Header closeButton>
          <Modal.Title>
            
            <div className="form-logo"><h3 className=" m-2">Get<span className="normal-text">Onroad</span>Price</h3></div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='lead-form-full'>
          <LeadGenerationForm version={props.version} model_id={props.mod_id} version_id={props.vers_id} brand={props.brand} model={props.model} close={setShow} value="one" /></Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  )
}

export default PopupClone
