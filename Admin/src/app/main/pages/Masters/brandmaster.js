import React, { useEffect, useState } from 'react'
import CancelIcon from '@mui/icons-material/Cancel';
import { Link } from 'react-router-dom';
import "./brandm.min.css"



const Brand_Master = () => {


  const [brand, setBrand] = useState([])




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

  async function toggleStatus(value, stat) {
    let updated = brand.map((item) => {
      if (item.brand === value) {
        item.status = stat === "Active" ? "Deactive" : "Active"
        return item
      } else {
        return item
      }
    })
    setBrand(updated)
    let data = await fetch(`/status_update/${value}/${stat === "Active" ? "Deactive" : "Active"}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
  }



  useEffect(() => {
    getBrand()
  }, [])





  return (
    <>
      <div className='flex justify-end m-20'>
        <button className='px-14 py-8 bg-purple-600 text-white mx-6 rounded-20'>View All Brands</button>
        <Link style={{ textDecoration: "none", color: "white" }} to={"/pages/add_new_car"} className='px-14 py-8 bg-purple-600 text-white mx-6 rounded-20'>Add New</Link>
        {/* <button className='px-14 py-8 bg-purple-600 text-white mx-6 rounded-20'>Add New</button> */}
      </div>
      <table className='m-[5rem]'>
        <thead>
          <tr className='border-b-1 border-solid border-black text-center'>
            <td className='pb-12'>Brand Logo</td>
            <td className='pb-12'>Brand Name</td>
            <td className='pb-12'>Publish Date</td>
            <td className='pb-12'>Status</td>
            <td className='pb-12'>Actions</td>
          </tr>
        </thead>
        <tbody>
          {brand.length > 0 ? brand.map((item) => {
            return (<tr className='text-center'>
              <td className='py-12'>
                <img className='inline' width={60} src={`../assets/images/BrandLogos/${item.brand}.jpg`} alt="" />
              </td>
              <td className='py-12'>{item.brand}</td>
              <td className='py-12'>06/07/2023</td>
              <td className={`py-12 ${item.status === "Active" ? "text-green-400" : "text-red-400"}`}>{item.status}</td>
              <td className='py-12 flex justify-center space-x-5'>
                <span>
                  <div>
                    <label class="switch">
                      <input checked={item.status === "Active" ? true : false} onChange={() => {
                        toggleStatus(item.brand, item.status)
                      }} type="checkbox" />
                      <span class="slider"></span>
                    </label>
                  </div>
                </span>
              </td>
            </tr>)
          }) : null}
        </tbody>
      </table>
    </>
  )
}

export default Brand_Master