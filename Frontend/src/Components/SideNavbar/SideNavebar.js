import React, { useEffect, useState } from 'react';

import '@coreui/coreui/dist/css/coreui.min.css'
import './SideNavebar.css';
import AddIcon from '@mui/icons-material/Add';



const SideNavebar = () => {
  const [show, setShow] = useState({
    sbrand: false,
    sbody: false
  })
  const [brand, setBrand] = useState([])
  const [type, setType] = useState([])

  async function gBrand() {
    let data = await fetch('/car_nav', {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })

    let response = await data.json()

    setBrand(response.splice(0, 8))
  }

  async function getBodyData() {
    let data = await fetch('/all_body_types', {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    let response = await data.json()
    console.log(response)
    // console.log(props)
    setType(response)
  }


  useEffect(() => {
    gBrand()
    getBodyData()
  }, [])


  return (
    <>

      <div className='d-flex justify-content-between'>
        <div>
          <p className='mb-2 fw-bold'>Brand</p>
          <ul className={`list-unstyled p-0 m-0 ${show.sbrand ? null : "d-none"}`}>
            {brand.length > 0 ? brand.map((item) => {
              return <li onClick={() => {
                document.getElementsByClassName("navbar-toggler-icon")[0].click()
                window.location.href = `/#/new-cars/${item}`
              }} >{item}</li>

            }) : null}
          </ul>
        </div>
        <div>
          <AddIcon onClick={() => {
            if (show.sbrand) {
              setShow({
                sbrand: false,
                sbody: show.sbody
              })
              document.getElementsByClassName("brand-drop1")[0].classList.remove("brand-drop")
              document.getElementsByClassName("brand-drop1")[0].classList.add("brand-rev")
            } else {
              setShow({
                sbrand: true,
                sbody: show.sbody
              })
              document.getElementsByClassName("brand-drop1")[0].classList.remove("brand-rev")
              document.getElementsByClassName("brand-drop1")[0].classList.add("brand-drop")
            }

          }} className='brand-drop1' fontSize='small' />
        </div>
      </div>

      <div className='d-flex justify-content-between'>
        <div>
          <p className='mb-2 fw-bold'>Body Type</p>
          <ul className={`list-unstyled p-0 m-0 ${show.sbody ? null : "d-none"}`}>
            {type.length > 0 ? type.map((item) => {
              return <li onClick={() => {
                  document.getElementsByClassName("navbar-toggler-icon")[0].click()
                  window.location.href = `/#/filter/body_type/${item}`
                }}>{item}</li>
            }) : null}
          </ul>
        </div>
        <div>
          <AddIcon onClick={() => {
            if (show.sbody) {
              setShow({
                sbrand: show.sbrand,
                sbody: false
              })
              document.getElementsByClassName("body-drop1")[0].classList.remove("body-drop")
              document.getElementsByClassName("body-drop1")[0].classList.add("body-rev")
            } else {
              setShow({
                sbrand: show.sbrand,
                sbody: true
              })
              document.getElementsByClassName("body-drop1")[0].classList.remove("body-rev")
              document.getElementsByClassName("body-drop1")[0].classList.add("body-drop")
            }

          }} className='body-drop1' fontSize='small' />
        </div>
      </div>
    </>
  )
}



export default SideNavebar
