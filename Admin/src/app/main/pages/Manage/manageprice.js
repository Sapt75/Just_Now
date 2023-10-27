import React, { useEffect, useState } from 'react'

const Manage_Price = () => {


  const [first, setFirst] = useState()
  const [second, setSecond] = useState()
  const [third, setThird] = useState()
  const [fourth, setFourth] = useState()
  const [final, setFinal] = useState()

  async function getData() {
    let brand = await fetch(`/version_brand_admin`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })

    let res = await brand.json()

    setFirst(res)

    let city = await fetch(`/version_city_admin`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })

    let response = await city.json()

    setFourth(response)
  }

  async function getModel(itm) {
    let model = await fetch(`/version_model_admin/${itm}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })

    let res = await model.json()

    setSecond(res)
  }


  async function getVarient(itm) {
    let version = await fetch(`/version_varient_admin/${itm}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })

    let res = await version.json()

    setThird(res)



  }








  async function handelPrice(e) {
    e.preventDefault()

    let { brand, model, varient, city } = e.target


    let data = await fetch(`/price_result`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        brand: brand.value,
        model_name: model.value,
        version_name: varient.value,
        city_name: city.value
      })
    })

    let res = await data.json()

    setFinal(res[0])






  }


  async function handelSubmit(){
    let data = await fetch(`/update_price`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(final)
    })
  }


  useEffect(() => {
    getData()
  }, [])






  return (
    <>
      <div className='m-[4rem]'>
        <form onSubmit={handelPrice}>
          <select className='py-[1rem] px-[3rem] mr-[5rem]' onChange={(e) => {
            getModel(e.target.value)
          }} name="brand">
            <option value="select">Select</option>
            {first ? first.map((item) => {
              return (<option value={item}>
                {item}
              </option>)
            }) : null}

          </select>

          <select onChange={(e) => {
            getVarient(e.target.value)
          }} className='py-[1rem] px-[3rem] mr-[5rem]' name="model">
            <option value="select">Select</option>
            {second ? second.map((item) => {
              return (<option value={item}>
                {item}
              </option>)
            }) : null}
          </select>

          <select className='py-[1rem] px-[3rem] mr-[5rem]' name="varient">
            <option value="select">Select</option>
            {third ? third.map((item) => {
              return (<option value={item}>
                {item}
              </option>)
            }) : null}
          </select>

          <select className='py-[1rem] px-[3rem] mr-[5rem]' name="city">
            <option value="select">Select</option>
            {fourth ? fourth.map((item) => {
              return (<option value={item}>
                {item}
              </option>)
            }) : null}
          </select>

          <button type='submit' className='px-20 py-8 bg-purple-600 text-white mx-6 rounded-20'>Submit</button>

        </form>
      </div>
      {final ?  <div className='border-2 border-purple-700 p-[3rem] rounded-12 mt-[2rem] mx-[4rem]'>
        <div class="grid grid-cols-3 gap-20">
          {final ? Object.keys(final).map((item) => {
            return (<div>
              <p className='font-semibold text-lg my-[1rem]'>{_.startCase(item.replace("_", " "))}</p>
              <input onChange={(e) => {
                setFinal(() => {
                  const entries = Object.entries(final).map(([key, value]) => key === e.target.name ? [key, isNaN(e.target.value) ? e.target.value: parseInt(e.target.value)] : [key, value]);
                  const result = Object.fromEntries(entries);
                  return result
                })
              }} value={final[item]} disabled={item === "_id" || item === "Version_UID" || item === "brand" || item === "model_name" || item === "version_name" ? true: false} className='w-full py-8' name={item} type="text" />
            </div>)
          }) : null}
        </div>
        <div className='my-[2rem] text-center'>
        <button className='px-20 py-8 bg-purple-600 text-white mx-6 rounded-20' onClick={handelSubmit}>Submit</button>
        </div>
      </div> :null}
    </>
  )
}

export default Manage_Price