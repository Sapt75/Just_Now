import React, { useEffect, useState, useRef } from 'react'
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import { useNavigate } from 'react-router-dom';



const Add_New_Car = () => {

  let [text, setText] = useState()
  let [brand, setBrand] = useState()
  let [logo, setLogo] = useState([])
  let [brandd, setBrandD] = useState()
  let [car, setCar] = useState()
  let box = useRef(null)

  const usenav = useNavigate();


  let mod = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline'],
      ['image', 'code-block', 'background', "align", "direction", "video"]
    ]
  }

  async function getCarData(item) {
    let data = await fetch(`/manage_brand/${item}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })

    let res = await data.json()
    setBrandD(res)
    setText(res.brand_description)
  }

  async function manageBrand(itm) {
    let data = await fetch(`/modify_brand/${car}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(itm)
    })

    let res = await data.json()
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



  async function allImages(e) {

    let formData = new FormData()

    for (let i = 0; i <= Object.keys(e.target.files).length; i++) {
      formData.append("images", e.target.files[i])
    }




    // let data = await fetch(`/img/${e.target.name}/`, {
    //   method: "POST",
    //   body: formData
    // })


    Object.keys(e.target.files).map((item, index) => {

      let fReader = new FileReader();

      fReader.readAsDataURL(e.target.files[item]);

      fReader.onloadend = async function (event) {
        if (e.target.name === "brand_logo") {
          setLogo(preValues => [...preValues, event.target.result])
        } else if (e.target.name === "hero_image") {
          setMain(preValues => [...preValues, event.target.result])
        } else if (e.target.name === "exterior") {
          setExterior(preValues => [...preValues, event.target.result])
        } else if (e.target.name === "interior") {
          setInterior(preValues => [...preValues, event.target.result])
        } else if (e.target.name === "colors") {
          setColors(preValues => [...preValues, event.target.result])
        }
      }

    })

  }



  async function handelCar(e) {
    e.preventDefault()
    getCarData(e.target.brand.value)
    setCar(e.target.brand.value)
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





    Object.keys(allData).includes("brand_description") ? null : text ? allData["brand_description"] = text : null

    console.log(c, allData)

    if (c === box.current.children.length - 1) {
      console.log(allData)
      manageBrand(allData)
      // usenav("/pages/manage_cars")
    }


    if ((box.current.children.length) - 1 !== c) {
      box.current.children[c + 1].classList.remove("hidden")
      box.current.children[c].classList.add("hidden")
      c += 1
      sessionStorage.setItem("counter", c)
    }
  }





  function changeInput(e) {
    setBrandD(() => {
      const entries = Object.entries(brandd).map(([key, value]) => key === e.target.name ? [key, e.target.value] : [key, value]);
      const result = Object.fromEntries(entries);
      return result
    })
  }





  useEffect(() => {
    getBrand()
  }, [])










  return (
    <>
      <div className='m-[6rem]'>
        <h1 className='font-semibold text-xl my-[2rem]'>Select a Brand</h1>
        <form onSubmit={handelCar}>
          <select className='py-[1rem] px-[3rem] mr-[5rem]' name="brand">
            <option value="select">Select</option>
            {brand ? brand.map((item) => {
              return (<option value={item.brand}>
                {item.brand}
              </option>)
            }) : null}

          </select>

          <button type='submit' className='px-20 py-8 bg-purple-600 text-white mx-6 rounded-20'>Submit</button>

        </form>
      </div>


      {brandd ? <div className='border-2 border-purple-600 rounded-8 m-[5rem] py-[3rem]' ref={box}>
        <div className='mx-[4rem]'>
          <form onSubmit={handelData}>
            <div className='flex'>
              <div className='w-[20rem]'>
                <p className='text-lg'>Add Brand Name</p>
              </div>
              <input onChange={changeInput} value={brandd.brand} required autocomplete="null" name='brand' className='px-[2rem] py-[0.5rem]' type="text" />
            </div>
            <div className='flex mt-[4rem]'>
              <div className='w-[20rem]'>
                <p className='text-lg'>UID</p>
              </div>
              <input value={brandd.uid} disabled name='uid' className='px-[2rem] py-[0.5rem] font-semibold' type="text" />
            </div>
            <div className='flex mt-[4rem]'>
              <div className='w-[20rem]'>
                <p className='text-lg'>Add Brand Logo</p>
              </div>
              <label class="p-5 bg-blue-500 text-white cursor-pointer">
                <input onChange={allImages} required autocomplete="null" id='brand_logo' name='brand_logo' accept='image/*' type="file" />
                Brand Logo
              </label>
            </div>
            {logo.length > 0 ? <div className='flex my-[2rem] space-x-10'>
              <img width={150} height={150} src={logo[0]} alt="brand_logo" />
            </div> : null}
            <div className='my-[3rem]'>
              <p className='text-lg'>Add Brand Description</p>
              <div className='my-[2rem]'>
                <ReactQuill value={text} onChange={(content, delta, source, editor) => {
                  setText(editor.getHTML())
                }} theme="snow" modules={mod} />
                <div className='text-center'>
                  <p className='font-semibold my-[1rem]'><ReportProblemIcon className="text-red-700" sx={{ color: "red[500]" }} /> To activate a brand at least one car model need to be added.</p>
                </div>
              </div>
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
