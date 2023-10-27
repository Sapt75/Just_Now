import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./homepage.css"
// import React from 'react';

function HomePage() {

  const [banner, setBanner] = useState("https://ik.imagekit.io/GORP/Home/Banner/Banner.jpg?updatedAt=1694064372978")
  const [advert, setAdvert] = useState({
    image: "https://ik.imagekit.io/GORP/Home/Advertisement/Advertisement.jpg?updatedAt=1694068375969",
    link: "",
    status: true
  })



  async function changeImage(itm) {
    let formData = new FormData()

    formData.append("images", itm)

    await fetch(`/img/Banner`, {
      method: "POST",
      body: formData
    })

    await fetch(`/updt_advt/Banner`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })

  }

  async function getBanner() {
    let data = await fetch("/get_home/Banner", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    let res = await data.json()
    let date = Date.parse(res[0].updatedAt)
    setBanner(`https://ik.imagekit.io/GORP/Home/Banner/Banner.jpg?updatedAt=${date}`)

  }

  async function getItem() {
    let data = await fetch(`/advertisement`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })

    let adv = await fetch(`/get_home/Advertisement`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })


    let res = await data.json()

    let ress = await adv.json()

    let time = Date.parse(ress[0].updatedAt)

    setAdvert({
      image: `https://ik.imagekit.io/GORP/Home/Advertisement/Advertisement.jpg?updatedAt=${time}`,
      link: res[0].advertisement_link,
      status: res[0].status
    })
  }

  async function changeAdvertisement(itm, type) {
    if (type === "image") {
      let formData = new FormData()

      formData.append("images", itm)

      await fetch(`/img/Advertisement`, {
        method: "POST",
        body: formData
      })

      await fetch(`/updt_advt/Advertisement`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })

    } else {
      let data = await fetch(`/change_advertisement`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          link: itm
        })
      })
      let res = await data.json()
      alert(res)
    }
  }

  async function showStatus(itm) {

    setAdvert({
      image: advert.image,
      link: advert.link,
      status: itm
    })


    let data = await fetch(`/change_status/${itm}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    let res = await data.json()
    alert(res)
  }

  useEffect(() => {
    getItem()
    getBanner()
  }, [])


  return (
    <>
      <div className='m-[3rem]'>
        <div className='mb-[5rem]'>
          <h1 className='text-2xl font-semibold mb-[3rem]'>Home Page Banner Image</h1>
          <div>
            <img className='w-full h-[25rem] object-cover object-bottom' src={`${banner}`} alt="" />
          </div>
          <div className='text-center pt-[4rem]'>
            <form action="">
              <label class="p-5 bg-blue-500 text-white">
                <input accept='image/*' onChange={() => {
                  var input = document.getElementById("file-id");
                  var fReader = new FileReader();
                  changeImage(input.files[0])
                  fReader.readAsDataURL(input.files[0]);
                  fReader.onloadend = function (event) {
                    setBanner(event.target.result)
                  }
                }} type="file" id='file-id' />
                Change Image
              </label>
            </form>
          </div>
        </div>
        <div>
          <h1 className='text-2xl font-semibold mb-[3rem]'>Home Page Advertisement</h1>
          <div>
            <img className='w-full h-[25rem] object-cover object-bottom' src={`${advert ? advert.image : null}`} alt="" />
            <div className='text-center pt-[4rem]'>
              <label class="p-6 bg-blue-500 text-white">
                <input accept='image/*' onChange={() => {

                  let input = document.getElementById("advert-id2");
                  let fReader = new FileReader();
                  fReader.readAsDataURL(input.files[0]);
                  fReader.onloadend = function (event) {
                    let newItm = {
                      image: event.target.result,
                      link: advert.link,
                      status: advert.status
                    }
                    changeAdvertisement(input.files[0], "image")
                    setAdvert(newItm)
                  }
                }} type="file" id='advert-id2' />
                Change Image
              </label>
              <button onClick={() => {
                if (advert.status === true) {
                  showStatus(false)
                } else {
                  showStatus(true)
                }
              }} className='py-5 px-[2rem] mx-[1rem] bg-blue-500 text-white'>{advert.status ? "Visible" : "Hidden"}</button>
            </div>
          </div>
          <div className='text-center pt-[4rem]'>
            <form onSubmit={(e) => {
              e.preventDefault()
              changeAdvertisement(e.target.link.value, "link")
              let newItm = {
                image: advert.image,
                link: e.target.link.value,
                status: advert.status
              }
              setAdvert(newItm)
            }}>
              <input className='py-3' onChange={(e) => {

                let newItm = {
                  image: advert.image,
                  link: e.target.value,
                  status: advert.status
                }
                setAdvert(newItm)

              }} type="text" name='link' value={`${advert ? advert.link : null}`} />
              <button className='px-4 py-3 bg-blue-600 font-semibold mx-5 text-white' type='submit'>Change Advertisement</button>
            </form>


          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
