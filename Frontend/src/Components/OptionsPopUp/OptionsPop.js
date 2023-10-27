import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useEffect } from 'react';
import "./OptionsPop.css"

function MyVerticallyCenteredModal(props) {

    useEffect(() => {
        if (props.optional) {
            try {
                document.querySelector(`#${props.optional.id}`).checked = true
            }
            catch (err) {
                console.log(err)
            }
        }

        if (props.warrenties) {
            try {
                document.querySelector(`#${props.warrenties.id}`).checked = true
            }
            catch (err) {
                console.log(err)
            }
        }

        if (props.rsa) {
            try {
                document.querySelector(`#${props.rsa.id}`).checked = true
            }
            catch (err) {
                console.log(err)
            }
        }
    })








    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header style={{ boxShadow: "0 2px 4px 0 rgba(0,0,0,.1)" }} className='pb-0' closeButton>
                <Modal.Title className='fw-bold fs-5' id="contained-modal-title-vcenter">
                    Optional Packages
                    <p className='txt1'>Available Additional Packages</p>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='pt-0 scroller'>
                <div>
                    <p className='txt2 mt-3'>Optional insurance</p>
                    {/* <div onClick={() => {
                        props.setoptional({
                            id: "zero",
                            value: "zero_dep"
                        })
                    }} className='input d-flex justify-content-between'>
                        <div>
                            <input type="radio" name="insurance" id="zero" />
                            <span style={{ fontSize: "15px" }} className='mx-2'>Zero Dep Insurance</span>
                        </div>
                        <span>Rs. 0</span>
                    </div> */}
                    <div onClick={() => {
                        props.setoptional({
                            id: "enginep",
                            value: "engine_protect"
                        })
                    }} className={` ${props.item.engine_protect === null ? "d-none":null} input d-flex mt-3 justify-content-between`}>
                        <div>
                            <input type="radio" name="insurance" id="enginep" />
                            <span style={{ fontSize: "15px" }} className='mx-2'>Engine Protect</span>
                        </div>
                        <span>Rs. {props.item.engine_protect === null ? 0 : props.item.engine_protect}</span>
                    </div>
                    <div onClick={() => {
                        props.setoptional({
                            id: "rti",
                            value: "rti"
                        })
                    }} className={` ${props.item.rti === null ? "d-none":null} input d-flex mt-3 justify-content-between`}>
                        <div>
                            <input type="radio" name="insurance" id="rti" />
                            <span style={{ fontSize: "15px" }} className='mx-2'>RTI</span>
                        </div>
                        <span>Rs. {props.item.rti === null ? 0 : props.item.rti}</span>
                    </div>
                    <div onClick={() => {
                        props.setoptional({
                            id: "paint",
                            value: "paint_protection"
                        })
                    }} className={` ${props.item.paint_protection === null ? "d-none":null} input d-flex mt-3 justify-content-between`}>
                        <div>
                            <input type="radio" name="insurance" id="paint" />
                            <span style={{ fontSize: "15px" }} className='mx-2'>Paint Protection</span>
                        </div>
                        <span>Rs. {props.item.paint_protection === null ? 0 : props.item.paint_protection}</span>
                    </div>
                    <div onClick={() => {
                        props.setoptional({
                            id: "mmm",
                            value: "three_m_protection"
                        })
                    }} className={` ${props.item.three_m_protection === null ? "d-none":null} input d-flex mt-3 justify-content-between`}>
                        <div>
                            <input type="radio" name="insurance" id="mmm" />
                            <span style={{ fontSize: "15px" }} className='mx-2'>3M Protection</span>
                        </div>
                        <span>Rs. {props.item.three_m_protection === null ? 0 : props.item.three_m_protection}</span>
                    </div>
                </div>
                <div>
                    <p className='txt2 mt-4'>Warranties</p>
                    <div onClick={() => {
                        props.setWarrenties({
                            id: "oneyr",
                            value: "one_year_extended_warranty"
                        })

                    }} className={`  ${props.item.one_year_extended_warranty === null ? "d-none":null} input d-flex justify-content-between`}>
                        <div>
                            <input type="radio" name="warrenties" id="oneyr" />
                            <span style={{ fontSize: "15px" }} className='mx-2'>1 Year Extended Warranty</span>
                        </div>
                        <span>Rs. {props.item.one_year_extended_warranty === null ? 0 : props.item.one_year_extended_warranty}</span>
                    </div>
                    <div onClick={() => {
                        props.setWarrenties({
                            id: "twoyr",
                            value: "second_year_extended_warranty"
                        })

                    }} className={`  ${props.item.second_year_extended_warranty === null ? "d-none":null} input d-flex justify-content-between mt-3`}>
                        <div>
                            <input type="radio" name="warrenties" id="twoyr" />
                            <span style={{ fontSize: "15px" }} className='mx-2'>2 Year Extended Warranty</span>
                        </div>
                        <span>Rs. {props.item.second_year_extended_warranty === null ? 0 : props.item.second_year_extended_warranty}</span>
                    </div>
                    <div onClick={() => {
                        props.setWarrenties({
                            id: "threeyr",
                            value: "three_year_extended_warranty"
                        })

                    }} className={`  ${props.item.three_year_extended_warranty === null ? "d-none":null} input d-flex justify-content-between mt-3`}>
                        <div>
                            <input type="radio" name="warrenties" id="threeyr" />
                            <span style={{ fontSize: "15px" }} className='mx-2'>3 Year Extended Warranty</span>
                        </div>
                        <span>Rs. {props.item.three_year_extended_warranty === null ? 0 : props.item.three_year_extended_warranty}</span>
                    </div>
                    <div onClick={() => {
                        props.setWarrenties({
                            id: "fouryr",
                            value: "four_year_extended_warranty"
                        })

                    }} className={`  ${props.item.four_year_extended_warranty === null ? "d-none":null} input d-flex justify-content-between mt-3`}>
                        <div>
                            <input type="radio" name="warrenties" id="fouryr" />
                            <span style={{ fontSize: "15px" }} className='mx-2'>4 Year Extended Warranty</span>
                        </div>
                        <span>Rs. {props.item.four_year_extended_warranty === null ? 0 : props.item.four_year_extended_warranty}</span>
                    </div>
                    <div onClick={() => {
                        props.setWarrenties({
                            id: "fiveyr",
                            value: "five_year_extended_warranty"
                        })

                    }} className={`${props.item.five_year_extended_warranty === null ? "d-none":null} input d-flex justify-content-between mt-3`}>
                        <div>
                            <input type="radio" name="warrenties" id="fiveyr" />
                            <span style={{ fontSize: "15px" }} className='mx-2'>5 Year Extended Warranty</span>
                        </div>
                        <span>Rs. {props.item.five_year_extended_warranty === null ? 0 : props.item.five_year_extended_warranty}</span>
                    </div>
                    <div onClick={() => {
                        props.setWarrenties({
                            id: "shield",
                            value: "shield_of_trust"
                        })

                    }} className={` ${props.item.shield_of_trust === null ? "d-none":null} input d-flex justify-content-between mt-3`}>
                        <div>
                            <input type="radio" name="warrenties" id="shield" />
                            <span style={{ fontSize: "15px" }} className='mx-2'>Shield of Trust</span>
                        </div>
                        <span>Rs. {props.item.shield_of_trust === null ? 0 : props.item.shield_of_trust}</span>
                    </div>
                    <div onClick={() => {
                        props.setWarrenties({
                            id: "extnd",
                            value: "extended_warranty"
                        })

                    }} className={` ${props.item.extended_warranty === null ? "d-none":null} input d-flex justify-content-between mt-3`}>
                        <div>
                            <input type="radio" name="warrenties" id="extnd" />
                            <span style={{ fontSize: "15px" }} className='mx-2'>Extended Warranty</span>
                        </div>
                        <span>Rs. {props.item.extended_warranty === null ? 0 : props.item.extended_warranty}</span>
                    </div>

                </div>
                <div>
                    <p className='txt2 mt-4'>Road Side Assistance</p>
                    <div onClick={() => {
                        props.setRsa({
                            id: "rsa",
                            value: "rsa"
                        })
                    }} className={` ${props.item.rsa === null ? "d-none":null} input d-flex justify-content-between`}>
                        <div>
                            <input type="radio" name="roadside" id="rsa" />
                            <span style={{ fontSize: "15px" }} className='mx-2'>RSA</span>
                        </div>
                        <span>Rs. {props.item.rsa === null ? 0 : props.item.rsa}</span>
                    </div>
                    <div onClick={() => {
                        props.setRsa({
                            id: "oners",
                            value: "one_year_rsa"
                        })
                    }} className={` ${props.item.one_year_rsa === null ? "d-none":null} input d-flex mt-3 justify-content-between`}>
                        <div>
                            <input type="radio" name="roadside" id="oners" />
                            <span style={{ fontSize: "15px" }} className='mx-2'>1 Year RSA</span>
                        </div>
                        <span>Rs. {props.item.one_year_rsa === null ? 0 : props.item.one_year_rsa}</span>
                    </div>
                    <div onClick={() => {
                        props.setRsa({
                            id: "twors",
                            value: "two_year_rsa"
                        })
                    }} className={` ${props.item.two_year_rsa === null ? "d-none":null} input d-flex mt-3 justify-content-between`}>
                        <div>
                            <input type="radio" name="roadside" id="twors" />
                            <span style={{ fontSize: "15px" }} className='mx-2'>2 Years RSA</span>
                        </div>
                        <span>Rs. {props.item.two_year_rsa === null ? 0 : props.item.two_year_rsa}</span>
                    </div>
                    <div onClick={() => {
                        props.setRsa({
                            id: "fourrs",
                            value: "four_year_rsa"
                        })
                    }} className={` ${props.item.four_year_rsa === null ? "d-none":null} input d-flex mt-3 justify-content-between`}>
                        <div>
                            <input type="radio" name="roadside" id="fourrs" />
                            <span style={{ fontSize: "15px" }} className='mx-2'>4 Years RSA</span>
                        </div>
                        <span>Rs. {props.item.four_year_rsa === null ? 0 : props.item.four_year_rsa}</span>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer className='bot d-block'>
                <div className='d-flex justify-content-between'>
                    <div>
                        <p style={{ fontSize: "13px" }} className='mb-0'>Effective</p>
                        <p style={{ fontSize: "18px" }} className='mb-0 fw-bold'>On Road Price</p>
                    </div>
                    <span style={{ fontSize: "18px" }}>Rs. {props.rsa || props.optional || props.warrenties  ? props.total : props.total}</span>
                </div>
            </Modal.Footer>
        </Modal>
    );
}

function App(props) {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            <p onClick={() => setModalShow(true)} style={{ fontSize: "13px", color: "#0288d1", cursor: 'pointer' }}>{props.options || props.war || props.ra ? "Edit" : "Add"}</p>


            <MyVerticallyCenteredModal
                show={modalShow}
                item={props.list}
                setoptional={props.setoptions}
                optional={props.options}
                total={props.total}
                warrenties={props.war} rsa={props.ra} setRsa={props.setra} setWarrenties={props.setwar}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

export default App