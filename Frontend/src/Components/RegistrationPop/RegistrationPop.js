import Modal from 'react-bootstrap/Modal';
import React from 'react';
import "./Registration.css"

function RegistrationPop(props) {
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className='mod-hel' closeButton>
        <Modal.Title className='fw-bold fs-5' id="contained-modal-title-vcenter">
          Registration Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 className='sm-head'>REGISTRATION TYPE</h4>
        <button onClick={() => {
          props.setReg("rto")
        }} className={`${props.reg === 0 || props.reg === "rto" ? 'sel' : 'but'}`}>Individual</button>
        <button onClick={() => {
          props.setReg("rto_corporate")
        }} className={`${props.reg === "rto_corporate" ? "sel" : "but"}`}>Corporate</button>
        <button onClick={() => {
          props.setReg("rto_bh_series")
        }} className={`${props.reg === "rto_bh_series" ? "sel" : "but"} ${window.innerWidth <= 600 ? "my-2" : null}`}>BH Series</button>
        <p className='sm-t'>An individual purchasing a vehicle under their name is registered under individual registration.</p>
      </Modal.Body>
      <Modal.Footer className='d-block'>
        <div style={{ justifyContent: "space-between" }} className='d-flex'>
          <div>
            <p className='ft-txt1'>Effective On-Road Price</p>
            <p style={{ fontSize: "16px" }} className='fw-bold mb-0'>{props.price}</p>

          </div>
          <button className='but2' onClick={props.onHide}>Apply</button>

        </div>

      </Modal.Footer>
    </Modal>
  );
}

function App(props) {
  const [modalShow, setModalShow] = React.useState(false);


  return (
    <>
      <p onClick={() => setModalShow(true)} className='mb-0' style={{ fontWeight: 600, textDecoration: "underline", cursor:"pointer" }}>
        {props.reg === 0 || props.reg === "rto" ? "Individual Registration" : props.reg === "rto_corporate" ? "Corporate Registration" : props.reg === "rto_bh_series" ? "BH Series Registration" : null}  <svg class="mx-1 o-dlrcWp o-eoatGj o-cqgkZn o-euTeMg o-bUlUGg o-emJYLF o-fzoTtm o-elzeOy snipcss-cgvtC" viewBox="0 0 16 16" fill="currentcolor" tabindex="-1" focusable="false" aria-hidden="true" role="img">
          <path d="M3.94 16H1a1 1 0 01-.95-.94v-2.77a1 1 0 01.26-.65L11 .5a1.64 1.64 0 012.34 0l2.09 2.08a1.64 1.64 0 010 2.32L4.61 15.72a1 1 0 01-.67.28zm-2.87-3.12v2.18L3.31 15l-.91-1.31zm.37-1L3.16 13l1.12 1.62 9.15-9.18-3-3zM11.16 1.8l3 3 .6-.61a.63.63 0 000-.9l-2.1-2.1A.65.65 0 0012.2 1a.63.63 0 00-.46.2z">
          </path>
        </svg>
      </p>



      <RegistrationPop
        show={modalShow}
        reg={props.reg} setReg={props.setReg} price={props.price}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default App