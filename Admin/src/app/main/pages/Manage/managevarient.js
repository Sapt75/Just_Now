import React, { useEffect, useState, useRef } from 'react'
import 'react-quill/dist/quill.snow.css';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import LabTabs from '../Add Car/tabs';
import Spectabs from '../Add Car/spectabs';
import { useNavigate } from 'react-router-dom';


const Add_New_Car = () => {

  const [brand, setBrand] = useState([])
  const [model, setModel] = useState([])
  const [varient, setVarient] = useState([])
  const [car, setCar] = useState()
  const [values, setValues] = useState()
  let [brandd, setBrandD] = useState()
  let [status, setStatus] = useState(true)
  let [price, setPrice] = useState()
  let box = useRef(null)

  const usenav = useNavigate();



  async function addCar(car) {
    let data = await fetch(`/add_new_car`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(car)
    })

    let res = await data.json()
  }


  async function getPrice(mod, ver) {
    let data = await fetch(`/admin_price/${mod}/${ver}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })

    let res = await data.json()
    setPrice(res)
  }



  async function getBrand() {
    let data = await fetch(`/car_brand_admin`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })

    let res = await data.json()
    setBrand(res)
  }

  async function updateModel(itm) {
    let data = await fetch(`/update_model/${itm.brand}/${itm.model_name}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(itm)
    })

    let res = await data.json()
    // alert("HEeelo")
  }

  async function handelCar(e) {
    e.preventDefault()

    setValues({
      brand: e.target.brand.value,
      model_name: e.target.model.value,
      version_name: e.target.version.value
    })

    getPrice(e.target.model.value, e.target.version.value)


    let data = await fetch(`/admin_varata/${e.target.brand.value}/${e.target.model.value}/${e.target.version.value}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })

    let res = await data.json()
    setCar(res)
  }


  async function getModel(itm) {
    let data = await fetch(`/get_model/${itm}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })

    let res = await data.json()
    setModel(res)
  }

  async function getVersion(itm) {
    let data = await fetch(`/admin_varient/${itm}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })

    let res = await data.json()

    console.log(res)
    setVarient(res)
  }

  async function cityPrices(e) {

    let formData = new FormData()

    formData.append("city", e.target.files[0])


    let data = await fetch(`/city_price`, {
      method: "POST",
      body: formData
    })
  }








  async function handelData(e) {
    e.preventDefault()

    let c = sessionStorage.getItem("counter") === null ? 0 : parseInt(sessionStorage.getItem("counter"))

    let allData = JSON.parse(sessionStorage.getItem("data")) === null ? {} : JSON.parse(sessionStorage.getItem("data"))


    Object.values(e.target).map((item) => {
      if ((item.nodeName === "INPUT" && item.type !== "file") || item.nodeName === "TEXTAREA") {
        if (!item.id) {
          allData[item.name] = item.value
        }
      }
    })

    sessionStorage.setItem("data", JSON.stringify(allData))

    // Object.values(e.target).map((item) => {
    //     if (item.nodeName === "INPUT" || item.nodeName === "TEXTAREA") {
    //         Object.defineProperty(allData, item.name, {
    //             value: item.value,
    //             writable: false
    //         })
    //     }
    // })


    console.log(c, allData)

    if (c === box.current.children.length - 1) {
      let new_Dat = JSON.parse(sessionStorage.getItem("data"))

      console.log(new_Dat)

      new_Dat["Features"] = JSON.parse(sessionStorage.getItem("features"))
      new_Dat["Specifications"] = JSON.parse(sessionStorage.getItem("specifications"))

      sessionStorage.setItem("data", JSON.stringify(new_Dat))

      // addCar(new_Dat)
      // usenav("/pages/manage_cars")
    }


    if ((box.current.children.length) - 1 !== c) {
      box.current.children[c + 1].classList.remove("hidden")
      box.current.children[c].classList.add("hidden")
      c += 1
      sessionStorage.setItem("counter", c)
    }
  }



  useEffect(() => {
    getBrand()
  }, [])






  return (
    <>
      <div className='m-[6rem]'>
        <h1 className='font-semibold text-xl my-[2rem]'>Select a Brand</h1>
        <form onSubmit={handelCar}>
          <select className='py-[1rem] px-[3rem] mr-[5rem]' onChange={(e) => {
            getModel(e.target.value)
          }} name="brand">
            <option value="select">Select</option>
            {brand ? brand.map((item) => {
              return (<option value={item.brand}>
                {item.brand}
              </option>)
            }) : null}

          </select>

          <select onChange={(e) => {
            getVersion(e.target.value)
          }} className='py-[1rem] px-[3rem] mr-[5rem]' name="model">
            <option value="select">Select</option>
            {model ? model.map((item) => {
              return (<option value={item.model_name}>
                {item.model_name}
              </option>)
            }) : null}
          </select>

          <select className='py-[1rem] px-[3rem] mr-[5rem]' name="version">
            <option value="select">Select</option>
            {varient ? varient.map((item) => {
              return (<option value={item.version_name}>
                {item.version_name}
              </option>)
            }) : null}
          </select>

          <button type='submit' className='px-20 py-8 bg-purple-600 text-white mx-6 rounded-20'>Submit</button>

        </form>
      </div>

      {car ? <div className='border-2 border-purple-600 rounded-8 m-[5rem] py-[3rem]' ref={box}>
        <div className='mx-[4rem]'>
          <form onSubmit={handelData}>
            <div className='mt-[4rem] flex space-x-24'>
              <div className='w-[10rem]'>
                <p className='text-lg mb-[2rem]'>Car Brand</p>
              </div>
              <input disabled value={car.brand} required autocomplete="null" name='brand' className='px-[3rem] py-[0.8rem]' type="text" />
            </div>
            <div className='mt-[4rem] flex space-x-24'>
              <div className='w-[10rem]'>
                <p className='text-lg'>Car Model</p>
              </div>
              <div className='space-x-16 mt-[2rem]'>
                <input disabled value={car.model_name} required autocomplete="null" name='model_name' placeholder='min-price' className='px-[3rem] py-[0.8rem]' type="text" />
              </div>
            </div>
            <div className='mt-[4rem] flex space-x-24'>
              <div className='w-[10rem]'>
                <p className='text-lg mb-[2rem]'>Car Varient</p>
              </div>
              <input value={values ? values.version_name : null} required autocomplete="null" name='varient_name' className='px-[3rem] py-[0.8rem]' type="text" />
            </div>
            <div className='mt-[4rem]'>
              <p className='text-lg'>Select Section</p>
              <div className='space-x-16 mt-[2rem] flex'>

                <button onClick={(e) => {
                  e.preventDefault()
                  if (!status) {
                    setStatus(true)
                  }
                }} className='px-20 py-8 bg-purple-600 text-white mx-6 rounded-20'>Features</button>
                <button onClick={(e) => {
                  e.preventDefault()
                  if (status) {
                    setStatus(false)
                  }
                }} className='px-20 py-8 bg-purple-600 text-white mx-6 rounded-20'>Specifications</button>

              </div>
              {status ? <LabTabs status={true} values={values} /> : <Spectabs status={true} values={values} />}
            </div>
            <p className='font-semibold my-[1rem]'><ReportProblemIcon className="text-red-700" sx={{ color: "red[500]" }} /> To activate a brand at least one car model need to be added.</p>
            <div className='flex justify-center m-20'>

              <button type='submit' className='px-20 py-8 bg-purple-600 text-white mx-6 rounded-20'>Save & Proceed</button>
            </div>
          </form>
        </div>
        <div className='mx-[4rem] hidden'>
          <form onSubmit={handelData}>
            <div className='mt-[4rem]'>
              <div>
                <h1 className='text-4xl font-semibold mb-[4rem]'>Provide the list of Price for different cities</h1>
              </div>
              <label class="p-10 bg-blue-500 text-white font-semibold cursor-pointer">
                <input onChange={cityPrices} autocomplete="null" accept=".csv" type="file" />
                Upload CSV
              </label>
            </div>
            <div className='flex justify-center m-20'>
              <button type='submit' className='px-20 py-8 bg-purple-600 text-white mx-6 rounded-20'>Save & Proceed</button>
            </div>
          </form>
        </div>
      </div> : null}

    </>
  )
}

export default Add_New_Car
