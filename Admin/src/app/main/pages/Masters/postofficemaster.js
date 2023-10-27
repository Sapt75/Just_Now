import React, { useEffect, useState } from 'react'
import Example from './postModal/postModal'
import PostModalDel from './postModal/postdel'

const Post_Office_Master = () => {


  const [data, setData] = useState([])
  const [state, setState] = useState([])
  const [filter, setFilter] = useState([])


  async function getData() {
    let data = await fetch(`/pincode_list/0`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })

    let res = await data.json()
    setData(res)
  }

  async function getState() {
    let data = await fetch(`/get_state`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })

    let res = await data.json()
    setState(res)
  }

  async function updateState(item) {


    let i = sessionStorage.getItem("filter") ? JSON.parse(sessionStorage.getItem("filter")) : 0

    sessionStorage.getItem("filter") ? null : sessionStorage.setItem("filter", i)


    let data = await fetch(`/filter_state/${item}/${parseInt(i)}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })

    let res = await data.json()
    setFilter(res)
  }


  let c = sessionStorage.getItem("post") ? JSON.parse(sessionStorage.getItem("post")) : 0


  async function getAgain(item) {
    if (item) {
      c = parseInt(c) + 20
      sessionStorage.setItem("post", c)
    } else {
      c = parseInt(c) - 20
      sessionStorage.setItem("post", c)
    }


    let data = await fetch(`/pincode_list/${c}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })

    let res = await data.json()

    setData(res)
  }



  useEffect(() => {
    getData()
    getState()
    sessionStorage.removeItem("filter")
    sessionStorage.removeItem("post")
  }, [])



  return (
    <>
      <div className='flex justify-end m-20'>
        <Example />
      </div>
      <div className='flex justify-end mx-[5rem] my-[2rem]'>
        <select onChange={(e) => updateState(e.target.value)} className='py-10 px-5 w-1/4'>
          {state.map((item) => {
            return item === null ? null : <option value={item}>{item}</option>
          })}
        </select>
      </div>
      <table className='m-[5rem]'>
        <thead>
          <tr className='border-b-1 border-solid border-black text-center'>
            <td className='pb-12'>Pincode</td>
            <td className='pb-12'>City</td>
            <td className='pb-12'>State</td>
            <td className='pb-12'>Post Office Name</td>
            <td className='pb-12'>Actions</td>
          </tr>
        </thead>
        <tbody>
          {filter.length > 0 ? filter.map((item, index) => {
            return (<tr key={index} className='text-center'>
              <td className='py-12'>{item.pincode}</td>
              <td className='py-12'>{item.City}</td>
              <td className="py-12">{item.State}</td>
              <td className='py-12'>{item.postoffice_name}</td>
              <td className='py-12 flex justify-center space-x-5'>
                <Example status={true} item={item} />
                <PostModalDel item={item} />
              </td>
            </tr>)
          }) : data.length > 0 ? data.map((item, index) => {
            return (<tr key={index} className='text-center'>
              <td className='py-12'>{item.pincode}</td>
              <td className='py-12'>{item.City}</td>
              <td className="py-12">{item.State}</td>
              <td className='py-12'>{item.postoffice_name}</td>
              <td className='py-12 flex justify-center space-x-5'>
                <Example status={true} item={item} />
                <PostModalDel item={item} />
              </td>
            </tr>)
          }) : null}
        </tbody>
      </table>
      <div className='flex justify-center m-20'>
        <button disabled={sessionStorage.getItem("filter") ? parseInt(JSON.parse(sessionStorage.getItem("filter"))) === 0 ? true : false : c === 0 ? true : false} onClick={() => {
          if (sessionStorage.getItem("filter")) {
            let a = parseInt(JSON.parse(sessionStorage.getItem("filter")))
            a = a - 20
            sessionStorage.setItem("filter", a)
            updateState(filter[0].State)
          } else getAgain(false)
        }} className='px-14 py-8 bg-purple-600 text-white mx-6 rounded-20'>Previous</button>
        <button onClick={() => {
          if (sessionStorage.getItem("filter")) {
            let a = parseInt(JSON.parse(sessionStorage.getItem("filter")))
            a = a + 20
            sessionStorage.setItem("filter", a)
            updateState(filter[0].State)
          } else getAgain(true)
        }} className='px-14 py-8 bg-purple-600 text-white mx-6 rounded-20'>Next</button>
      </div>
    </>
  )
}

export default Post_Office_Master