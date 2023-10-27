import React, { useEffect, useRef, useState } from 'react'
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { IKImage, IKContext } from 'imagekitio-react';
import CancelIcon from '@mui/icons-material/Cancel';
import ImageDelete from './modal/modelModal';

const Manage_Cars = () => {

  const [brand, setBrand] = useState([])
  const [model, setModel] = useState([])
  const [car, setCar] = useState()
  const [text, setText] = useState()
  const [pros, setPros] = useState()
  const [cons, setCons] = useState()
  const [modeln, setModelN] = useState()
  const [modeli, setModelI] = useState()
  const [value, setValues] = useState()
  let [price, setPrice] = useState()
  let box = useRef(null)

  let mod = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline'],
      ['image', 'code-block', 'background', "align", "direction", "video"]
    ]
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

  async function getModelPrice(itm) {
    let data = await fetch(`/model_prices/${itm}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })

    let response = await data.json()
    setPrice(response)
  }


  async function handelCar(e) {
    e.preventDefault()

    setValues({
      brand: e.target.brand.value,
      model_name: e.target.model.value
    })

    let allData = JSON.parse(sessionStorage.getItem("data")) === null ? {} : JSON.parse(sessionStorage.getItem("data"))

    allData["brand"] = e.target.brand.value

    sessionStorage.setItem("data", JSON.stringify(allData))


    model.map((item) => {
      if (item.model_name === e.target.model.value) {
        getModelPrice(item.model_id)
      }
    })


    let data = await fetch(`/get_admin_car/${e.target.brand.value}/${e.target.model.value}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })


    let res = await data.json()
    setCar(res)
    setText(res.model_description)
    setPros(res.pros)
    setCons(res.cons)
    setModelN(res.model_name)
    setModelI(res.model_id)
  }


  async function allImages(e) {


    for (let i = 0; i <= Object.keys(e.target.files).length; i++) {
      formData.append("images", e.target.files[i])
    }




    // let data = await fetch(`/img/${e.target.name}/`, {
    //   method: "POST",
    //   body: formData
    // })


    // Object.keys(e.target.files).map((item, index) => {

    // let fReader = new FileReader();

    // fReader.readAsDataURL(e.target.files[item]);

    // fReader.onloadend = async function (event) {
    //   if (e.target.name === "brand_logo") {
    //     setLogo(preValues => [...preValues, event.target.result])
    //   } else if (e.target.name === "hero_image") {
    //     setMain(preValues => [...preValues, event.target.result])
    //   } else if (e.target.name === "exterior") {
    //     setExterior(preValues => [...preValues, event.target.result])
    //   } else if (e.target.name === "interior") {
    //     setInterior(preValues => [...preValues, event.target.result])
    //   } else if (e.target.name === "colors") {
    //     setColors(preValues => [...preValues, event.target.result])
    //   }
    // }

    // })
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




    // Object.keys(allData).includes("brand_description") ? null : text ? allData["brand_description"] = text : null
    Object.keys(allData).includes("model_description") ? null : text ? allData["model_description"] = text : null
    Object.keys(allData).includes("pros") ? null : pros ? allData["pros"] = pros : null
    Object.keys(allData).includes("cons") ? null : cons ? allData["cons"] = cons : null

    console.log(c, allData)

    if (c === box.current.children.length - 1) {
      updateModel(allData)
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
    if (sessionStorage.getItem("counterr") !== '1') {
      window.location = "/"
      sessionStorage.setItem("counterr", 1)
    }
  }, [])



  return (
    <>
      <h1 className='m-[4rem]'>Select Brand and Model to Proceed</h1>

      <div className='m-[4rem]'>
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

          <select className='py-[1rem] px-[3rem] mr-[5rem]' name="model">
            <option value="select">Select</option>
            {model ? model.map((item) => {
              return (<option value={item.model_name}>
                {item.model_name}
              </option>)
            }) : null}
          </select>

          <button type='submit' className='px-20 py-8 bg-purple-600 text-white mx-6 rounded-20'>Submit</button>

        </form>

        {car ?
          <>
            <hr className='mt-[5rem]' />
            <h1 className='mt-[1rem]'>{car.brand} {car.model_name} Details</h1>
            <div className='border-2 border-purple-600 rounded-8 m-[5rem] py-[3rem]' ref={box}>
              <div className='mx-[4rem] my-[6rem]'>
                <form onSubmit={handelData}>
                  <div className='flex'>
                    <div className='w-[20rem]'>
                      <p className='text-lg'>Add Car Model Name</p>
                    </div>
                    <input onChange={(e) => {
                      setModelN(e.target.value)
                    }} value={modeln} required autocomplete="null" name='model_name' className='px-[2rem] py-[0.5rem]' type="text" />
                  </div>
                  <div className='flex mt-[4rem]'>
                    <div className='w-[20rem]'>
                      <p className='text-lg'>Model Id</p>
                    </div>
                    <input value={modeli} disabled name='model_id' className='px-[2rem] py-[0.5rem] font-semibold' type="text" />
                  </div>
                  <div className='mt-[4rem]'>
                    <p className='text-lg'>Add Model Description</p>
                    <div className='my-[2rem]'>
                      <ReactQuill value={text} onChange={(content, delta, source, editor) => {
                        setText(editor.getHTML());
                      }} theme="snow" modules={mod} />
                    </div>
                  </div>
                  <p className='text-lg font-semibold my-[4rem]'>Add Model Images</p>
                  <div className='mt-[4rem]'>
                    <p className='text-lg mb-[2rem]'>Add Main Image</p>
                    <label class="p-5 bg-blue-500 text-white cursor-pointer">
                      <input onChange={allImages} autocomplete="null" name='hero_image' id='hero_image' accept='image/*' type="file" />
                      Add Image
                    </label>
                  </div>
                  <IKContext
                    publicKey="public_lzmiZh6Ro/q1w/s4jWGPmaB7L4Q="
                    urlEndpoint={`https://ik.imagekit.io/GORP/`}
                    transformationPosition="path"
                  >
                    <div className='mt-[2rem] relative'>
                      <span className='inline-block'>
                        <IKImage style={{ display: "unset" }} width={150} onError={(e) => e.target.remove()} height={150} className="mb-[0.5rem]" path={`/${value.brand}/${value.model_name}/${value.model_name}.jpg`} />
                      </span>
                      <span className='absolute top-[-6px] left-[13.7rem]'>
                        <ImageDelete name={`${value.model_name}.jpg`} item={`/${value.brand}/${value.model_name}`} />
                      </span>
                    </div>



                  </IKContext>
                  <div className='mt-[4rem]'>
                    <p className='text-lg mb-[2rem]'>Add Exterior Images</p>
                    <label class="p-5 bg-blue-500 text-white cursor-pointer">
                      <input
                        onChange={allImages} autocomplete="null" id='exterior' name='exterior' accept='image/*' type="file" multiple />
                      Add Image
                    </label>
                  </div>
                  <div>
                    <IKContext
                      publicKey="public_lzmiZh6Ro/q1w/s4jWGPmaB7L4Q="
                      urlEndpoint={`https://ik.imagekit.io/GORP/`}
                      transformationPosition="path"
                    >
                      <div className='grid grid-cols-9 mt-[2rem] gap-4'>
                        {Array.from(Array(20), (e, i) => {
                          return (
                            <span className="inline-block relative mb-[0.5rem]">
                              <IKImage width={100} onError={(e) => e.target.parentNode.remove()} height={100} path={`/${value.brand}/${value.model_name}/Exterior/car${i + 1}.jpg`} />
                              <span className='absolute top-[-10px] left-[8.5rem]'>
                                <ImageDelete name={`car${i + 1}.jpg`} item={`/${value.brand}/${value.model_name}/Exterior`} />
                              </span>
                            </span>
                          )
                        })}
                      </div>

                    </IKContext>
                  </div>
                  <div className='mt-[4rem]'>
                    <p className='text-lg mb-[2rem]'>Add Interior Images</p>
                    <label class="p-5 bg-blue-500 text-white cursor-pointer">
                      <input
                        onChange={allImages} autocomplete="null" id='interior' name='interior' accept='image/*' type="file" multiple />
                      Add Image
                    </label>
                  </div>
                  <IKContext
                    publicKey="public_lzmiZh6Ro/q1w/s4jWGPmaB7L4Q="
                    urlEndpoint={`https://ik.imagekit.io/GORP/`}
                    transformationPosition="path"
                  >
                    <div className='grid grid-cols-9 mt-[2rem] gap-4'>
                      {Array.from(Array(20), (e, i) => {
                        return (
                          <span className="inline-block relative mb-[0.5rem]">
                            <IKImage width={100} onError={(e) => e.target.parentNode.remove()} height={100} path={`/${value.brand}/${value.model_name}/Interior/car${i + 1}.jpg`} />
                            <span className='absolute top-[-10px] left-[8.5rem]'>
                              <ImageDelete name={`car${i + 1}.jpg`} item={`/${value.brand}/${value.model_name}/Interior`} />
                            </span>
                          </span>
                        )
                      })}
                    </div>

                  </IKContext>
                  <p className='text-lg font-semibold my-[4rem]'>Add Model Colors</p>
                  <div className='mt-[4rem]'>
                    <p className='text-lg mb-[2rem]'>Add Colors</p>
                    <label class="p-5 bg-blue-500 text-white cursor-pointer">
                      <input onChange={allImages} autocomplete="null" id='colors' name='colors' accept='image/*' type="file" multiple />
                      Add Image
                    </label>
                  </div>

                  <IKContext
                    publicKey="public_lzmiZh6Ro/q1w/s4jWGPmaB7L4Q="
                    urlEndpoint={`https://ik.imagekit.io/GORP/`}
                    transformationPosition="path"
                  >
                    <div className='grid grid-cols-9 mt-[2rem] gap-4'>
                      {Array.from(Array(20), (e, i) => {
                        return (
                          <span className="inline-block relative mb-[0.5rem]">
                            <IKImage width={100} onError={(e) => e.target.parentNode.remove()} height={100} path={`/${value.brand}/${value.model_name}/Colors/car${i + 1}.jpg`} />
                            <span className='absolute top-[-10px] left-[8.5rem]'>
                              <ImageDelete name={`car${i + 1}.jpg`} item={`/${value.brand}/${value.model_name}/Colors`} />
                            </span>
                          </span>
                        )
                      })}
                    </div>

                  </IKContext>
                  <div>
                    <div className='flex justify-center m-20'>
                      <button type='submit' className='px-20 py-8 bg-purple-600 text-white mx-6 rounded-20'>Save & Proceed</button>
                    </div>
                  </div>
                </form>
              </div>
              <div className='mx-[4rem] my-[6rem] hidden'>
                <form onSubmit={handelData}>
                  <div className='mt-[4rem]'>
                    <p className='text-lg'>Pros</p>
                    <div className='my-[2rem]'>
                      <ReactQuill value={pros} onChange={(content, delta, source, editor) => {
                        setPros(editor.getHTML());
                      }} theme="snow" modules={mod} />
                    </div>
                  </div>
                  <div className='mt-[4rem]'>
                    <p className='text-lg'>Cons</p>
                    <div className='my-[2rem]'>
                      <ReactQuill value={cons} onChange={(content, delta, source, editor) => {
                        setCons(editor.getHTML());
                      }} theme="snow" modules={mod} />
                    </div>
                  </div>
                  <p className='text-lg font-semibold my-[4rem]'>Add Model Videos</p>
                  <div>
                    <p className='mb-10'>Add Youtube Url</p>
                    <textarea name="youtube" id="" cols="40" rows="5"></textarea>
                  </div>
                  <div className='flex justify-center m-20'>

                    <button type='submit' className='px-20 py-8 bg-purple-600 text-white mx-6 rounded-20'>Save & Proceed</button>
                  </div>
                </form>
              </div>
              <div className='mx-[4rem] hidden'>
                <form onSubmit={handelData}>
                  <div className='mt-[4rem]'>
                    <p className='text-lg mb-[2rem]'>Add Rating</p>
                    <input required autocomplete="null" name='rating' className='px-[3rem] py-[0.8rem]' type="number" />
                  </div>
                  <div className='mt-[4rem]'>
                    <p className='text-lg'>Add Price</p>
                    <div className='space-x-16 mt-[2rem]'>
                      <input value={price ? price[0].min_price : null} required autocomplete="null" name='min-price' placeholder='min-price' className='px-[3rem] py-[0.8rem]' type="number" />
                      <input value={price ? price[0].max_price : null} required autocomplete="null" name='max-price' placeholder='max-price' className='px-[3rem] py-[0.8rem]' type="number" />
                    </div>
                  </div>
                  <div className='mt-[4rem]'>
                    <p className='text-lg'>Add Mileage</p>
                    <div className='space-x-16 mt-[2rem]'>
                      <input value={price ? price[0].min_mileage : null} required autocomplete="null" name='min-mileage' placeholder='min-mileage' className='px-[3rem] py-[0.8rem]' type="number" />
                      <input value={price ? price[0].max_mileage : null} required autocomplete="null" name='max-mileage' placeholder='max-mileage' className='px-[3rem] py-[0.8rem]' type="number" />
                    </div>
                  </div>
                  <div className='mt-[4rem]'>
                    <p className='text-lg'>Add Engine</p>
                    <div className='space-x-16 mt-[2rem]'>
                      <input value={price ? price[0].min_engine : null} required autocomplete="null" name='min-engine' placeholder='min-engine' className='px-[3rem] py-[0.8rem]' type="number" />
                      <input value={price ? price[0].max_engine : null} required autocomplete="null" name='max-engine' placeholder='max-engine' className='px-[3rem] py-[0.8rem]' type="number" />
                    </div>
                  </div>
                  <div className='flex justify-center m-20'>

                    <button type='submit' className='px-20 py-8 bg-purple-600 text-white mx-6 rounded-20'>Save & Proceed</button>
                  </div>
                </form>
              </div>
            </div>
          </> : null}
      </div>
    </>
  )
}

export default Manage_Cars