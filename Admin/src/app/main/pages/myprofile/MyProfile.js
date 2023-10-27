import React, { useState } from 'react'

function MyProfile() {

  const [name, setName] = useState((JSON.parse(localStorage.getItem("user"))).data.displayName)


  async function updateName() {
    let data = await fetch(`/updt_user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        email: JSON.parse(localStorage.getItem("user")).data.email,
      })
    })

    let res = await data.json()
    alert(res.status)
  }

    return (
      <>
        <div className=' m-20 '>
          <h2 className='my-10 font-700'>My Profile</h2>
          <form action="" className="form-box-profile">
            <div className="inner-form-box m-10">
              <div className="profileform bg-white p-20">
                <div className="innerprofileform grid gap-7 pb-20">
                  <div className="inner-title">
                    <h3 className='font-700'>Update Profile</h3>
                  </div>
                  <div className="profile-form-title">
                    <h4 className='font-700'>Name</h4>
                  </div>
                  <div className="profileform-input">
                    <input onChange={(e) => { setName(e.target.value) }} value={name} className='border rounded w-1/2 p-5 text-black' type="text" name="profile" id="profile" placeholder='Holmes Blevins' />
                  </div>
                  <div className="profile-form-email">
                    <h4 className='font-700'>Email</h4>
                  </div>
                  <div className="profileform-input">
                    <input className='border rounded w-1/2 p-5' type="text" name="profile" id="profile" placeholder={JSON.parse(localStorage.getItem("user")).data.email} disabled />
                  </div>
                  {/* <div className="profile-form-password">
            <h4 className='font-700'>Password</h4>
          </div> */}
                  {/* <div className="profileform-input">
            <input className='border rounded w-1/2 p-5' type="text" name="profile" id="profile" />
          </div> */}
                </div>
              </div>
              <div className="submitbutton-profile m-20">
                <div className="submitbutton">
                  <button onClick={(e)=>{
                    e.preventDefault()
                    updateName()
                  }} className='rounded border border-black p-5 mx-10'>Update Profile</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </>
    )
  }

  export default MyProfile