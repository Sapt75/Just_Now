import React from 'react'

function ChangePassword() {
  return (
    <>
    
    <div className=' m-20 '>
      <h2 className='my-10 font-700'>Change password</h2>
      <form action="" className="form-box-password">
        <div className="inner-form-box m-10">
        <div className="passwordform bg-white p-20">
          <div className="innerpasswordform grid gap-7 pb-20">
            {/* <div className="inner-title">
              <h3 className='font-700'>Change password</h3>
            </div> */}
          <div className="password-form-title">
            <h4 className='font-700'>Current Password</h4>
          </div>
          <div className="passwordform-input">
            <input className='border rounded w-1/2 p-5' type="text" name="password" id="password" />
          </div>
          <div className="password-form-email pt-10">
            <h4 className='font-700'>New Password</h4>
          </div>
          <div className="passwordform-input">
            <input className='border rounded w-1/2 p-5' type="text" name="password" id="password" />
          </div>
          <div className="password-form-password pt-10">
            <h4 className='font-700'>Confirm Password</h4>
          </div>
          <div className="passwordform-input">
            <input className='border rounded w-1/2 p-5' type="text" name="password" id="password" />
          </div>
          </div>
        </div>
        <div className="submitbutton-password m-20">
            <div className="submitbutton">
              <button className='rounded border border-black p-5 mx-10'>Save Details</button>
            </div>
          </div>
        </div>
      </form>
      </div>
    </>
  )
}

export default ChangePassword